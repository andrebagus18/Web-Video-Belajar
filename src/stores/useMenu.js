import { create } from "zustand";

const useMenu = create((set) => ({
  isOpen: false, // State default: menu tertutup(false)
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })), // Fungsi pembalik state
  closeMenu: () => set({ isOpen: false }), // Fungsi close window
}));

export default useMenu;
