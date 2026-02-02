'use client';

import { useState, useEffect, useMemo, useCallback, useLayoutEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  MoreHorizontal,
  Info,
  GraduationCap,
  Image,
  Building2,
  FileText,
  Settings,
  Users,
  FlaskConical,
  Phone,
  LucideIcon,
  BookOpen,
  Bed,
  Bus,
  Wifi,
  Utensils,
  Building,
  HeartPulse,
  TreePine,
  Landmark,
  Eye,
  Heart,
  Award,
  School,
  Link2,
  Calendar,
  Sparkles,
  ScrollText,
  Star,
  Flag,
  Clipboard,
  Activity,
  UserCheck,
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Briefcase,
  Video,
  MessageSquare,
  Baby,
  Stethoscope,
  Brain,
  Syringe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useBottomNav, useBottomNavHydration } from '@/hooks/use-bottom-nav';
import { navigationMenu, type NavItem, type SubmenuItem } from '@/data/siteData';
import { BottomNavItem } from './bottom-nav-item';
import { BottomNavSubmenu } from './bottom-nav-submenu';
import { BottomNavMoreMenu } from './bottom-nav-more-menu';
import { BottomNavGroup, FlatMenuItem, ActivePageInfo } from './types';

// Icon mapping for menu items
const ITEM_ICONS: Record<string, LucideIcon> = {
  // Main sections
  'HOME': Home,
  'ABOUT': Info,
  'COURSES OFFERED': GraduationCap,
  'GALLERY': Image,
  'FACILITIES': Building2,
  'MANDATORY DISCLOSURES': FileText,
  'OTHERS': Settings,
  'COMMITTEE': Users,
  'RESEARCH': FlaskConical,
  'CONTACT': Phone,

  // About submenu
  'Vision and Mission': Eye,
  'Our Trust': Heart,
  'Our Management': Award,
  'Our Institutions': School,
  'Affiliation': Link2,
  'ARIIA': Star,
  'AISHE': Star,
  'IIC': Star,

  // Courses submenu
  'B.Sc., (Nursing)': GraduationCap,
  'P.B.Sc., (Nursing)': GraduationCap,
  'AI Integrated M.Sc., (Nursing)': Sparkles,
  'Medical – Surgical Nursing': Stethoscope,
  'Child Health Nursing': Baby,
  'Community Health Nursing': Users,
  'Obstetrics & Gynecological Nursing': HeartPulse,
  'Mental Health Nursing': Brain,

  // Facilities submenu
  'Library': BookOpen,
  'Laboratories': FlaskConical,
  'Food Court': Utensils,
  'Hostel': Bed,
  'Transport': Bus,
  'Classroom': School,
  'Clinical / Hospital Facilities': HeartPulse,
  'Community Facilities': Users,
  'Sports': TreePine,
  'Wifi': Wifi,
  'Bank & Post Office': Landmark,

  // Mandatory Disclosures
  'UGC PUBLIC DISCLOSURE COMPLIANCE': FileCheck,
  'Public Self disclosure': FileText,
  'LETTER OF UNDERTAKING': ScrollText,

  // Others submenu
  'Fees refund policy': FileText,
  'NIRF': Award,
  'Digital Campus': Sparkles,
  'Academic Calendar': Calendar,
  'Best practice': Star,
  'CODE OF CONDUCT': ScrollText,
  'IQAC': Award,
  'Institutional Distinctiveness': Star,
  'NAAC': Award,
  'Curriculum/Syllabus': BookOpen,
  'Add On Course': GraduationCap,
  'Value Added Course Website Link': Link2,
  'YRC': Flag,
  'NSS': Flag,
  'Discipline': Shield,
  'General Discipline': Shield,
  'Grievance Redressal Committee': MessageSquare,
  'Anti Sexual Harassment Cell': Lock,
  'Anti Ragging Cell': AlertTriangle,
  'Activities': Activity,
  'Committee': Users,
  'Antiragging': AlertTriangle,
  'Privacy Policy': Lock,
  'Alumni': UserCheck,
  'Faculty Details': Users,
  'Placement': Briefcase,
  'E- CONTENT': Video,
  'Feedback Analysis and Action Taken': Clipboard,

  // Committee submenu
  'Anti Ragging Committee': AlertTriangle,
  'Student Grievance Redressal Committee (SGRC)': MessageSquare,
  'INTERNAL COMPLAINTS COMMITTEE': Clipboard,

  // Research submenu
  'Research Proposal': FileText,
  'JOURNAL PUBLICATION': BookOpen,
  'Research Committee': FlaskConical,
};

// Get icon for a menu item
function getIcon(label: string): LucideIcon {
  return ITEM_ICONS[label] || FileText;
}

// Flatten menu items including nested submenus
function flattenNavItem(
  item: NavItem | SubmenuItem,
  parentIcon: LucideIcon,
  parentLabel?: string
): FlatMenuItem[] {
  const items: FlatMenuItem[] = [];
  const icon = getIcon(item.label);

  // Skip items with href="#" - they're just category headers
  if (item.href && item.href !== '#') {
    items.push({
      href: item.href,
      label: item.label,
      icon: icon,
      parentLabel: parentLabel
    });
  }

  // Process submenus recursively
  if (item.submenu) {
    for (const subitem of item.submenu) {
      items.push(...flattenNavItem(subitem, icon, item.label));
    }
  }

  return items;
}

// Convert navigation menu to bottom nav groups
function convertToNavGroups(navMenu: NavItem[]): BottomNavGroup[] {
  return navMenu.map((item) => {
    const icon = getIcon(item.label);
    const menus = flattenNavItem(item, icon);

    return {
      id: item.label.toLowerCase().replace(/\s+/g, '-'),
      groupLabel: item.label,
      icon: icon,
      menus: menus.length > 0 ? menus : [{
        href: item.href,
        label: item.label,
        icon: icon
      }]
    };
  });
}

export function BottomNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const hasInitialized = useRef(false);
  const hasHydrated = useBottomNavHydration();

  const {
    activeNavId,
    isExpanded,
    isMoreMenuOpen,
    isMinimized,
    activePage,
    setActiveNav,
    switchToNav,
    setExpanded,
    setMoreMenuOpen,
    setMinimized,
    setActivePage
  } = useBottomNav();

  // Convert navigation menu to bottom nav format
  const allNavGroups = useMemo((): BottomNavGroup[] => {
    return convertToNavGroups(navigationMenu);
  }, []);

  // Primary nav groups (first 4)
  const primaryNavGroups = useMemo(() => {
    return allNavGroups.slice(0, 4);
  }, [allNavGroups]);

  // Remaining groups for "More" menu
  const moreNavGroups = useMemo(() => {
    return allNavGroups.slice(4);
  }, [allNavGroups]);

  // Find the group that contains the current pathname
  const currentActiveGroup = useMemo(() => {
    for (const group of allNavGroups) {
      for (const menu of group.menus) {
        if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
          return group;
        }
      }
    }
    // Default to first group (HOME)
    return allNavGroups[0] || null;
  }, [pathname, allNavGroups]);

  // Find the active page info based on current pathname
  const currentActivePage = useMemo((): ActivePageInfo | null => {
    if (!currentActiveGroup) return null;

    for (const menu of currentActiveGroup.menus) {
      if (pathname === menu.href || pathname.startsWith(menu.href + '/')) {
        return {
          href: menu.href,
          label: menu.label,
          icon: menu.icon,
          groupLabel: currentActiveGroup.groupLabel
        };
      }
    }
    return null;
  }, [pathname, currentActiveGroup]);

  // Determine the effective active nav ID
  const effectiveActiveNavId = useMemo(() => {
    if (isExpanded && activeNavId) {
      return activeNavId;
    }
    if (currentActiveGroup) {
      return currentActiveGroup.id;
    }
    return activeNavId;
  }, [currentActiveGroup, activeNavId, isExpanded]);

  // Current active submenu items
  const activeSubmenus = useMemo(() => {
    if (effectiveActiveNavId) {
      const selectedGroup = allNavGroups.find((g) => g.id === effectiveActiveNavId);
      if (selectedGroup) {
        return selectedGroup.menus;
      }
    }
    return currentActiveGroup?.menus || [];
  }, [effectiveActiveNavId, allNavGroups, currentActiveGroup]);

  // Update active page when pathname changes
  useLayoutEffect(() => {
    if (currentActivePage) {
      setActivePage(currentActivePage);

      if (!hasInitialized.current) {
        hasInitialized.current = true;
        setMinimized(false);
      }
    }
  }, [currentActivePage, setActivePage, setMinimized]);

  // Sync activeNavId with pathname
  useEffect(() => {
    if (!isExpanded && currentActiveGroup && currentActiveGroup.id !== activeNavId) {
      setActiveNav(currentActiveGroup.id);
    }
  }, [currentActiveGroup, activeNavId, setActiveNav, isExpanded]);

  // Handle nav item click
  const handleNavClick = useCallback(
    (groupId: string) => {
      const group = allNavGroups.find(g => g.id === groupId);

      // If group has only one menu item (like HOME, GALLERY, CONTACT), navigate directly
      if (group && group.menus.length === 1) {
        router.push(group.menus[0].href);
        setExpanded(false);
        return;
      }

      // Otherwise toggle submenu
      if (isExpanded && activeNavId === groupId) {
        setExpanded(false);
        setMoreMenuOpen(false);
      } else {
        switchToNav(groupId);
      }
    },
    [activeNavId, isExpanded, switchToNav, setExpanded, setMoreMenuOpen, allNavGroups, router]
  );

  // Handle submenu item click
  const handleSubmenuClick = useCallback(
    (href: string) => {
      router.push(href);
      setExpanded(false);
    },
    [router, setExpanded]
  );

  // Handle "More" menu open
  const handleMoreClick = useCallback(() => {
    setExpanded(false);
    setMoreMenuOpen(!isMoreMenuOpen);
  }, [setMoreMenuOpen, setExpanded, isMoreMenuOpen]);

  // Handle click on More menu item
  const handleMoreItemClick = useCallback(
    (href: string) => {
      router.push(href);
      setMoreMenuOpen(false);
    },
    [router, setMoreMenuOpen]
  );

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-bottom-nav]')) {
        setExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isExpanded, setExpanded]);

  // Wait for hydration
  if (!hasHydrated) {
    return null;
  }

  // Don't render if no groups
  if (primaryNavGroups.length === 0) return null;

  // Only show on mobile
  if (!isMobile) return null;

  return (
    <>
      {/* Backdrop when submenu expanded */}
      <AnimatePresence>
        {isExpanded && !isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[75] xl:hidden"
            onClick={() => {
              setExpanded(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Full bottom navigation */}
      <motion.nav
        data-bottom-nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35,
          mass: 0.8
        }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[80]',
          'xl:hidden',
          'bg-white border-t border-gray-200',
          'shadow-[0_-4px_20px_rgba(0,0,0,0.1)]'
        )}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Expanded submenu */}
        <BottomNavSubmenu
          items={activeSubmenus}
          isOpen={isExpanded}
          onItemClick={handleSubmenuClick}
        />

        {/* Nav items */}
        <div className="flex items-center justify-around">
          {primaryNavGroups.map((group) => (
            <BottomNavItem
              key={group.id}
              id={group.id}
              icon={group.icon}
              label={group.groupLabel}
              isActive={effectiveActiveNavId === group.id}
              hasSubmenu={group.menus.length > 1}
              onClick={() => handleNavClick(group.id)}
            />
          ))}

          {/* More button */}
          {moreNavGroups.length > 0 && (
            <BottomNavItem
              id="more"
              icon={MoreHorizontal}
              label="More"
              isActive={isMoreMenuOpen}
              hasSubmenu={true}
              onClick={handleMoreClick}
            />
          )}
        </div>
      </motion.nav>

      {/* More menu sheet */}
      <BottomNavMoreMenu
        groups={moreNavGroups}
        isOpen={isMoreMenuOpen}
        onClose={() => setMoreMenuOpen(false)}
        onItemClick={handleMoreItemClick}
      />
    </>
  );
}
