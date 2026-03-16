export interface Item {
  title: string;
  href: string;
  image?: string;
  date?: string;
  callToAction?: {
    target: string;
    text: string;
    href: string;
  };
  partner_present?: string;
  // Add any other properties you are destructuring in ItemGrid2.astro as needed.
}

export interface ItemGrid {
  items: Item[];
  columns?: number;
  defaultIcon?: string;
  classes?: {
    container?: string;
    panel?: string;
    title?: string;
    description?: string;
    icon?: string;
  };
}
