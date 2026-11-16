# LLM_HW_Campus-food-guide
# 🍱 校園食光機 (Campus Food Time Machine)

> **大台北學生高 CP 值美食圖鑑** — 專為大學生設計的平價美食指南，採用「資料與版面分離」架構與 `AGENTS.md` AI 協作規範打造。

## ✨ 專案特色
- **分類即時篩選**：支援「正餐、咖啡廳、宵夜、甜點飲料」四大分類一鍵過濾。
- **學生視角資訊**：清楚標示平均客單價（`均消 NT$`）、推薦標籤、必點菜單、座位與 Wi-Fi 插座狀況、真實短評與 Google Maps 導航。
- **資料與版面分離（Data-Driven）**：所有店家資訊集中於 `assets/data.js`，透過 URL 參數（`shop.html?id=xxx`）動態渲染內頁，確保新增店家時 100% 維持排版一致。
- **AI 友善擴充規範**：根目錄附有完整的 [`AGENTS.md`](./AGENTS.md)，明確定義資料 Schema 與新增 SOP，讓 AI 助手能零誤差快速擴充新店家。

## 📂 專案結構
```text
campus-food-guide/
├── AGENTS.md          # AI 開發與內容擴充最高指導規範
├── README.md          # 專案說明文件
├── index.html         # 首頁（分類篩選與店家卡片總覽）
├── shop.html          # 店家詳情內頁模板
└── assets/
    ├── style.css      # 全站設計系統與 RWD 響應式樣式
    ├── data.js        # 店家核心資料庫
    └── app.js         # 前端渲染與分類篩選邏輯
```

## 🚀 如何新增店家（AI 協作方式）
本專案遵循 `AGENTS.md` 規範，只需對 AI 助手下達指令（例如：「請依照 `AGENTS.md` 幫我新增一間政大周邊的美食：XXX」），AI 即會自動產出符合規格的資料物件並寫入 `assets/data.js`，無需更動任何 HTML 或 CSS 檔案。
