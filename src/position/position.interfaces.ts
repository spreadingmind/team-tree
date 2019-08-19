import { Position } from '../definitions';

export interface PositionTreeItem {
  data: Position | null;
  children: PositionTreeItem[];
  primaryCount: number;
  totalCount: number;
}
