export interface IGroup {
  id: string;
  link: string;
  category: { name: string; value: string };
  name: string;
  description: string;
  rules?: string;
  rulesDefault?: string;
  image: string;
  disabled?: boolean;
  send?: boolean;
}
export interface IMeta {
  filter_count: number;
  total_count: number;
}

export interface IListGroups {
  listCards: IGroup[];
}

export interface IGroupContext {
  groups: IGroup[];
  setGroups: React.Dispatch<React.SetStateAction<IGroup[]>>;
  currentSlug: string;
  setCurrentSlug: React.Dispatch<React.SetStateAction<string>>;
  getGroups: () => Promise<void>;
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IListCards extends IListGroups {
  lastPage: boolean;
  loading?: boolean;
  notFound?: boolean;
  getMoreGroups: () => Promise<void>;
}
