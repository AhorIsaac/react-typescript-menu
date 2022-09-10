export type MenuProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

export type MenuComponentProps = {
  items: MenuProps[];
};

export type CategoriesComponentProps = {
  categories: Array<string>;
  filterItems: (category: string) => void;
};
