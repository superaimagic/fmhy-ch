/**
 *  Copyright (c) 2025 taskylizard. Apache License 2.0.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import type { DefaultTheme } from 'vitepress'

// @unocss-include

export const meta = {
  name: 'freemediaheckyeah',
  description: '互联网上最大的免费资源合集！',
  hostname: 'https://fmhy.net',
  keywords: ['stream', 'movies', 'gaming', 'reading', 'anime'],
  build: {
    api: true,
    nsfw: true
  }
}

export const excluded = [
  'readme.md',
  'single-page',
  'single-page.md',
  'feedback.md',
  'index.md',
  'sandbox.md',
  'startpage.md'
]

const safeEnv = (key: string) =>
  typeof process !== 'undefined' ? process.env?.[key] : undefined

if (safeEnv('FMHY_BUILD_NSFW') === 'false') {
  meta.build.nsfw = false
}
if (safeEnv('FMHY_BUILD_API') === 'false') {
  meta.build.api = false
}

const formatCommitRef = (commitRef: string) =>
  `<a href="https://github.com/fmhy/edit/commit/${commitRef}">${commitRef.slice(0, 8)}</a>`

const cfStart = safeEnv('CF_PAGES_COMMIT_SHA')
const commitStart = safeEnv('COMMIT_REF')

export const commitRef =
  safeEnv('CF_PAGES') && cfStart
    ? formatCommitRef(cfStart)
    : commitStart
      ? formatCommitRef(commitStart)
      : 'dev'

export const feedback = `<a href="/feedback" class="feedback-footer">Made with ❤</a>`

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: 'https://github.com/fmhy/edit' },
  { icon: 'discord', link: 'https://github.com/fmhy/FMHY/wiki/FMHY-Discord' },
  {
    icon: 'reddit',
    link: 'https://reddit.com/r/FREEMEDIAHECKYEAH'
  }
]

export const nav: DefaultTheme.NavItem[] = [
  { text: '📑 更新日志', link: '/posts/changelog-sites' },
  { text: '📖 术语表', link: 'https://rentry.org/The-Piracy-Glossary' },
  {
    text: '💾 备份',
    link: '/other/backups'
  },
  {
    text: '🌱 生态',
    items: [
      { text: '🌐 搜索', link: '/posts/search' },
      { text: '❓ 常见问题', link: '/other/FAQ' },
      { text: '🔖 书签', link: 'https://github.com/fmhy/bookmarks' },
      { text: '✅ SafeGuard', link: 'https://github.com/fmhy/FMHY-SafeGuard' },
      { text: '🚀 起始页', link: 'https://fmhy.net/startpage' },
      { text: '🔎 SearXNG', link: 'https://searx.fmhy.net/' },
      {
        text: '💡 站点挖掘',
        link: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/find-new-sites/'
      },
      {
        text: '😇 SFW FMHY',
        link: 'https://fmhy.xyz/'
      },
      {
        text: '🏠 自托管',
        link: '/other/selfhosting'
      },
      { text: '🏞 壁纸', link: '/other/wallpapers' },
      { text: '💙 反馈', link: '/feedback' }
    ]
  }
]

export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = [
  {
    text: '<span class="i-twemoji:books"></span> 新手指南',
    link: '/beginners-guide'
  },
  {
    text: '<span class="i-twemoji:newspaper"></span> 文章',
    link: '/posts'
  },
  {
    text: '<span class="i-twemoji:light-bulb"></span> 贡献',
    link: '/other/contributing'
  },
  {
    text: 'Wiki',
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:name-badge"></span> 广告拦截 / 隐私',
        link: '/privacy'
      },
      {
        text: '<span class="i-twemoji:robot"></span> 人工智能',
        link: '/ai'
      },
      {
        text: '<span class="i-twemoji:television"></span> 电影 / 电视 / 动漫',
        link: '/video'
      },
      {
        text: '<span class="i-twemoji:musical-note"></span> 音乐 / 播客 / 电台',
        link: '/audio'
      },
      {
        text: '<span class="i-twemoji:video-game"></span> 游戏 / 模拟器',
        link: '/gaming'
      },
      {
        text: '<span class="i-twemoji:green-book"></span> 书籍 / 漫画 / Manga',
        link: '/reading'
      },
      {
        text: '<span class="i-twemoji:floppy-disk"></span> 下载',
        link: '/downloading'
      },
      {
        text: '<span class="i-twemoji:cyclone"></span> BT 种子',
        link: '/torrenting'
      },
      {
        text: '<span class="i-twemoji:brain"></span> 教育',
        link: '/educational'
      },
      {
        text: '<span class="i-twemoji:mobile-phone"></span> Android / iOS',
        link: '/mobile'
      },
      {
        text: '<span class="i-twemoji:penguin"></span> Linux / macOS',
        link: '/linux-macos'
      },
      {
        text: '<span class="i-twemoji:globe-showing-asia-australia"></span> 非英语',
        link: '/non-english'
      },
      {
        text: '<span class="i-twemoji:file-folder"></span> 综合杂项',
        link: '/misc'
      }
    ]
  },
  {
    text: '工具',
    collapsed: false,
    items: [
      {
        text: '<span class="i-twemoji:laptop"></span> 系统工具',
        link: '/system-tools'
      },
      {
        text: '<span class="i-twemoji:card-file-box"></span> 文件工具',
        link: '/file-tools'
      },
      {
        text: '<span class="i-twemoji:paperclip"></span> 网络工具',
        link: '/internet-tools'
      },
      {
        text: '<span class="i-twemoji:left-speech-bubble"></span> 社交媒体工具',
        link: '/social-media-tools'
      },
      {
        text: '<span class="i-twemoji:memo"></span> 文本工具',
        link: '/text-tools'
      },
      {
        text: '<span class="i-twemoji:alien-monster"></span> 游戏工具',
        link: '/gaming-tools'
      },
      {
        text: '<span class="i-twemoji:camera"></span> 图像工具',
        link: '/image-tools'
      },
      {
        text: '<span class="i-twemoji:videocassette"></span> 视频工具',
        link: '/video-tools'
      },
      {
        text: '<span class="i-twemoji:speaker-high-volume"></span> 音频工具',
        link: '/audio#audio-tools'
      },
      {
        text: '<span class="i-twemoji:red-apple"></span> 教育工具',
        link: '/educational#educational-tools'
      },
      {
        text: '<span class="i-twemoji:man-technologist"></span> 开发者工具',
        link: '/developer-tools'
      }
    ]
  },
  {
    text: '更多',
    collapsed: true,
    items: [
      meta.build.nsfw
        ? {
            text: '<span class="i-twemoji:no-one-under-eighteen"></span> NSFW',
            link: 'https://rentry.org/NSFW-Checkpoint'
          }
        : {},
      {
        text: '<span class="i-twemoji:warning"></span> 不安全站点',
        link: '/unsafe'
      },
      {
        text: '<span class="i-twemoji:wastebasket"></span> 最近移除',
        link: '/recently-removed'
      },
      {
        text: '<span class="i-twemoji:package"></span> 存储',
        link: '/storage'
      }
    ]
  }
]
