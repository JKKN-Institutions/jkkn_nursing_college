# Content Update Guide

This guide explains how to update content on your JKKN Nursing College website without touching any code.

## Overview

All content is stored in the `data/` folder in TypeScript files. You can edit these files to update website content.

## Files and What They Control

### 1. `data/siteData.ts`

**Controls:**
- Institution name and tagline
- Contact information (phone, email, address)
- Social media links
- Navigation menu structure
- Hero slider content
- Course information
- Announcements
- About Us text
- Admission requirements

**How to Edit:**
```typescript
// Example: Updating phone number
contact: {
  phone: "+91 93458 55001",  // Change this number
  email: "info@jkkn.ac.in",  // Add or update email
  // ...
}

// Example: Adding a new announcement
announcements: [
  {
    id: 1,
    title: "Your new announcement here",
    date: "January 22, 2026",
  },
  // Add more announcements...
]
```

### 2. `data/eventsData.ts`

**Controls:**
- Education stories gallery
- College news articles
- Past events
- Latest buzz/updates
- Video gallery

**How to Edit:**
```typescript
// Example: Adding a new event
collegeNews: [
  {
    id: 1,
    title: "New Workshop Announcement",
    date: "JANUARY 22, 2026",
    image: "/images/news/workshop.jpg",
    description: "Details about the workshop...",
  },
  // Add more news items...
]
```

### 3. `data/partnersData.ts`

**Controls:**
- Supporting partners logos and info
- Certifications and recognitions
- Alumni testimonials

**How to Edit:**
```typescript
// Example: Adding a new alumni testimonial
alumniTestimonials: [
  {
    id: 1,
    name: "Student Name",
    role: "Hospital/Position",
    image: "/images/alumni/photo.jpg",
    testimonial: "Their testimonial text here...",
  },
  // Add more testimonials...
]
```

### 4. `data/facilitiesData.ts`

**Controls:**
- Life @ JKKN section
- Facilities list
- Departments
- Other JKKN institutions

**How to Edit:**
```typescript
// Example: Adding a new facility
facilities: [
  {
    id: 1,
    title: "New Facility Name",
    description: "Description of the facility",
    icon: "🏥",  // Use any emoji
  },
  // Add more facilities...
]
```

## Common Updates

### Updating Contact Information

1. Open `data/siteData.ts`
2. Find the `contact` section
3. Update phone, email, or address
4. Save the file

### Adding a New Course

1. Open `data/siteData.ts`
2. Find the `courses` array
3. Add a new course object:
```typescript
{
  id: "new-course-id",
  title: "COURSE NAME",
  duration: "X years",
  description: "Course description...",
  eligibility: "Eligibility criteria...",
  image: "/images/courses/course-name.jpg",
}
```

### Adding News or Events

1. Open `data/eventsData.ts`
2. Find the appropriate section (collegeNews, pastEvents, latestBuzz)
3. Add a new item at the beginning of the array
4. Make sure to increment the ID

### Changing Hero Slider Content

1. Open `data/siteData.ts`
2. Find `heroSlides` array
3. Edit existing slides or add new ones:
```typescript
{
  id: 1,
  image: "/images/hero/slide1.jpg",
  title: "YOUR TITLE",
  subtitle: "Your subtitle",
  buttonText: "Button Text",
  buttonLink: "/link-url",
  accreditations: ["A+ NAAC", "B++ ARIIA"],
}
```

### Updating Alumni Testimonials

1. Open `data/partnersData.ts`
2. Find `alumniTestimonials` array
3. Add or edit testimonials

### Adding Supporting Partners

1. Open `data/partnersData.ts`
2. Find `supportingPartners` array
3. Add new partner:
```typescript
{
  id: 1,
  name: "Partner Name",
  logo: "/images/partners/logo.png",
  description: "Brief description",
}
```

## Adding Images

1. Place your image in the appropriate folder under `public/images/`:
   - `public/images/hero/` - Hero slider images
   - `public/images/courses/` - Course images
   - `public/images/news/` - News images
   - `public/images/events/` - Event images
   - `public/images/alumni/` - Alumni photos
   - `public/images/partners/` - Partner logos
   - `public/images/facilities/` - Facility photos

2. Reference the image in data files:
```typescript
image: "/images/folder-name/your-image.jpg"
```

## Tips

1. **Always increment IDs** when adding new items
2. **Keep image paths consistent** - they should start with `/images/`
3. **Use proper dates** - Format: "JANUARY 22, 2026" or "January 22, 2026"
4. **Test locally** - Run `npm run dev` to see changes before deploying
5. **Keep backups** - Save a copy of data files before making major changes

## Need Help?

- Check the existing data structure for examples
- Make sure to maintain the TypeScript format (commas, quotes, brackets)
- If you get errors, check for missing commas or quotes
- Test the website locally before pushing changes

## Quick Checklist Before Deploying

- [ ] All image paths are correct and images exist
- [ ] No syntax errors (missing commas, brackets)
- [ ] Phone numbers and emails are up to date
- [ ] Dates are in the correct format
- [ ] New content has unique IDs
- [ ] Test build works: `npm run build`
