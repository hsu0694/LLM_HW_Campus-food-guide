const SHOPS_DATA = [
  {
    id: "nccu-01",
    name: "波波恰恰大馬風味餐",
    area: "政大周邊",
    category: "正餐",
    avgPrice: 135,
    badge: "CP值爆表",
    summary: "政大學生最愛南洋料理，免費白飯與超濃郁西米露無限續碗，月底吃飽首選。",
    mustOrder: [
      { item: "海南雞腿飯", price: 135, note: "雞腿軟嫩搭配蔥油醬，白飯可無限續" },
      { item: "肉骨茶湯麵", price: 130, note: "藥膳湯頭清甜回甘，冬天暖胃必點" }
    ],
    environment: {
      seats: "約 40 席，中午 12 點必排隊",
      vibe: "熱鬧學生食堂感、翻桌率極快",
      wifiAndPlug: "無 Wi-Fi / 無插座"
    },
    review: "在政大生存不能不知道的店！主餐份量本身就很足，最佛心的是內用白飯跟冰涼的摩摩喳喳西米露都可以自己裝到飽，建議避開 12:10 的下課人潮。",
    address: "台北市文山區指南路二段 48 號",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=波波恰恰大馬風味餐+政大"
  },
  {
    id: "nccu-02",
    name: "小公寓 Apt. Cafe",
    area: "政大周邊",
    category: "咖啡廳",
    avgPrice: 160,
    badge: "讀書首選",
    summary: "政大校門口二樓的文青老宅咖啡廳，不限時且有插座，期中期末趕報告聖地。",
    mustOrder: [
      { item: "焦糖海鹽拿鐵", price: 140, note: "奶泡綿密順口，微鹹甜風味很適合提神" },
      { item: "肉桂捲", price: 110, note: "烤得外酥內軟，肉桂香氣濃郁不嗆辣" }
    ],
    environment: {
      seats: "約 35 席，窗邊吧台與大木桌最搶手",
      vibe: "復古安靜老宅風、充滿讀書與打字聲",
      wifiAndPlug: "有穩定 Wi-Fi / 多數靠牆座位附插座"
    },
    review: "就在麥當勞斜對面二樓，地點超級方便！平日下午幾乎坐滿抱著筆電的政大學生，氣氛非常適合專心寫程式或趕報告，低消一杯飲料就能待整個下午。",
    address: "台北市文山區指南路二段 56 號 2 樓",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=小公寓+Apt+Cafe+政大"
  },
  {
    id: "nccu-03",
    name: "政大烤場",
    area: "政大周邊",
    category: "宵夜",
    avgPrice: 110,
    badge: "宵夜霸主",
    summary: "指南路深夜排隊名店，獨門秘製烤肉醬搭配炭火香氣，社團練完必買的邪惡宵夜。",
    mustOrder: [
      { item: "秘製烤雞腿排", price: 85, note: "外皮微焦酥脆、肉汁飽滿，刷醬超夠味" },
      { item: "炭烤甜不辣與米血", price: 35, note: "烤到膨脹微酥，刷上蒜蓉烤醬必點" }
    ],
    environment: {
      seats: "以外帶為主，店前騎樓可稍作等候",
      vibe: "深夜熱鬧宵夜攤、越晚排隊人潮越多",
      wifiAndPlug: "無 Wi-Fi / 無插座"
    },
    review: "政大人半夜肚子餓的共同回憶！他們的烤醬鹹甜適中還帶點炭火焦香，每次經過指南路都會被香味吸引過去。因為現點現烤需要時間，建議先點餐再去超商買飲料。",
    address: "台北市文山區指南路二段 53 號",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=政大烤場"
  },
  {
    id: "ntu-01",
    name: "藍家割包",
    area: "公館商圈",
    category: "正餐",
    avgPrice: 95,
    badge: "必吃推薦",
    summary: "公館排隊名店，可自由選擇肥瘦比例的靈魂割包，搭配四神湯百元出頭搞定。",
    mustOrder: [
      { item: "綜合偏肥割包", price: 65, note: "入口即化的滷肉配上滿滿花生粉與酸菜" },
      { item: "四神湯", price: 65, note: "小腸處理得很乾淨，湯頭帶有淡淡酒香" }
    ],
    environment: {
      seats: "約 30 席，外帶與內用分流",
      vibe: "傳統小吃店氛圍、上菜速度神快",
      wifiAndPlug: "無 Wi-Fi / 無插座"
    },
    review: "台大學生從大一吃到畢業的經典味道，最貼心的是肥瘦可以客製化，推薦點「綜合偏肥」才不會乾柴，搭配一碗熱騰騰的四神湯就是完美的課間午餐。",
    address: "台北市中正區羅斯福路三段 316 巷 8 弄 3 號",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=藍家割包+公館"
  }
];