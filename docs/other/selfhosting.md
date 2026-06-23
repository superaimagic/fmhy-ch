---
title: 自托管 FMHY
description: 本指南将帮助你在本地设置并运行自己的 FMHY 实例。
---

# 自托管

:::warning
请注意，你**必须**将你的实例与官方网站（fmhy.net）区分开来，以避免混淆。具体步骤见第 4 步。
:::

本指南将帮助你在本地设置并运行自己的 FMHY 实例。

### Docker（实验性）

要运行本地实例，你需要安装 [Docker](https://docs.docker.com/get-docker/) 和 [Docker Compose](https://docs.docker.com/compose/install/)。

安装完成后，运行以下命令：

```bash
git clone https://github.com/fmhy/edit.git
cd edit
sudo docker compose up --build
```

构建镜像并启动容器可能需要几分钟，运行在 4173 端口。

### Nix Flake

你可以使用 [nix](https://nixos.org/) 来设置开发环境，我们有一个 [flake](https://nixos.wiki/wiki/Flakes) 可以配置 `nodejs` 和 `pnpm`。

1. Fork 仓库并使用 `git clone https://github.com/fmhy/edit.git` 克隆到本地。
2. 运行 `nix flake update` 更新 flake 锁文件。
3. 运行 `nix develop` 进入开发环境。
4. 进行修改。
5. 运行 `exit` 退出开发环境。

### 手动安装

你需要安装以下工具：
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) - 安装 25.2.1 版本
- [pnpm 9.12.2+](https://pnpm.io/installation)

#### 第 1 步：克隆仓库

```bash
git clone https://github.com/fmhy/edit.git
cd edit
```

#### 第 2 步：安装依赖

使用 pnpm 安装项目依赖：

```bash
pnpm install
```

#### 第 3 步：开发模式

以开发模式运行项目：

```bash
# 以开发模式启动文档站点
pnpm docs:dev

# 以开发模式启动 API（如需要）
pnpm api:dev
```

开发服务器默认在 `http://localhost:5173` 启动。

#### 第 4 步：生产构建

你需要更新以下内容：
- `meta`：`docs/.vitepress/constants.ts` 中的常量
  - `name`：你的实例名称
  - `hostname`：你的域名
  - `description`：你的实例描述
  - `tags`：OpenGraph 标签
  - `build`：构建选项（可通过[环境变量](/other/selfhosting#environment-variables)配置）
- `docs/index.md`
  - `title`
  - `description`
  - `hero.name`
  - `hero.tagline`

构建生产版本：

```bash
# 构建文档站点
pnpm docs:build

# 构建 API（如需要），使用 Node.js 预设
NITRO_PRESET=node pnpm api:build
```

#### 第 5 步：预览生产构建

在本地预览生产构建：

```bash
# 预览文档站点
pnpm docs:preview

# 预览 API（如需要）
pnpm api:preview
```

#### 第 6 步：部署

详情请参阅 [VitePress 部署指南](https://vitepress.dev/guide/deploy)。

### API 部署

如果你想部署 API 组件（反馈系统），你需要设置 Cloudflare Workers 和 KV 存储。

#### 前提条件

- 一个 [Cloudflare 账户](https://dash.cloudflare.com/sign-up)
- 全局安装 [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

#### 第 1 步：配置 Wrangler

使用你的 Cloudflare 账户信息更新 `wrangler.toml`：

1. 从 Cloudflare 控制面板获取你的账户 ID（在右侧边栏中）
2. 将 `wrangler.toml` 中的 `account_id` 值替换为你的账户 ID
3. 如果你使用自定义域名，保持 `workers_dev = false` 并更新 `routes` 部分
4. 如果你部署到 `*.workers.dev`，设置 `workers_dev = true` 并删除 `routes` 部分

#### 第 2 步：创建 KV 命名空间

创建用于数据存储的 KV 命名空间：

```bash
npx wrangler kv:namespace create STORAGE
```

此命令将返回一个命名空间 ID。复制此 ID 并替换 `wrangler.toml` 中 `[[kv_namespaces]]` 部分（第 14 行）的 `id` 值。

**注意：** 如果你不想在本地运行 Wrangler 来部署（例如在 CI/CD 中），你需要：
1. 在 Cloudflare 控制面板中手动创建 KV 命名空间
2. 在你的 fork 中更新 `wrangler.toml` 中的 `account_id` 和 `id` 值

#### 第 3 步：构建并部署

构建并部署 API：

```bash
# 构建 API
pnpm api:build

# 部署到 Cloudflare Workers
pnpm api:deploy
```

API 将部署到你配置的域名或 `*.workers.dev` 子域名。

#### 速率限制（可选）

速率限制器绑定需要通过 Cloudflare 控制面板进行设置。基本部署可以跳过此项，或稍后通过 Workers 控制面板的"Rate limiting"部分进行配置。

#### 环境变量

##### 构建时变量（用于文档）

这些变量控制构建文档站点时包含的内容：

- `FMHY_BUILD_NSFW` - 启用 NSFW 侧边栏条目（实验性）
- `FMHY_BUILD_API` - 启用反馈系统的 API 组件

##### 运行时变量（用于 API Worker）

这些变量由已部署的 Cloudflare Worker API 使用：

- `WEBHOOK_URL` - 用于发布反馈消息的 Discord Webhook URL（API 反馈功能必需）

#### 故障排除

1. 如果遇到 Node.js 版本问题，请确保使用 Node.js 21+
2. 对于 pnpm 相关问题，请确保使用 pnpm 9+
3. 如果遇到构建问题，尝试清除缓存：
    ```bash
    # Linux
    rm -rf docs/.vitepress/cache

    # PowerShell
    rm -r -fo docs/.vitepress/cache
    ```

### 反向代理

你应该能够将任何反向代理与此 VitePress 网站配合使用，但可以在[仓库这里](https://github.com/fmhy/edit/blob/main/.github/assets/nginx.conf)找到合理的 nginx 服务器配置
