# Navbar/Header Implementation Guide

Complete step-by-step instructions for implementing the multi-level responsive navbar/header component in your Next.js project.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Customization](#customization)
5. [Usage](#usage)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Your project must have:
- Next.js 14+ or 15+ installed
- Tailwind CSS configured
- TypeScript (recommended) or JavaScript

## Installation

### Step 1: Copy Component Files

1. Copy `Header.tsx` to your `components/` directory:
   ```
   your-project/
   └── components/
       └── Header.tsx
   ```

2. Copy `siteData.ts` to your `data/` directory (create if it doesn't exist):
   ```
   your-project/
   └── data/
       └── siteData.ts
   ```

### Step 2: Update Import Paths

If your directory structure is different, update the import in `Header.tsx` (line 6):

```typescript
// Change this:
import { navigationMenu, type SubmenuItem, type NavItem } from "@/data/siteData";

// To match your structure, e.g.:
import { navigationMenu, type SubmenuItem, type NavItem } from "../data/siteData";
// or
import { navigationMenu, type SubmenuItem, type NavItem } from "@/lib/siteData";
```

### Step 3: Add Logo Image

1. Place your logo in `public/images/` directory
2. Update the logo path in `Header.tsx` (line 46):

```typescript
<Image
  src="/images/your-logo.png"  // Change this to your logo path
  alt="Your Site Logo"          // Change this to your site name
  width={115}
  height={56}
  className="h-10 w-auto lg:h-14 lg:w-auto object-contain"
  priority
/>
```

### Step 4: Configure Tailwind Colors

Add the `primary` color to your `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color-here', // e.g., '#0066cc', '#e74c3c', etc.
      },
    },
  },
}
```

Common color options:
- Blue: `#0066cc`
- Red: `#e74c3c`
- Green: `#27ae60`
- Purple: `#9b59b6`
- Orange: `#e67e22`

## Configuration

### Customize Navigation Menu

Edit `data/siteData.ts` to configure your navigation structure:

```typescript
export const navigationMenu: NavItem[] = [
  // Simple menu item (no submenu)
  { label: "HOME", href: "/" },

  // Menu item with submenu
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about/story" },
      { label: "Team", href: "/about/team" },
    ],
  },

  // Menu item with nested submenu (3 levels)
  {
    label: "SERVICES",
    href: "#",
    submenu: [
      {
        label: "Consulting",
        href: "/services/consulting",
        submenu: [
          { label: "Strategy", href: "/services/consulting/strategy" },
          { label: "Implementation", href: "/services/consulting/implementation" },
        ]
      },
    ],
  },
];
```

### Menu Item Properties

- `label`: Text displayed in the menu
- `href`: URL to navigate to (use `"#"` for non-clickable parent items)
- `submenu`: Optional array of submenu items (can be nested)

## Customization

### Change Breakpoint for Mobile Menu

The component uses `xl` (1280px) as the breakpoint. To change:

Find all instances of `xl:` in `Header.tsx` and replace with:
- `lg:` for 1024px breakpoint
- `md:` for 768px breakpoint
- `sm:` for 640px breakpoint

Example:
```typescript
// Change from:
<div className="hidden xl:flex items-center gap-1 flex-1 justify-center">

// To:
<div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
```

### Customize Colors and Styling

#### Header Background
```typescript
// Line 39 - Change from white background:
<header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">

// To any color:
<header className="bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-50">
```

#### Menu Text Color
```typescript
// Line 79 - Desktop menu items:
className="text-black hover:text-primary ..."

// Change to:
className="text-gray-700 hover:text-blue-600 ..."
```

#### Dropdown Background
```typescript
// Line 87 - Submenu background:
<div className={`absolute top-full mt-0 bg-white shadow-lg ...`}>

// Change to:
<div className={`absolute top-full mt-0 bg-gray-50 shadow-lg ...`}>
```

### Customize Special Menu Layouts

The component has special handling for certain menu labels:

1. **Right-aligned menus**: Edit line 87 in `Header.tsx`
   ```typescript
   // Menus that align to the right:
   ${['OTHERS', 'COMMITTEE', 'RESEARCH'].includes(item.label) ? 'right-0' : 'left-0'}

   // Add your menu label:
   ${['OTHERS', 'SETTINGS', 'ADMIN'].includes(item.label) ? 'right-0' : 'left-0'}
   ```

2. **Two-column layout**: Edit line 87
   ```typescript
   // Menu that displays in 2 columns:
   ${item.label === 'OTHERS' ? 'min-w-[500px] grid grid-cols-2 ...' : 'min-w-[240px]'}

   // Change to your menu:
   ${item.label === 'RESOURCES' ? 'min-w-[500px] grid grid-cols-2 ...' : 'min-w-[240px]'}
   ```

### Remove Search Functionality

If you don't need the search feature:

1. Remove desktop search icon (lines 136-143)
2. Remove mobile search button (lines 238-244)

### Customize Mobile Menu Height

The mobile menu starts below the header. To adjust:

```typescript
// Line 161 - Mobile menu overlay:
<div className="xl:hidden fixed inset-0 bg-white z-[60] overflow-y-auto pt-20">

// Change pt-20 to match your header height:
<div className="xl:hidden fixed inset-0 bg-white z-[60] overflow-y-auto pt-16">
```

## Usage

### In Next.js App Router Layout

```typescript
// app/layout.tsx
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20"> {/* Add padding-top to prevent content overlap */}
          {children}
        </main>
      </body>
    </html>
  );
}
```

### In Next.js Pages Router

```typescript
// pages/_app.tsx
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* Add padding-top to prevent content overlap */}
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
```

### On Specific Pages Only

```typescript
// app/page.tsx or pages/index.tsx
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Your page content */}
      </main>
    </>
  );
}
```

## Advanced Features

### Add Active Link Styling

To highlight the current page in the menu, modify the Link components:

```typescript
'use client';
import { usePathname } from 'next/navigation';

// Inside Header component:
const pathname = usePathname();

// Then in Link components:
<Link
  href={item.href}
  className={`text-black hover:text-primary ... ${
    pathname === item.href ? 'text-primary font-bold' : ''
  }`}
>
  {item.label}
</Link>
```

### Implement Search Functionality

Replace the search button with a functional search:

```typescript
const [searchOpen, setSearchOpen] = useState(false);

// Desktop search:
<button
  onClick={() => setSearchOpen(!searchOpen)}
  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
>
  {/* SVG icon */}
</button>

{searchOpen && (
  <div className="absolute top-full right-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-4">
    <input
      type="search"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded"
    />
  </div>
)}
```

### Add Mega Menu Layout

For large menus with multiple columns:

```typescript
// In siteData.ts, mark a menu for mega menu layout
{
  label: "PRODUCTS",
  href: "#",
  megaMenu: true,
  submenu: [
    { label: "Category 1", href: "/category-1" },
    { label: "Category 2", href: "/category-2" },
    // ... more items
  ]
}

// In Header.tsx, add mega menu layout:
{item.megaMenu ? (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6">
    <div className="container mx-auto grid grid-cols-4 gap-6">
      {item.submenu.map((subitem) => (
        // Render in grid
      ))}
    </div>
  </div>
) : (
  // Regular dropdown
)}
```

### Add Sticky Header with Scroll Effect

Modify the header to shrink on scroll:

```typescript
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Update header className:
<header className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-all ${
  scrolled ? 'py-2' : 'py-3'
}`}>
```

## Troubleshooting

### Logo not displaying
- Verify logo path is correct
- Ensure logo file exists in `public/images/`
- Check image format is supported (png, jpg, svg, webp)

### Submenus not opening
- Check that `submenu` array is properly defined in `siteData.ts`
- Verify TypeScript types are imported correctly
- Check browser console for errors

### Mobile menu not closing on navigation
- Ensure `onClick={() => setIsMenuOpen(false)}` is on all Link components in mobile menu
- Check that z-index values don't conflict with other components

### Content hidden behind header
- Add padding-top to your main content (e.g., `className="pt-20"`)
- Adjust the padding value to match your header height

### Dropdown menus cut off at screen edge
- Adjust dropdown positioning in the className (line 87)
- Use `right-0` instead of `left-0` for menus near the right edge

### TypeScript errors
- Ensure types are properly exported from `siteData.ts`
- Verify import path matches your project structure
- Check that all menu items follow the NavItem interface structure

### Hamburger icon not animating
- Check that Tailwind's transition classes are not being purged
- Verify `transition-all` class is present on span elements

### Search icon not visible
- Check SVG stroke color matches your design
- Verify the button is not hidden by other z-index elements

## Support

For issues or questions:
1. Check that all dependencies are installed
2. Verify file paths are correct
3. Review browser console for errors
4. Check Tailwind CSS is properly configured

## Next Steps

- Customize colors to match your brand
- Add your navigation menu items
- Implement search functionality
- Add active link highlighting
- Integrate with your authentication system

---

**Version**: 1.0.0
**Last Updated**: January 2026
**Framework**: Next.js 14/15 with TypeScript and Tailwind CSS
