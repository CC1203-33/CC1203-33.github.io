// EXPORTS: IProductCategory, MOCK_PRODUCT_CATEGORIES
export interface IProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export const MOCK_PRODUCT_CATEGORIES: IProductCategory[] = [
  {
    id: '1',
    name: 'Engine Parts',
    description: 'Pistons, valves, gaskets, timing kits & more',
    icon: '⚙️',
    imageUrl:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Electrical Parts',
    description: 'Sensors, alternators, starters, ignition systems',
    icon: '⚡',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Brake System',
    description: 'Brake pads, rotors, calipers, master cylinders',
    icon: '🛞',
    imageUrl:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Suspension',
    description: 'Shock absorbers, struts, control arms, bushings',
    icon: '🔩',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Steering System',
    description: 'Rack & pinion, power steering pumps, tie rods',
    icon: '🔧',
    imageUrl:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Cooling System',
    description: 'Radiators, water pumps, thermostats, fans',
    icon: '❄️',
    imageUrl:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Diesel Fuel System',
    description: 'Injection pumps, injectors, fuel pumps & diesel parts',
    icon: '⛽',
    imageUrl:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
  },
];
