export interface MenuLink {
  title: string;
  route?: string;
  icon?: string;
  sublinks?: MenuLink[];
}
