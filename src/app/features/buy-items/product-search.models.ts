export type ProviderId = 'amazon' | 'ebay' | 'buildhub';

export interface ProductResult {
  id: string;
  title: string;
  description: string;
  category: string;
  provider: ProviderId;
  providerLabel: string;
  productUrl: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  availability: string;
  shipping: string;
  condition: 'New' | 'Used';
  sku: string;
  accent: string;
  icon: string;
}
