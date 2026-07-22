// EXPORTS: ICompany, MOCK_COMPANY
export interface ICompany {
  name: string;
  tagline: string;
  contactPerson: string;
  whatsapp: string;
  tel: string;
  fax: string;
  email: string;
  address: string;
  alibabaStore: string;
  heroImageUrl: string;
  aboutImageUrl: string;
  founded: number;
  countriesServed: number;
  clients: number;
}

export const MOCK_COMPANY: ICompany = {
  name: 'Guangzhou Hao Xiang Auto Parts Co., Ltd.',
  tagline: 'Premium Auto Parts at Factory-Direct Prices',
  contactPerson: 'Cathy Cao',
  whatsapp: '+86 130 0515 6303',
  tel: '+86 130 0515 6303',
  fax: '+86 20 1234 5678',
  email: 'cathy@haoxiangautoparts.com',
  address: 'Baiyun District, Guangzhou, Guangdong, China',
  alibabaStore: 'https://haoxiangautoparts.en.alibaba.com/',
  heroImageUrl:
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=80',
  aboutImageUrl:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  founded: 2010,
  countriesServed: 50,
  clients: 2000,
};
