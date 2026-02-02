# Navbar/Header - Quick Reference Card

## Installation (3 Steps)

1. **Copy files**
   ```
   Header.tsx → components/
   siteData.ts → data/
   ```

2. **Add to tailwind.config.ts**
   ```typescript
   colors: { primary: '#your-color' }
   ```

3. **Use in layout**
   ```typescript
   import Header from '@/components/Header';
   <Header />
   <main className="pt-20">{children}</main>
   ```

## File Structure

```
your-project/
├── components/
│   └── Header.tsx           # Main component
├── data/
│   └── siteData.ts         # Navigation config
└── public/
    └── images/
        └── your-logo.png   # Your logo
```

## Navigation Menu Structure

```typescript
// Simple item
{ label: "Home", href: "/" }

// With submenu
{
  label: "About",
  href: "/about",
  submenu: [
    { label: "Team", href: "/team" }
  ]
}

// With nested submenu
{
  label: "Services",
  href: "#",
  submenu: [
    {
      label: "Consulting",
      href: "/consulting",
      submenu: [
        { label: "Strategy", href: "/strategy" }
      ]
    }
  ]
}
```

## Common Customizations

### Change Logo
```typescript
// Line 46 in Header.tsx
src="/images/your-logo.png"
```

### Change Colors
```typescript
// tailwind.config.ts
primary: '#0066cc'  // Your brand color
```

### Change Breakpoint
```typescript
// Replace xl: with lg: or md: throughout Header.tsx
hidden xl:flex → hidden lg:flex
```

### Change Header Background
```typescript
// Line 39
bg-white → bg-gray-900
```

### Remove Search
Delete lines 136-143 (desktop) and 238-244 (mobile)

## Special Menu Labels

These labels get special treatment:

- **'OTHERS', 'COMMITTEE', 'RESEARCH'**
  - Dropdown aligns right
  - Nested menus open left

- **'OTHERS'**
  - Also displays in 2-column grid

Change in `Header.tsx` line 87 and 101

## TypeScript Types

```typescript
interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}
```

## Mobile Menu Height

```typescript
// Line 161 - adjust pt-20 to match your header
pt-20 → pt-16 or pt-24
```

## Responsive Breakpoints

- Mobile menu: `< 1280px` (xl breakpoint)
- Desktop menu: `≥ 1280px`

To change, replace all `xl:` with:
- `lg:` = 1024px
- `md:` = 768px
- `sm:` = 640px

## Key Features

✓ 3-level nested menus
✓ Mobile responsive
✓ Hover dropdowns (desktop)
✓ Click-to-expand (mobile)
✓ Body scroll lock
✓ Fixed header
✓ TypeScript support
✓ Customizable colors
✓ Search icon ready

## Styling Classes Reference

### Desktop Menu Items
```typescript
text-[13px]           // Font size
px-3 py-2             // Padding
hover:text-primary    // Hover color
```

### Dropdown Background
```typescript
bg-white              // Background
shadow-lg             // Shadow
border-gray-200       // Border
```

### Mobile Menu
```typescript
z-[60]                // Z-index
overflow-y-auto       // Scrollable
pt-20                 // Top padding
```

## Dependencies

- Next.js 14+ or 15+
- React 18+
- Tailwind CSS 3+

## File Sizes

- Header.tsx: ~12 KB
- siteData.ts: ~2 KB
- Total: ~14 KB

## Browser Support

✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Mobile browsers

## Common Issues & Fixes

**Logo not showing**
→ Check path: `/images/logo.png` exists

**Primary color not working**
→ Add to `tailwind.config.ts` colors

**Content behind header**
→ Add `className="pt-20"` to main

**Dropdown cut off**
→ Change `left-0` to `right-0` (line 87)

**Mobile menu not closing**
→ Ensure `onClick={() => setIsMenuOpen(false)}` on Links

**TypeScript errors**
→ Check imports: `from "@/data/siteData"`

## Performance

- Fixed header (no reflow)
- Optimized re-renders
- Minimal dependencies
- Small bundle size

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigable*
- Screen reader friendly*

*Basic support included, enhanced keyboard nav in future update

## Next Steps

1. Install component
2. Customize navigation menu
3. Update colors/branding
4. Test on mobile
5. Deploy!

---

**Full docs**: See `instructions.md`
**Examples**: See `EXAMPLES.md`
**Changes**: See `CHANGELOG.md`

**Version**: 1.0.0
