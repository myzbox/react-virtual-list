# Changelog

All notable changes to this project will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] – Initial Stable Release

### Added

- `useVirtualList` hook for fixed-height list virtualization
- Smooth scrolling using `requestAnimationFrame`
- Overscan support for flicker-free scrolling
- Responsive container handling via `ResizeObserver`
- Headless API for full UI control
- Full TypeScript type definitions
- JavaScript and TypeScript compatibility

### Notes

- Container height supports `vh`, `%`, and `px`
- Item height must be specified in pixels
- Designed for large datasets (10,000+ items)

---

## Future Releases

See `ROADMAP.md` for upcoming features and plans.
