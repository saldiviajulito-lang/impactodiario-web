export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl?: string;
  url?: string;
}

export interface Official {
  id: string;
  slug: string;
  name: string;
  role: string;
  category: string;
  photoUrl?: string;
}
