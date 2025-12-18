import { Product, SaaSPlan, ServiceItem, Partner } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '多模态传感器 X1',
    category: 'Sensor',
    priceRange: '¥5,000–¥8,000',
    price: 5000,
    // Industrial sensor / circuit close-up
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
    description: '用于振动、温度和声学监测的高精度物联网传感器，专为电缆隧道及工业环境设计。',
    features: ['实时数据采集', 'IP67 防护等级', '5年超长续航'],
    specs: [
      { label: '连接方式', value: 'NB-IoT / LoRaWAN' },
      { label: '工作温度', value: '-40°C 至 85°C' },
      { label: '采样率', value: '24kHz' },
    ]
  },
  {
    id: 'p2',
    name: '边缘计算主机 Pro',
    category: 'Edge',
    priceRange: '¥15,000–¥20,000',
    price: 15000,
    // Reliable Server rack / Tech image
    image: 'https://images.unsplash.com/photo-1531297461136-82lw9z0u7e3c?auto=format&fit=crop&w=800&q=80',
    description: '强大的边缘计算节点，支持本地 AI 推理和数据聚合，大幅降低云端带宽压力。',
    features: ['NVIDIA Jetson 核心', '双千兆网口', '无风扇被动散热'],
    specs: [
      { label: 'CPU', value: '8核 ARM v8.2' },
      { label: 'AI 算力', value: '32 TOPS' },
      { label: '存储', value: '512GB NVMe' },
    ]
  },
  {
    id: 'p3',
    name: '热成像视觉模块',
    category: 'Sensor',
    priceRange: '¥12,000–¥18,000',
    price: 12000,
    // Industrial camera / lens style
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    description: '先进的热成像技术，用于设备过热检测和电缆接头温度异常预警。',
    features: ['高分辨率热图', '自动温漂校准', '报警信号输出'],
    specs: [
      { label: '分辨率', value: '640 x 512' },
      { label: '帧率', value: '30Hz' },
      { label: '视场角 (FOV)', value: '45° x 37°' },
    ]
  },
  {
    id: 'p4',
    name: '5G 工业网关',
    category: 'Edge',
    priceRange: '¥8,000–¥12,000',
    price: 8000,
    // Router / Network equipment
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    description: '工业级 5G 网关，确保关键任务数据的低延迟传输与高可靠连接。',
    features: ['双卡双待', 'Wi-Fi 6', 'VPN 安全隧道'],
    specs: [
      { label: '网络制式', value: '5G NR SA/NSA' },
      { label: '以太网口', value: '4x 千兆网口' },
      { label: '工业协议', value: 'MQTT / Modbus' },
    ]
  },
];

export const SAAS_PLANS: SaaSPlan[] = [
  {
    id: 'basic',
    name: '基础监测版',
    tier: 'Basic',
    priceYearly: '¥8,000 / 公里 / 年',
    deploymentFee: '签约3年以上免部署费',
    features: ['实时预警推送', '基础数据仪表盘', '邮件告警', '7天数据留存'],
  },
  {
    id: 'pro',
    name: '专业分析版',
    tier: 'Pro',
    priceYearly: '¥20,000 / 公里 / 年',
    deploymentFee: '¥5,000 一次性',
    highlight: true,
    features: ['设备健康评分', '工单系统协同', '短信/电话语音告警', '1年数据留存', '周度运行报告'],
  },
  {
    id: 'enterprise',
    name: '企业决策版',
    tier: 'Enterprise',
    priceYearly: '¥50,000 / 公里 / 年',
    deploymentFee: '按需定制报价',
    features: ['私有化部署', 'AI 辅助决策', '全功能 API 访问', '无限期数据留存', '专属客户经理'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '寿命预测服务',
    description: '基于 AI 的核心算法，精准预测关键部件的剩余使用寿命与故障概率。',
    priceRange: '¥10万 – ¥30万',
    iconType: 'activity',
  },
  {
    id: 's2',
    title: '定制驾驶舱',
    description: '针对特定行业（如地铁、石化）需求定制的 3D 可视化大屏与指挥中心。',
    priceRange: '¥20万 – ¥50万',
    iconType: 'tool',
  },
  {
    id: 's3',
    title: '年度巡检维护',
    description: '物理巡检与数字孪生同步校验，提供专业的年度设备健康体检报告。',
    priceRange: '¥5万 – ¥15万',
    iconType: 'shield',
  },
  {
    id: 's4',
    title: '认证培训',
    description: '面向运维人员的智能电网操作与设备维护认证培训课程。',
    priceRange: '¥1万 – ¥5万',
    iconType: 'book',
  },
];

export const PARTNERS: Partner[] = [
  { id: '1', name: '国家电网', logo: '/images/logos/state-grid-logo.png', type: 'Grid' },
  { id: '2', name: '中国石油', logo: '/images/logos/china-petro-logo.png', type: 'Grid' },
  { id: '3', name: '华为', logo: '/images/logos/huawei-logo.png', type: 'Tech' },
  { id: '4', name: '远东电缆', logo: '/images/logos/fese-logo.png', type: 'Cable' },
  { id: '5', name: '西门子', logo: '/images/logos/siemens-logo.png', type: 'Tech' },
];

export const FAQS = [
  { q: '设备是否支持户外恶劣环境安装？', a: '是的，我们的传感器大多具备 IP67 防护等级，专为 -40°C 至 85°C 的严苛环境设计。' },
  { q: '能否将数据集成到我现有的系统中？', a: '完全可以。我们提供标准的 RESTful API 和 MQTT 接口，支持与第三方 SCADA 或 ERP 系统无缝对接。' },
  { q: '产品的质保期是多久？', a: '标准质保期为 2 年。我们也提供延保服务计划，可根据需求购买。' },
];