import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BottomNavState, ActivePageInfo } from '@/components/BottomNav/types';

interface BottomNavStateExtended extends BottomNavState {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useBottomNav = create<BottomNavStateExtended>()(
  persist(
    (set) => ({
      activeNavId: null,
      isExpanded: false,
      isMoreMenuOpen: false,
      isMinimized: false,
      activePage: null,
      selectedSubItem: null,
      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      setActiveNav: (id) =>
        set({
          activeNavId: id
        }),

      switchToNav: (id) =>
        set({
          activeNavId: id,
          isExpanded: true,
          isMoreMenuOpen: false
        }),

      toggleExpanded: () =>
        set((state) => ({
          isExpanded: !state.isExpanded
        })),

      setExpanded: (expanded) =>
        set({
          isExpanded: expanded
        }),

      toggleMoreMenu: () =>
        set((state) => ({
          isMoreMenuOpen: !state.isMoreMenuOpen,
          isExpanded: false
        })),

      setMoreMenuOpen: (open) =>
        set({
          isMoreMenuOpen: open,
          isExpanded: false
        }),

      setSelectedSubItem: (item) =>
        set({
          selectedSubItem: item
        }),

      setMinimized: (minimized) =>
        set({
          isMinimized: minimized,
          isExpanded: false,
          isMoreMenuOpen: false
        }),

      setActivePage: (page) =>
        set({
          activePage: page
        }),

      resetState: () =>
        set({
          activeNavId: null,
          isExpanded: false,
          isMoreMenuOpen: false,
          isMinimized: false,
          activePage: null,
          selectedSubItem: null
        })
    }),
    {
      name: 'bottom-nav-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        selectedSubItem: state.selectedSubItem,
        isMinimized: state.isMinimized,
        activePage: state.activePage ? {
          href: state.activePage.href,
          label: state.activePage.label,
          groupLabel: state.activePage.groupLabel
        } : null
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export const useBottomNavHydration = () => {
  return useBottomNav((state) => state._hasHydrated);
};
