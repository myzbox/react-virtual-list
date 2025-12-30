export function observeResize(element: HTMLElement, callback: () => void) {
  const observer = new ResizeObserver(callback);
  observer.observe(element);

  return () => observer.disconnect();
}
