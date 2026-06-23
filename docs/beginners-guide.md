### 广告拦截

> 使用广告拦截器有多重要？

网站通常包含广告，其中一些可能有害，往往会导致跳转到不需要的页面或出现虚假下载按钮。真正的下载按钮通常较小，多为文字形式或巧妙地融入网站设计中。虚假下载按钮通常很大、颜色鲜艳，使用"立即下载"等通用措辞，并且可能在一个页面上出现多次。很难将它们区分开来，因此始终使用广告拦截器非常重要。请记住，一些文件托管网站会有虚假弹窗，真正的下载发生在下载页面本身内，而不是重定向页面或弹出新标签页。

对于浏览器，我们推荐 **[uBlock Origin (uBO)](https://github.com/gorhill/uBlock)**，你也可以使用 **[Redirect Skipper](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools/#wiki_.25B7_redirect_bypass)** 来跳过烦人的倒计时。请注意，仅 uBO 就足以满足浏览器广告拦截需求；同时使用 DNS 拦截可能会造成冲突。请查看下面浏览器部分了解我们的推荐。另外请注意，我们强烈推荐使用完整版 uBO 而非精简版。

对于手机，推荐 **[AdGuard Premium](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android/#wiki_.25B7_android_adblocking)** / [iOS](https://adguard.com/en/adguard-ios/overview.html) 或 **[Rethink DNS](https://rethinkdns.com/app)**，你可以使用 **[Morphe](https://morphe.software/)** 拦截 YouTube 和 Reddit 的广告，也可以选择[轻松设置](https://wispydocs.pages.dev/revanced-morphe-obtainium/)。请注意，uBO 也可以在 Firefox 等手机浏览器上使用。

!!!note 同时使用多个广告拦截器（如 uBO 和 AdGuard）可能会[出问题](https://x.com/gorhill/status/1033706103782170625)。这只会在常规广告拦截器之间发生，所以将 uBO 与 SponsorBlock 之类的工具一起使用是完全可以的。

***

### 杀毒软件

> 如何安全地扫描文件，并判断检测结果是否为误报？

许多热门文件托管网站的下载按钮会重定向到虚假的恶意下载页面。使用完整版 [uBlock Origin](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/adblock-vpn-privacy#wiki_.25BA_adblocking) 可以防止这种情况，但并非总是有效。阅读本[指南](https://cs.rin.ru/forum/viewtopic.php?f=14&t=159345)了解虚假恶意下载页面的特征以及如何避免它们。一条通用规则是：避免在新标签页或重定向页面打开的下载页面，真正的下载发生在文件托管网站的同一页面内。

在安装任何文件之前，建议使用 **[VirusTotal](https://www.virustotal.com/)** 扫描安装程序，并在 [Triage](https://tria.ge/)（沙箱）中运行。如果你难以判断某项检测是否为误报，请参考 **[扫描指南](https://clarasguide.valeena.workers.dev/Guides/vtguide/)**，或者将其发送到我们的 [Discord](https://github.com/fmhy/FMHY/wiki/FMHY-Discord)，我们会帮你查看。对于 Android 应用，最好在 [Triage](https://tria.ge/) 等沙箱中进行分析。

!!!note 大多数杀毒软件是不必要的，而且可能导致系统变慢。如果你使用可信的网站，Windows Defender 就足以保障安全，你可以偶尔运行一次 [Malwarebytes](https://www.malwarebytes.com/) 扫描以获得额外保护。


***

### 浏览器

> 我应该使用哪个浏览器？

我们推荐 **[Firefox](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools/#wiki_.25B7_firefox_tools)**，但如果你偏好 Chromium 内核，也可以试试 **[注重隐私的浏览器](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/adblock-vpn-privacy/#wiki_.25B7_browser_privacy)** 或 **[Brave](https://brave.com/)**。

Android 推荐 **[Brave](https://brave.com/)** 或 **[Firefox](https://www.firefox.com/browsers/mobile/android/)**。

iOS 推荐 **Safari + [AdGuard](https://adguard.com/en/adguard-ios/overview.html)** 或 **[Brave](https://brave.com/)**。

!!!note 我们建议浏览我们的[扩展](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_browser_extensions) / [用户脚本](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_userscripts)部分，找到增强浏览器的方法。

***

### Base64

> 如何解码 Base64？

如果你看到类似 `aHR0cHM6Ly9mbWh5Lm5ldC8` 这样的文本字符串，可以使用 Base64 解码器来查看。有些可能需要解码两次。

* **[Base64 解码器](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/text-tools/#wiki_.25B7_encode_.2F_decode) / [自动解码](https://greasyfork.org/en/scripts/485772-fmhy-base64-auto-decoder)**

***

### 电影 / 剧集

* **在线观看：[Cineby](https://cineby.at/) / [Rive](https://www.rivestream.app/) / [NEPU](https://nepu.to/) / [Aether](https://aether.bar/)**
* **下载：[目录站](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/video#wiki_.25BA_download_sites)**
* **BT 种子：[ExT.to](https://ext.to/browse/?cat=1) / [1337x](https://1337x.to/movie-library/1/)**
* **体育在线观看：[Streamed](https://streamed.pk/) / [SportyHunter](https://sportyhunter.com/) / [StreamSports99](https://streamsports99.ru)**
* **剧集在线观看：[GoPlay](https://goplay.su/) / [DramaCool](https://dramacool-l.fun/)**
* **追踪/发现：[Simkl](https://simkl.com/) / [Letterboxd](https://letterboxd.com/)**

***

### 动漫

* **在线观看：[Miruro](https://www.miruro.com/) / [All Manga](https://allmanga.to/) / [animepahe](https://animepahe.pw/)**
* **下载：[Tokyo Insider](https://www.tokyoinsider.com/) / [Kayoanime](https://kayoanime.com/)**
* **BT 种子：[Nyaa](https://nyaa.si/) / [Hayase](https://hayase.watch/) / [扩展](https://rentry.co/FMHYB64#hayase)**
* **追踪/发现：[MAL](https://myanimelist.net/) / [AniList](https://anilist.co/)** 

***

### 音乐

* **在线观看：[SpotX](https://github.com/SpotX-Official/SpotX) / [Monochrome](https://monochrome.tf/)**
* **下载：[lucida](https://lucida.to/) / [squid.wtf](https://squid.wtf/) / [Nicotine+](https://nicotine-plus.org/)**
* **Android：[Metrolist](https://metrolist.meowery.eu/) / [Morphe](https://morphe.software/)（YTM 补丁）/ [SpotiFLAC-Mobile](https://github.com/zarzet/SpotiFLAC-Mobile)**
* **iOS：[SpotC++](https://spotc.yodaluca.dev/) / [SpotiFLAC-Mobile](https://github.com/zarzet/SpotiFLAC-Mobile) / [扩展](https://github.com/spotiflacapp/SpotiFLAC-Extension)**
* **追踪/发现：[RateYourMusic](https://rateyourmusic.com/) / [Last.fm](https://www.last.fm/home)**

***

### 游戏

* **下载 / BT 种子：[⁠HizSearch](https://hizsearch.pages.dev/) / [Virgil Game Search](https://virgil.samidy.com/Games/) / [AnkerGames](https://ankergames.net/) / [SteamRIP](https://steamrip.com/) / [FitGirl Repacks](https://fitgirl-repacks.site/)**
* **模拟器 / ROMs：[Emulation Wiki](https://emulation.gametechwiki.com/index.php/Main_Page) / [Axekin](https://www.axekin.com/) / [r/ROMs Mega](https://r-roms.github.io/)**
* **追踪/发现：[Backloggd](https://www.backloggd.com/) / [Glitchwave](https://glitchwave.com/)**

***

### 阅读

* **下载：[Anna's Archive](https://annas-archive.gl/) / [Z-Library](https://z-lib.gd/)**
* **有声书：[Mobilism Audiobooks](https://forum.mobilism.org/viewforum.php?f=124) / [AudiobookBay](https://audiobookbay.lu/) / [警告](https://github.com/fmhy/edit/blob/main/docs/.vitepress/notes/audiobookbay-warning.md)**
* **电子书阅读器：[Readest](https://readest.com/) / [Koodo](https://www.koodoreader.com/) / [Google Play Books](https://play.google.com/books)**
* **漫画：[Weeb Central](https://weebcentral.com/) / [⁠Comix](https://comix.to/)**
* **美漫：[BatCave](https://batcave.biz/) / [ReadComicsOnline](https://rcostation.xyz/) / [GetComics](https://getcomics.org/)**
* **Android 阅读器：[Librera](https://librera.mobi/) / [Moon+ Reader](https://www.moondownload.com/) + [主题指南](https://clarasguide.valeena.workers.dev/Guides/moontheme/)**
* **追踪/发现：[GoodReads](https://www.goodreads.com/)**（书籍）/ [StoryGraph](https://www.thestorygraph.com/)（书籍）/ **[MAL](https://myanimelist.net/)**（漫画）/ **[LeagueOfComicGeeks](https://leagueofcomicgeeks.com/)**（美漫）

***

### 隐私

> 我没有什么可隐藏的，为什么要关心隐私？

隐私是关于控制你的个人信息，而不仅仅是保密。非敏感数据被公司用来追踪你的行为、精准投放广告并影响你的选择。

对于电子邮件隐私，我们推荐 **[Proton](https://proton.me/mail)**，搜索引擎推荐 **[SearXNG](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_searx_instances)**。还建议检查 HaveIBeenPwned 的[邮箱](https://haveibeenpwned.com/)和[密码](https://haveibeenpwned.com/Passwords)查询引擎，确保你的信息未出现在近期的数据泄露中。

!!!note 切记不要在不确认可信的网站上使用真实邮箱或密码。最好在每个注册的网站上使用不同的密码，这样即使发生数据泄露，也只有该网站的密码会受到影响。你也可以使用邮箱[别名](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools/#wiki_.25B7_email_aliasing)。

!!!note 请记住，将个人或机密文件上传到任何文件托管网站/云 AI **绝不是**一个好主意，即使它们声称是加密的。

***

### Windows 指南

> 如何免费下载 / 激活 Windows？

从 Massgrave 的 **[正版安装介质](https://massgrave.dev/genuine-installation-media)** 页面下载 ISO，然后按照 **[全新安装 Windows 指南](https://massgrave.dev/clean_install_windows)** 进行安装。安装完成后，使用 **[Microsoft Activation Scripts](https://rentry.co/FMHYB64#mas)** 激活。如果你想在 Windows 10 停止支持日期之后继续使用，请参考 **[Windows 10 EOL 后续](https://massgrave.dev/windows10_eol)**。

注意，你可以通过打开文件资源管理器，点击"查看"菜单，勾选"文件名扩展名"来显示所有文件的扩展名。

* **[Windows 安装 / 精简指南](https://wispydocs.pages.dev/windows/)**
* **软件站点：[Virgil Software Search](https://virgil.samidy.com/Software/) / [CracksURL](https://cracksurl.com/) / [下载指南](https://cracksurl.com/how-to-download/) / [LRepacks](https://lrepacks.net/)**

***

### BT 种子

> 我需要 VPN 才能 BT 下载吗？

通过 BT 种子下载文件可能会导致 ISP 出现问题，因此在大多数国家使用 **[VPN](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/adblock-vpn-privacy#wiki_.25BA_vpn)** 是必须的。你还应该将 **[VPN 绑定](https://wispydocs.pages.dev/torrenting/)** 到你的 BT 客户端。这确保如果 VPN 连接断开，BT 客户端会停止所有流量，防止你的真实 IP 地址被暴露。你也可以使用 **[远程 BT 服务](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/torrent#wiki_.25B7_remote_torrenting)** 来完全避免使用 VPN。

***

> 什么是端口转发？我需要吗？

[端口转发](https://wispydocs.pages.dev/torrenting/#port-forwarding)（开放端口）是 BT 种子下载的重要组成部分，建议进行设置。虽然不是严格必需的，但它对做种群体有益，有时可以提高下载速度，并改善种子数较少时的连接性。

***

### Android 应用

* **[Mobilism](https://forum.mobilism.org/viewforum.php?f=398)** - 修改版 APK
* **[APKMirror](https://www.apkmirror.com/)** - 原版 APK
* **[Droid-ify](https://droidify.app/)** - FOSS Android 应用 / [GitHub](https://github.com/Droid-ify/client)**
* **[Obtainium](https://github.com/ImranR98/Obtainium/)** - 获取 Android 应用更新

***

### iOS 侧载

* **[TrollStore](https://github.com/opa334/TrollStore)** - 无限应用侧载 [iOS 14.0-17.0]
* **[SideStore](https://sidestore.io/)** - 免越狱侧载应用 [iOS 16.0 及以上]
* **[Sideloadly](https://sideloadly.io/)** - 免越狱侧载应用 [iOS 7.0 及以上]
* **[Impactor](https://impactor.claration.dev/)** - 免越狱侧载

***

### 重要链接

* **下载管理器：[AB Download Manager](https://abdownloadmanager.com/)**
* **[翻译网页](https://github.com/FilipePS/Traduzir-paginas-web)** - 将网页翻译为你的语言
* **[术语表](https://rentry.org/the-piracy-glossary)** - 常见盗版术语定义
* **[不安全网站 / 软件](https://fmhy.net/unsafe)** / [2](https://redd.it/10bh0h9) - 我们建议避免的内容
* **[FMHY.net](https://fmhy.net/)** - 我们的网站，包含更多网站/工具
