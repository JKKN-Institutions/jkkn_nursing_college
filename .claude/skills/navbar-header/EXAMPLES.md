# Usage Examples

Real-world examples of how to customize and use the navbar/header component.

## Example 1: Simple 2-Level Menu

Perfect for small to medium websites.

```typescript
// data/siteData.ts
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Development", href: "/services/development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
```

## Example 2: E-commerce Site with Product Categories

3-level menu for product navigation.

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    submenu: [
      {
        label: "Electronics",
        href: "/shop/electronics",
        submenu: [
          { label: "Laptops", href: "/shop/electronics/laptops" },
          { label: "Phones", href: "/shop/electronics/phones" },
          { label: "Tablets", href: "/shop/electronics/tablets" },
        ],
      },
      {
        label: "Clothing",
        href: "/shop/clothing",
        submenu: [
          { label: "Men", href: "/shop/clothing/men" },
          { label: "Women", href: "/shop/clothing/women" },
          { label: "Kids", href: "/shop/clothing/kids" },
        ],
      },
      { label: "Books", href: "/shop/books" },
      { label: "Home & Garden", href: "/shop/home-garden" },
    ],
  },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
```

## Example 3: Educational Institution

College/university website navigation.

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Accreditation", href: "/about/accreditation" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      {
        label: "Undergraduate Programs",
        href: "/academics/undergraduate",
        submenu: [
          { label: "Engineering", href: "/academics/undergraduate/engineering" },
          { label: "Science", href: "/academics/undergraduate/science" },
          { label: "Arts", href: "/academics/undergraduate/arts" },
        ],
      },
      {
        label: "Graduate Programs",
        href: "/academics/graduate",
        submenu: [
          { label: "Master's Programs", href: "/academics/graduate/masters" },
          { label: "Doctoral Programs", href: "/academics/graduate/phd" },
        ],
      },
      { label: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    submenu: [
      { label: "How to Apply", href: "/admissions/apply" },
      { label: "Tuition & Fees", href: "/admissions/fees" },
      { label: "Scholarships", href: "/admissions/scholarships" },
      { label: "Visit Campus", href: "/admissions/visit" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    submenu: [
      { label: "Housing", href: "/campus-life/housing" },
      { label: "Dining", href: "/campus-life/dining" },
      { label: "Student Organizations", href: "/campus-life/organizations" },
      { label: "Sports & Recreation", href: "/campus-life/sports" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];
```

## Example 4: Corporate Website

Business/corporate site with right-aligned menus.

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Enterprise", href: "/solutions/enterprise" },
      { label: "Small Business", href: "/solutions/small-business" },
      { label: "Startups", href: "/solutions/startups" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  {
    label: "Resources",  // This will align right if you configure it
    href: "#",
    submenu: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
```

## Example 5: With External Links

Menu items that open external sites.

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  {
    label: "Resources",
    href: "#",
    submenu: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "GitHub", href: "https://github.com/yourproject" },  // External
      { label: "Discord Community", href: "https://discord.gg/yourserver" },  // External
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
```

**Note**: For external links, you may want to add `target="_blank"` and `rel="noopener noreferrer"` in the component.

## Example 6: Minimalist Single-Level Menu

For simple landing pages or portfolios.

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
```

## Customization Examples

### Custom Colors for Different Brands

#### Tech Startup (Blue/Purple)
```typescript
// tailwind.config.ts
colors: {
  primary: '#6366f1', // Indigo
}
```

#### Healthcare (Green/Teal)
```typescript
colors: {
  primary: '#14b8a6', // Teal
}
```

#### Education (Red/Orange)
```typescript
colors: {
  primary: '#ef4444', // Red
}
```

#### Corporate (Navy/Professional)
```typescript
colors: {
  primary: '#1e40af', // Blue
}
```

### Custom Header Backgrounds

#### Dark Header
```typescript
<header className="bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-50">
  {/* Update text colors to light: */}
  <Link className="text-white hover:text-gray-300 ...">
```

#### Transparent Header (for hero sections)
```typescript
<header className="bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
```

#### Gradient Header
```typescript
<header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm fixed top-0 left-0 right-0 z-50">
```

### Logo Placement Variations

#### Centered Logo
```typescript
<div className="max-w-[1600px] mx-auto flex flex-col items-center gap-4">
  <Link href="/" className="flex items-center gap-2">
    {/* Logo */}
  </Link>
  <nav className="flex items-center gap-1">
    {/* Navigation items */}
  </nav>
</div>
```

#### Logo with Tagline
```typescript
<Link href="/" className="flex items-center gap-3 flex-shrink-0">
  <Image src="/logo.png" ... />
  <div className="flex flex-col">
    <span className="font-bold text-lg">Your Company</span>
    <span className="text-xs text-gray-600">Your Tagline</span>
  </div>
</Link>
```

## Integration Examples

### With Authentication

```typescript
export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  // Conditionally add user menu based on auth state
];

// In Header.tsx, add:
import { useAuth } from '@/hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();

  // Add to the right side of desktop nav:
  {user ? (
    <div className="flex items-center gap-2">
      <span className="text-sm">{user.name}</span>
      <button onClick={logout} className="btn-primary">Logout</button>
    </div>
  ) : (
    <Link href="/login" className="btn-primary">Login</Link>
  )}
}
```

### With Shopping Cart

```typescript
// Add to right side of header:
<Link href="/cart" className="relative p-2">
  <ShoppingCartIcon className="h-6 w-6" />
  {cartItems > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cartItems}
    </span>
  )}
</Link>
```

### With Language Selector

```typescript
<div className="flex items-center gap-2">
  <select className="px-2 py-1 border rounded">
    <option value="en">EN</option>
    <option value="es">ES</option>
    <option value="fr">FR</option>
  </select>
</div>
```

---

## Tips for Different Site Types

### Landing Pages
- Keep menu minimal (3-5 items)
- Use clear, action-oriented labels
- Include CTA button in header

### E-commerce
- Categorize products logically
- Include search prominently
- Add cart icon
- Consider mega menu for many products

### Blogs/Content Sites
- Organize by topic categories
- Include search
- Add social media links
- Keep navigation clean

### SaaS Products
- Feature/benefit-focused labels
- Clear pricing link
- Documentation easily accessible
- Login/signup prominent

### Portfolio Sites
- Minimal navigation
- Focus on work/projects
- About and contact essential
- Optional blog/articles section

---

**Need more examples?** Check the component code for inline comments and customization options.
