# OpenHUTB 产品网站

此仓库包含 OpenHUTB 产品网站（网址为 https://openhutb.github.io/index/ ）的 HTML、CSS 和 JavaScript 代码，以及图片和视频。

将更改推入或合并到主分支中以触发新的生成。

![Website home](img/website_home.png)


## [表单](https://spreadsheet.dev/submit-responses-to-google-form-apps-script)
在链接后加上`prefill`获取表单的链接，比如：`https://docs.google.com/forms/d/17iLRIUupq9wNmepk1joLdZNUjTDzSBYUKuMGRmeJhrk/prefill`。
点击`获取链接`后得到
```text
https://docs.google.com/forms/d/e/1FAIpQLSeulL-lo5X5RvMhl5k67ce5eH0xxRLPj9zZt7nvn_QnJ2r6Vg/viewform?usp=pp_url&entry.747794403=%E7%8E%8B%E6%B5%B7%E4%B8%9C&entry.1632029714=15600395015&entry.1590379477=whd@hutb.edu.cn&entry.1094240097=OpenHUTB&entry.916006018=%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6&entry.314484191=%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%A8%A1%E6%8B%9F%E5%99%A8%E5%AE%9A%E5%88%B6%E5%BC%80%E5%8F%91
```
其中，`entry.`加上后面的数字即为 [index.html](./index.html) 文件中输入框的名字`name`。

替换后，在 vscode 中的 index.html 中右键选择`Open with Live Server`。

