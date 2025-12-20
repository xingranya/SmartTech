# SmartTech Solutions - 项目概览

## 项目简介

**SmartTech Solutions** 是一个工业物联网（Industrial IoT）领域的企业级 Web 应用程序，专注于智能硬件销售、SaaS 订阅服务和增值服务。该项目是一个功能完整的 MVP 原型，展示了现代工业智能解决方案的全栈能力。

### 核心业务领域
- **智能硬件销售**：传感器、边缘计算主机、热成像模块、5G 工业网关等
- **SaaS 平台订阅**：基础监测版、专业分析版、企业决策版
- **增值服务**：寿命预测、定制驾驶舱、年度巡检维护、认证培训
- **生态合作**：与国家电网、中国石油、华为、西门子等企业合作

## 技术栈

### 前端框架与库
- **React 19.2.3**：现代化的 UI 框架
- **TypeScript 5.8.2**：类型安全的 JavaScript 超集
- **React Router DOM 7.11.0**：客户端路由管理
- **Tailwind CSS**：通过 CDN 引入的实用优先 CSS 框架
- **Lucide React**：现代化图标库
- **Recharts 3.6.0**：数据可视化图表库

### 构建工具
- **Vite 6.2.0**：快速的前端构建工具
- **@vitejs/plugin-react**：Vite 的 React 插件

### 设计系统
- **品牌色**：科技蓝 (#0066CC) 作为主色调
- **强调色**：橙色 (#f97316) 用于对比
- **字体**：Roboto + PingFang SC（中英文混合）

## 项目结构

```
SmartTech/
├── App.tsx                    # 主应用组件（路由、导航栏、页脚）
├── index.tsx                  # React 应用入口
├── index.html                 # HTML 模板
├── constants.ts               # 业务数据常量（产品、SaaS 方案、服务、合作伙伴）
├── types.ts                   # TypeScript 类型定义
├── vite.config.ts             # Vite 配置文件
├── tsconfig.json              # TypeScript 配置
├── package.json               # 项目依赖和脚本
├── metadata.json              # 项目元数据
├── README.md                  # 项目说明文档
└── pages/                     # 页面组件目录
    ├── HomePage.tsx           # 首页（Hero、特性、统计数据）
    ├── ProductListPage.tsx    # 产品列表页
    ├── ProductDetailPage.tsx  # 产品详情页
    ├── SaaSPage.tsx           # SaaS 订阅方案页
    ├── ServicesPage.tsx       # 增值服务页
    ├── EcosystemPage.tsx      # 生态合作伙伴页
    ├── LoginPage.tsx          # 登录/注册页
    └── PaymentPage.tsx        # 支付页面
```

## 构建与运行

### 前置要求
- Node.js（推荐 LTS 版本）
- npm 或其他包管理器

### 安装依赖
```bash
npm install
```

### 环境变量配置
在项目根目录创建 `.env.local` 文件，并设置 Gemini API Key：
```
GEMINI_API_KEY=your_api_key_here
```

### 开发模式
启动开发服务器（默认运行在 `http://localhost:3000`）：
```bash
npm run dev
```

### 生产构建
构建生产版本：
```bash
npm run build
```

### 预览生产构建
预览构建后的生产版本：
```bash
npm run preview
```

## 开发约定

### 代码风格
- 使用 **TypeScript** 进行类型安全开发
- 采用 **函数式组件** + **React Hooks** 模式
- 使用 **Tailwind CSS** 进行样式编写（实用优先类名）
- 遵循 **React 19** 的最新最佳实践

### 路由管理
- 使用 **HashRouter** 进行客户端路由
- 所有页面组件位于 `pages/` 目录
- 路由配置在 `App.tsx` 的 `<Routes>` 中定义

### 状态管理
- 当前使用 React 内置的 `useState` 和 `useEffect`
- 未引入外部状态管理库（如 Redux/Zustand）

### 数据管理
- 业务数据定义在 `constants.ts` 中
- 类型定义在 `types.ts` 中
- 使用 TypeScript 接口确保数据结构一致性

### 图片资源
- 使用 **Unsplash** 提供的高质量图片（通过 URL 引用）
- 企业 Logo 使用 **Clearbit** 服务获取

### 响应式设计
- 采用移动优先设计原则
- 使用 Tailwind 的响应式断点（`sm:`、`md:`、`lg:` 等）
- 导航栏在移动端自动切换为汉堡菜单

## 核心功能模块

### 1. 导航系统
- **粘性顶部导航栏**：包含品牌 Logo、主导航链接、用户登录、CTA 按钮
- **响应式菜单**：桌面端横向布局，移动端汉堡菜单
- **路由高亮**：当前页面的导航链接自动高亮显示

### 2. 产品展示
- **产品列表**：展示所有智能硬件产品（传感器、边缘计算、配件）
- **产品详情**：详细的产品规格、特性、图片展示
- **分类筛选**：按产品类别进行筛选

### 3. SaaS 订阅
- **三层定价方案**：基础版、专业版、企业版
- **功能对比**：清晰展示各版本的功能差异
- **高亮推荐**：专业版作为推荐方案

### 4. 增值服务
- **服务卡片**：寿命预测、定制驾驶舱、巡检维护、认证培训
- **价格区间**：透明的服务定价范围

### 5. 生态合作
- **合作伙伴展示**：国家电网、中国石油、华为、西门子等
- **合作案例**：展示实际应用场景和成功案例

### 6. 用户系统
- **登录/注册页面**：用户身份验证入口
- **支付页面**：订单结算和支付流程

## API 集成

### Gemini API
项目配置了 Gemini API Key 的环境变量支持：
- 在 `vite.config.ts` 中通过 `define` 注入环境变量
- 可用于 AI 驱动的功能（如智能推荐、预测分析等）

**注意**：当前代码中尚未实际调用 Gemini API，但已完成配置准备。

## 部署说明

### 开发环境
- 服务器端口：`3000`
- 主机：`0.0.0.0`（允许局域网访问）

### 生产部署
1. 运行 `npm run build` 生成 `dist/` 目录
2. 将 `dist/` 目录部署到静态文件服务器（如 Nginx、Vercel、Netlify）
3. 确保配置正确的环境变量

### 路由配置
由于使用 HashRouter，无需服务器端路由配置，所有路由通过 `#` 符号处理。

## AI Studio 集成

该项目是从 **AI Studio** 生成的应用程序：
- AI Studio 应用链接：https://ai.studio/apps/drive/1i0IKrTe23a7QbQzKa9lU74pjB8A5DiYA
- 支持在 AI Studio 中直接查看和编辑

## 扩展建议

### 短期优化
- [ ] 添加单元测试（使用 Vitest 或 Jest）
- [ ] 实现真实的用户认证系统
- [ ] 集成支付网关（如支付宝、微信支付）
- [ ] 添加购物车功能
- [ ] 实现订单管理系统

### 中期优化
- [ ] 后端 API 开发（Node.js + Express 或 Python + FastAPI）
- [ ] 数据库集成（PostgreSQL 或 MongoDB）
- [ ] 用户仪表盘和数据可视化
- [ ] 实际调用 Gemini API 实现 AI 功能
- [ ] 添加国际化支持（i18n）

### 长期优化
- [ ] 微服务架构拆分
- [ ] 实时数据监控与告警系统
- [ ] 移动端 App 开发
- [ ] 边缘计算设备管理平台
- [ ] 企业级权限管理系统

## 常见问题

### Q: 如何修改品牌颜色？
A: 编辑 `index.html` 中的 Tailwind 配置，修改 `brand` 颜色定义。

### Q: 如何添加新页面？
A: 
1. 在 `pages/` 目录创建新的 `.tsx` 文件
2. 在 `App.tsx` 的 `<Routes>` 中添加新路由
3. 在导航栏中添加链接（如需要）

### Q: 如何更换产品数据？
A: 编辑 `constants.ts` 文件中的 `PRODUCTS`、`SAAS_PLANS`、`SERVICES` 等常量。

### Q: 为什么使用 CDN 引入 Tailwind？
A: 为了快速原型开发。生产环境建议使用 PostCSS 集成 Tailwind，以优化打包体积。

## 许可证

本项目由 SmartTech Solutions Inc. 开发，保留所有权利。
**最后更新**：2025年12月18日
