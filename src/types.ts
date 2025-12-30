export interface VirtualItem {
  index: number;
  start: number;
  size: number;
}

export interface UseVirtualListOptions {
  count: number;
  itemHeight: number;
  overscan?: number;
}
