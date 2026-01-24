# JKKN College of Nursing & Research Website

A modern, responsive website for JKKN College of Nursing & Research built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design with college branding colors
- 📱 Fully responsive for mobile, tablet, and desktop
- ⚡ Fast performance with Next.js 14
- 🎯 SEO optimized
- 🖼️ Image slider hero section
- 📰 Dynamic content sections
- 🎓 Course information
- 🏆 Certifications and recognitions
- 👥 Alumni testimonials
- 📹 Education videos integration
- 🤝 Supporting partners showcase

## Tech Stack

- **Frontend:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Project Structure

```
Nursing_College/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AnnouncementSection.tsx
│   ├── EducationStoriesSection.tsx
│   ├── CoursesSection.tsx
│   ├── AboutSection.tsx
│   ├── AdmissionZoneSection.tsx
│   ├── CollegeNewsSection.tsx
│   ├── PastEventsSection.tsx
│   ├── EducationVideosSection.tsx
│   ├── LatestBuzzSection.tsx
│   ├── SupportingPartnersSection.tsx
│   ├── CertificationsSection.tsx
│   ├── AlumniSection.tsx
│   ├── LifeAtJKKNSection.tsx
│   └── FloatingButtons.tsx
├── data/                 # Local data files
│   ├── siteData.ts
│   ├── eventsData.ts
│   ├── partnersData.ts
│   └── facilitiesData.ts
└── public/              # Static assets
    └── images/

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Nursing_College
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

All content is stored locally in the `data/` directory:

- **siteData.ts**: Site information, navigation menu, hero slides, courses, announcements
- **eventsData.ts**: Education stories, college news, past events, latest buzz, videos
- **partnersData.ts**: Supporting partners, certifications, alumni testimonials
- **facilitiesData.ts**: Facilities, departments, other institutions

To update content, simply edit these TypeScript files and the changes will reflect immediately.

## Adding Images

1. Place your images in the `public/images/` directory
2. Organize them in subdirectories (e.g., `hero/`, `courses/`, `events/`, etc.)
3. Update the image paths in the data files to match your image locations

Example:
```typescript
image: "/images/courses/bsc-nursing.jpg"
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

- Primary Green: `#0b6d41`
- Primary Dark Green: `#003f13`
- Secondary Yellow: `#ffde59`
- Cream Background: `#fbfbee`

To change colors, update the color values in the Tailwind config.

### Typography

Fonts and text styles are defined in `app/globals.css`. Modify the CSS classes to change typography.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 JKKN College of Nursing & Research. All rights reserved.

## Support

For issues or questions, contact: [Contact Information]
