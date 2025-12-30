# @myzbox/react-virtual-list

A lightweight, smooth, headless React hook for fixed-height list virtualization, built for performance and large datasets.

> Render 10,000+ items smoothly without killing the DOM.

---

## ✨ Features

- ⚡ Smooth scrolling using `requestAnimationFrame`
- 🧠 Headless hook (UI-agnostic)
- 📏 Fixed-height list virtualization
- 📱 Responsive container using `ResizeObserver`
- 🚀 Optimized for large datasets (10k+ items)
- ✅ Works with JavaScript & TypeScript
- 🔒 React 18 compatible
- 📦 Small bundle size

---

## 📦 Installation

```bash
npm install @myzbox/react-virtual-list

yarn add @myzbox/react-virtual-list

```

## 🚀 Basic Usage

```jsx
import { useVirtualList } from "@myzbox/react-virtual-list";

const data = Array.from({ length: 10000 }, (_, i) => i);

function VirtualList() {
  const { containerRef, virtualItems, totalHeight } = useVirtualList({
    count: data.length,
    itemHeight: 32,
    overscan: 8,
  });

  return (
    <div
      ref={containerRef}
      style={{
        height: "90vh",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {virtualItems.map((item) => (
          <div
            key={item.index}
            style={{
              position: "absolute",
              transform: `translateY(${item.start}px)`,
              height: item.size,
              width: "100%",
              borderBottom: "1px solid #eee",
              boxSizing: "border-box",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Item {data[item.index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualList;
```

## 🧩 API Reference

useVirtualList(options)

| Option       | Type     | Required | Description                                              |
| ------------ | -------- | -------- | -------------------------------------------------------- |
| `count`      | `number` | ✅       | Total number of items                                    |
| `itemHeight` | `number` | ✅       | Height of each item (**px only**)                        |
| `overscan`   | `number` | ❌       | Extra items rendered above/below viewport (default: `5`) |

### Return Values

```ts
{
  containerRef: RefObject<HTMLDivElement>;
  virtualItems: {
    index: number;
    start: number;
    size: number;
  }
  [];
  totalHeight: number;
}
```

| Property       | Description                           |
| -------------- | ------------------------------------- |
| `containerRef` | Attach to the scroll container        |
| `virtualItems` | Items currently rendered              |
| `totalHeight`  | Total scroll height (used for spacer) |

## 📐 Layout Rules (IMPORTANT)

✅ Allowed

Container height can use vh, %, or px

```jsx
style={{ height: "90vh" }}

```

❌ Not Allowed

Item height must NOT use vh or %

```jsx
itemHeight: 32; // ✅ pixels only
```

Reason: virtualization math requires numeric pixel values.

## ⚡ Performance Notes

Uses requestAnimationFrame to avoid scroll jank

Uses ResizeObserver to handle container resizing

Uses GPU-accelerated transforms (translateY)

Renders only visible rows + overscan buffer

## 🧠 When to Use This Library

✅ Large lists (logs, feeds, dashboards)
✅ Fixed-height rows
✅ Performance-critical UI
✅ When you want full rendering control

❌ Variable-height rows (planned for v2)

JavaScript & TypeScript Support

JavaScript apps consume compiled .js files

TypeScript apps get full .d.ts typings

No additional configuration required

## 🧪 Example Use Cases

Activity feeds

Chat message lists

Audit logs

Admin dashboards

Large dropdown menus

## 🛣 Roadmap

v1.0.x – Stability & performance improvements

v1.1.0 – Scroll-to-index API

v2.0.0 – Variable-height virtualization (breaking change)

See ROADMAP.md for details.

## 🤝 Contributing

Contributions are welcome!

Please read CONTRIBUTING.md before submitting a pull request.

## 👤 Maintainer

**Name:** Mahantesh Teli  
**Email:** myzbox1@gamil.com  
**Organization:** myZbox

For questions, bug reports, or feature requests, please open an issue.
Direct emails are recommended only for security or private concerns.

## 📄 License

MIT © 2025 myzbox

## ⭐ Support

If this library helps you:

Star the repository ⭐

Share feedback

Open issues for bugs or feature requests

---
