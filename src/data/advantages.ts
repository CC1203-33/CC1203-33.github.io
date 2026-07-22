// EXPORTS: IAdvantage, MOCK_ADVANTAGES
export interface IAdvantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const MOCK_ADVANTAGES: IAdvantage[] = [
  {
    id: '1',
    title: 'Quality Assurance',
    description:
      'Every part undergoes strict quality control and 100% testing before shipment. ISO 9001 certified manufacturing.',
    icon: '✓',
  },
  {
    id: '2',
    title: 'Competitive Pricing',
    description:
      'Factory-direct wholesale prices with no middlemen. Save up to 40% compared to local distributors.',
    icon: '💰',
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description:
      'Quick order processing with multiple shipping options. Express delivery worldwide in 3-7 days.',
    icon: '🚚',
  },
  {
    id: '4',
    title: 'Wide Product Range',
    description:
      'Thousands of SKUs covering engine, electrical, brake, suspension, steering, and cooling systems.',
    icon: '📦',
  },
  {
    id: '5',
    title: 'Professional Service',
    description:
      'Dedicated sales team with expert product knowledge. OEM/ODM customization available.',
    icon: '💼',
  },
];
