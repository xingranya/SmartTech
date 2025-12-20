/**
 * Represents a hardware product in the catalog.
 */
export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Display name of the product */
  name: string;
  /** Product category for filtering */
  category: 'Sensor' | 'Edge' | 'Accessory';
  /** Display string for price range (e.g., "¥5,000–¥8,000") */
  priceRange: string;
  /** Base price for sorting calculations */
  price: number;
  /** URL to the product image */
  image: string;
  /** Short description of the product */
  description: string;
  /** List of key features */
  features: string[];
  /** Technical specifications as key-value pairs */
  specs: { label: string; value: string }[];
}

/**
 * Represents a SaaS subscription tier.
 */
export interface SaaSPlan {
  id: string;
  name: string;
  tier: 'Basic' | 'Pro' | 'Enterprise';
  /** Formatted yearly price string */
  priceYearly: string;
  /** Formatted deployment fee string */
  deploymentFee: string;
  /** List of features included in the plan */
  features: string[];
  /** Whether to visually highlight this plan (e.g., "Most Popular") */
  highlight?: boolean;
}

/**
 * Represents a value-added service.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  /** Icon identifier to map to a specific Lucide icon */
  iconType: 'activity' | 'tool' | 'shield' | 'book';
}

/**
 * Represents an ecosystem partner.
 */
export interface Partner {
  id: string;
  name: string;
  /** Path to the partner's logo image */
  logo: string;
  /** Partner industry type */
  type: 'Grid' | 'Cable' | 'Tech';
}
