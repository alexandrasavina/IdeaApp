import {ItemModel} from './ItemModel';

export interface ItemsHeaderModel {
  id: string;
  items: ItemModel[];
  label: string;
  progress: number;
  subtitle: string;
  open?: boolean;
}
