
export interface TurnkeySolution {
  id: string;
  title: string;
  category: string;
  objectType: string;
  power: string;
  components: string[];
  justification: string;
  image: string;
}

export interface TrustItem {
  id: string;
  title: string;
  quote: string;
  source: string;
}

export interface ExpertiseSection {
  id: string;
  title: string;
  description?: string;
  params: {
    label: string;
    value: string;
  }[];
  brands?: string[];
  galleryId: string;
}
