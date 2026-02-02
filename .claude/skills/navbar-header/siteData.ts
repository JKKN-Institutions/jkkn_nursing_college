// TypeScript interfaces for navigation structure
export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Navigation menu configuration
// Customize this array with your site's navigation structure
export const navigationMenu: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "Vision and Mission", href: "/vision-mission" },
      { label: "Our Trust", href: "/our-trust" },
      { label: "Our Management", href: "/our-management" },
    ],
  },
  {
    label: "COURSES OFFERED",
    href: "#",
    submenu: [
      { label: "Course 1", href: "/course-1" },
      { label: "Course 2", href: "/course-2" },
      {
        label: "Course 3 (with nested items)",
        href: "/course-3",
        submenu: [
          { label: "Specialization 1", href: "/course-3-spec-1" },
          { label: "Specialization 2", href: "/course-3-spec-2" },
        ]
      },
    ],
  },
  {
    label: "GALLERY",
    href: "/gallery",
  },
  {
    label: "FACILITIES",
    href: "#",
    submenu: [
      { label: "Library", href: "/library" },
      { label: "Laboratories", href: "/laboratories" },
      { label: "Sports", href: "/sports" },
    ],
  },
  {
    label: "OTHERS",
    href: "#",
    submenu: [
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "Alumni", href: "/alumni" },
      {
        label: "Discipline",
        href: "#",
        submenu: [
          { label: "General Discipline", href: "/general-discipline" },
          { label: "Grievance Redressal", href: "/grievance-redressal" },
        ]
      },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

// Note: The Header component has special handling for certain menu labels:
// - 'OTHERS', 'COMMITTEE', 'RESEARCH' menus will align to the right
// - 'OTHERS' menu will display in a 2-column grid layout
// - Nested submenus for these items will open to the left instead of right
//
// You can modify these behaviors in the Header.tsx component if needed.
