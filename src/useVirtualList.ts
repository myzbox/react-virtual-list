import { useEffect, useRef, useState } from "react";
import type { VirtualItem, UseVirtualListOptions } from "./types";
import { rafThrottle } from "./utils/rafThrottle";
import { observeResize } from "./utils/resizeObserver";

export function useVirtualList({
  count,
  itemHeight,
  overscan = 5,
}: UseVirtualListOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // Measure container height safely
  useEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      setContainerHeight(containerRef.current!.clientHeight);
    };

    measure();
    return observeResize(containerRef.current, measure);
  }, []);

  // Scroll listener with RAF throttling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = rafThrottle((e: Event) => {
      setScrollTop((e.target as HTMLElement).scrollTop);
    });

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const visibleCount = Math.ceil(containerHeight / itemHeight);

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);

  const endIndex = Math.min(count, startIndex + visibleCount + overscan * 2);

  const virtualItems: VirtualItem[] = [];
  for (let i = startIndex; i < endIndex; i++) {
    virtualItems.push({
      index: i,
      start: i * itemHeight,
      size: itemHeight,
    });
  }

  return {
    containerRef,
    virtualItems,
    totalHeight: count * itemHeight,
  };
}
