import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
    persist(
        (set, get) => ({
            token: null,
            current: null,
        }),
        {
            name: "estatery",
            storage: createJSONStorage(() => localStorage),
            // return 1 cái object của các state muốn lưu
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(
                        (el) => el[0] === "token" || el[0] === "current"
                    )
                ),
        }
    )
);
