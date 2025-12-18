export interface Product {
  id: string;
  name: string;
  category: 'Sensor' | 'Edge' | 'Accessory';
  priceRange: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface SaaSPlan {
  id: string;
  name: string;
  tier: 'Basic' | 'Pro' | 'Enterprise';
  priceYearly: string;
  deploymentFee: string;
  features: string[];
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  iconType: 'activity' | 'tool' | 'shield' | 'book';
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'Grid' | 'Cable' | 'Tech';
}