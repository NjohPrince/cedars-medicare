type SubmenuType = {
  id: number;
  name: string;
  href: string;
  key: string;
};

type MenuListType =
  | {
      id: number;
      name: string;
      href: string;
      dropdown: false;
    }
  | {
      id: number;
      name: string;
      href: string;
      dropdown: true;
      submenu: SubmenuType[];
    };

export type { MenuListType, SubmenuType };
