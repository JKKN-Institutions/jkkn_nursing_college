'use client';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        {children}
      </div>
      <BottomNavbar />
    </>
  );
}
