# 網站內建字型

- `iansui-site.woff2`：芫荽 Iansui 1.020，負責標題、品牌名稱與具情感語氣的文字。
- `noto-sans-tc-site.woff2`：Noto Sans TC variable，負責內文與介面控制。
- `OFL-Iansui.txt`、`OFL-NotoSansTC.txt`：兩套字型的 SIL Open Font License 1.1 授權文件。

兩個 WOFF2 都是依目前 `index.html`、`main.js` 與 `styles.css` 的實際字元製作的網站子集，能減少下載量。若日後新增頁面文字或新的罕用字，需以官方原始字型重新產生子集。

官方來源：

- https://github.com/ButTaiwan/iansui/releases/tag/v1.020
- https://github.com/google/fonts/tree/main/ofl/notosanstc
