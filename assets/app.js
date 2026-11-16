document.addEventListener("DOMContentLoaded", () => {
  const shopGrid = document.getElementById("shop-grid");
  const shopDetail = document.getElementById("shop-detail");

  // 首頁邏輯：渲染卡片與分類篩選
  if (shopGrid) {
    const filterBtns = document.querySelectorAll(".filter-btn");

    function renderCards(category) {
      const filtered =
        category === "全部"
          ? SHOPS_DATA
          : SHOPS_DATA.filter((shop) => shop.category === category);

      if (filtered.length === 0) {
        shopGrid.innerHTML = `<p style="color: var(--text-muted);">目前此分類尚無收錄店家，歡迎依照 AGENTS.md 新增！</p>`;
        return;
      }

      shopGrid.innerHTML = filtered
        .map(
          (shop) => `
          <a href="shop.html?id=${encodeURIComponent(shop.id)}" class="shop-card">
            <div>
              <div class="card-tags">
                <span class="tag-badge">${shop.badge}</span>
                <span class="tag-category">${shop.category}</span>
              </div>
              <h2 class="card-title">${shop.name}</h2>
              <div class="card-meta">
                <span>📍 ${shop.area}</span>
                <span>·</span>
                <span class="price-level">均消 NT$ ${shop.avgPrice}</span>
              </div>
              <p class="card-summary">${shop.summary}</p>
            </div>
            <div class="card-footer">查看必點與短評 →</div>
          </a>
        `
        )
        .join("");
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderCards(btn.dataset.category);
      });
    });

    renderCards("全部");
  }

  // 內頁邏輯：依據 URL 參數 ?id=xxx 渲染單一店家
  if (shopDetail) {
    const params = new URLSearchParams(window.location.search);
    const shopId = params.get("id");
    const shop = SHOPS_DATA.find((item) => item.id === shopId);

    if (!shop) {
      shopDetail.innerHTML = `
        <div class="detail-card">
          <h2>找不到該店家資訊</h2>
          <p style="margin: 12px 0; color: var(--text-muted);">請確認網址參數是否正確，或返回首頁重新選擇。</p>
          <a href="index.html" class="map-btn">返回首頁</a>
        </div>
      `;
      return;
    }

    document.title = `${shop.name} — 校園食光機`;

    const menuHtml = shop.mustOrder
      .map(
        (m) => `
        <li class="menu-item">
          <div>
            <span class="menu-item-name">${m.item}</span>
            <span class="menu-item-note">${m.note}</span>
          </div>
          <span class="menu-item-price">NT$ ${m.price}</span>
        </li>
      `
      )
      .join("");

    shopDetail.innerHTML = `
      <article class="detail-card">
        <header class="detail-header">
          <div class="card-tags" style="justify-content: flex-start;">
            <span class="tag-badge">${shop.badge}</span>
            <span class="tag-category">${shop.category}</span>
          </div>
          <div class="detail-title-row">
            <h2>${shop.name}</h2>
          </div>
          <div class="card-meta" style="margin-bottom: 0;">
            <span>📍 ${shop.area}</span>
            <span>·</span>
            <span>平均消費：<strong class="price-level">NT$ ${shop.avgPrice}</strong></span>
          </div>
        </header>

        <section class="detail-section">
          <h3>🍽️ 必點菜單</h3>
          <ul class="menu-list">${menuHtml}</ul>
        </section>

        <section class="detail-section">
          <h3>🏠 店內環境</h3>
          <div class="env-grid">
            <div class="env-box">
              <div class="env-label">座位與排隊狀況</div>
              <div class="env-value">${shop.environment.seats}</div>
            </div>
            <div class="env-box">
              <div class="env-label">用餐氛圍</div>
              <div class="env-value">${shop.environment.vibe}</div>
            </div>
            <div class="env-box">
              <div class="env-label">Wi-Fi 與插座</div>
              <div class="env-value">${shop.environment.wifiAndPlug}</div>
            </div>
          </div>
        </section>

        <section class="detail-section">
          <h3>💬 學生真實短評</h3>
          <div class="review-box">${shop.review}</div>
        </section>

        <section class="detail-section" style="margin-bottom: 0;">
          <h3>🗺️ 店家位置</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${shop.address}</p>
          <a href="${shop.mapUrl}" target="_blank" rel="noopener noreferrer" class="map-btn">在 Google Maps 中開啟</a>
        </section>
      </article>
    `;
  }
});