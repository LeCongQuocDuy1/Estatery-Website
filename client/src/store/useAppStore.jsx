import { create } from "zustand";

export const useAppStore = create((set) => ({
    isShowModal: false,
    contentModal: null,
    setModal: (isShowModal2, contentModal2) =>
        set(() => ({ isShowModal: isShowModal2, contentModal: contentModal2 })),
}));
