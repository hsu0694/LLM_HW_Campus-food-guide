# 專案規範書：校園食光機 (Campus Food Time Machine)

## 1. 專案定位與核心架構
- **專案名稱**：校園食光機 — 大台北學生高 CP 值美食圖鑑
- **專案目的**：建立一個專為大台北大學生設計的平價美食指南。本專案採用**「資料與版面分離（Data-Driven Static Architecture）」**架構，所有店家資訊集中管理於 `assets/data.js`，前端頁面透過 URL 參數動態渲染，確保未來新增店家時 100% 維持視覺與結構一致性，零排版破壞風險。
- **部署環境**：GitHub Pages（純靜態網頁，無需後端伺服器或建置工具）。

## 2. 專案目錄結構
```text
campus-food-guide/
├── AGENTS.md          # 本專案開發與擴充規範（AI 最高指導原則）
├── index.html         # 首頁：分類篩選列 + 店家卡片總覽（Card Grid）
├── shop.html          # 內頁模板：透過 ?id=xxx 動態載入單一店家詳細資訊
└── assets/
    ├── style.css      # 全站共用設計系統與 RWD 響應式樣式
    ├── data.js        # 核心資料庫（儲存所有店家物件的陣列）
    └── app.js         # 前端渲染邏輯（負責首頁篩選、卡片生成與內頁資料綁定）
```

## 3. 視覺設計系統 (Design System)
所有樣式皆統一定義於 `assets/style.css` 的 `:root` 變數中，禁止在 HTML 或 JS 中寫死色碼：
- **色彩規範（暖食光文青風）**：
  - `--bg-main`: `#FAF8F5`（米白暖色背景，提升食慾與閱讀舒適度）
  - `--bg-card`: `#FFFFFF`（純白卡片底色，搭配 `1px solid #EAE5DC` 細邊框與 `12px` 圓角）
  - `--primary`: `#E05A47`（暖橘紅，用於推薦標籤、重點價格與 active 篩選按鈕）
  - `--secondary`: `#2B5B6C`（深青藍，用於分類標籤與標題強調）
  - `--text-main`: `#2D2A26`（深炭灰主文字）
  - `--text-muted`: `#6E685F`（次要說明文字）
- **版面與響應式規範**：
  - 全站最大容器寬度 `1040px` 置中。
  - 首頁卡片採 CSS Grid 排版：桌機版 3 欄、平板版 2 欄、手機版（`< 640px`）自動轉為單欄。

## 4. 資料庫結構規範 (`assets/data.js` Schema)
`assets/data.js` 必須宣告全域常數 `const SHOPS_DATA = [ ... ]`。每一筆店家物件**必須嚴格遵守以下欄位、型別與字數限制**，缺一不可：

### 欄位定義表
| 欄位名稱 | 資料型別 | 必填 | 格式與限制說明 |
| :--- | :--- | :--- | :--- |
| `id` | String | 是 | 唯一識別碼，格式：`{學校或商圈英文縮寫}-{兩位數編號}`（如 `nccu-01`, `ntu-02`） |
| `name` | String | 是 | 店家完整名稱 |
| `area` | String | 是 | 鄰近學區或捷運站（如：`政大周邊`、`公館商圈`、`師大／溫州街`、`輔大周邊`） |
| `category` | String | 是 | **嚴格限定四選一**：`"正餐"` \| `"咖啡廳"` \| `"宵夜"` \| `"甜點飲料"` |
| `avgPrice` | Number | 是 | 學生平均一餐消費金額（純數字，例如：`135`，前端會自動加上 `均消 NT$ ` 前綴） |
| `badge` | String | 是 | 推薦度短標籤（限 4 字內，如：`"必吃推薦"`、`"CP值爆表"`、`"月底救星"`、`"讀書首選"`） |
| `summary` | String | 是 | 首頁卡片短介紹（限 25～40 字，需點出核心亮點） |
| `mustOrder` | Array | 是 | 必點菜單陣列（至少 2 項），每項包含 `{ item: String, price: Number, note: String }` |
| `environment` | Object | 是 | 包含 `seats`（座位與排隊）、`vibe`（氛圍）、`wifiAndPlug`（網路與插座）三個字串 |
| `review` | String | 是 | 學生視角真實短評（限 80～150 字，需包含點餐建議或避雷提醒） |
| `address` | String | 是 | 完整實體地址 |
| `mapUrl` | String | 是 | Google Maps 搜尋連結（格式：`https://www.google.com/maps/search/?api=1&query=店名+區域`） |

### 標準資料範例 (Few-Shot Example)
AI 新增資料時，必須完全比照以下格式與語氣：
```javascript
{
  id: "ntu-02",
  name: "鳳城燒臘粵菜",
  area: "公館商圈",
  category: "正餐",
  avgPrice: 130,
  badge: "份量驚人",
  summary: "台大學生公認的巨無霸燒臘飯，招牌三寶淋上獨門濃郁醬汁，一餐抵兩餐。",
  mustOrder: [
    { item: "招牌三寶飯", price: 130, note: "叉燒、油雞、燒鴨一次滿足，淋醬超下飯" },
    { item: "廣州炒麵", price: 140, note: "脆麵吸飽勾芡海鮮醬汁，口感層次豐富" }
  ],
  environment: {
    seats: "約 50 席，用餐尖峰需與人併桌",
    vibe: "老字號港式快餐店、喧鬧有活力",
    wifiAndPlug: "無 Wi-Fi / 無插座"
  },
  review: "公館屹立不搖的學生愛店！它的醬汁偏甜且給得非常大方，搭配滿滿的肉量，食量大的男生也絕對吃得飽。建議避開平日中午 12 點，否則排隊會排到騎樓外。",
  address: "台北市大安區新生南路三段 58 號",
  mapUrl: "[https://www.google.com/maps/search/?api=1&query=鳳城燒臘粵菜+公館](https://www.google.com/maps/search/?api=1&query=鳳城燒臘粵菜+公館)"
}
```

## 5. AI 擴充與維護標準作業程序 (SOP)
當使用者要求**「新增一間店家」**或**「擴充美食圖鑑」**時，AI 必須嚴格執行以下規則：
1. **僅修改資料庫**：只需編輯 `assets/data.js`，在 `SHOPS_DATA` 陣列的最前方插入符合第 4 節 Schema 的新物件。
2. **禁止更動結構檔**：除非使用者明確要求修改版面或功能，否則**嚴禁修改** `index.html`、`shop.html`、`assets/style.css` 與 `assets/app.js`。
3. **資料自動補全與防呆**：
   - 若使用者僅提供店名與簡單心得，AI 需主動推斷合理的 `area`、`category` 與 `avgPrice`（須為純數字），並自動生成對應的 Google Maps 搜尋連結。
   - 確保新資料的 `id` 不與現有 `SHOPS_DATA` 中的任何 `id` 重複。
   - 確認 `category` 必須嚴格屬於四種預設分類之一，否則首頁篩選按鈕將無法正確過濾該店家。
4. **語言與語氣**：所有文案一律使用**繁體中文（台灣用語）**，保持大學生分享口袋名單的真誠、實用口吻。