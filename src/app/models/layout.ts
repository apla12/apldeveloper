import { LayoutItem } from './layout-item';

export interface Layout {
  name: string;
  gridColumns: number;
  layoutItem: LayoutItem[];
}
