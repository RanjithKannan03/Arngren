import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export const cartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addItem: (item) => set({ cart: [...get().cart, item] }),
            removeItem: (item) => set({ cart: get().cart.filter((i) => { return i.uniq_id !== item.uniq_id }) })
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    )
)

export const wishlistStore = create(
    persist(
        (set, get) => ({
            wishlist: [],
            addItem: (item) => set({ wishlist: [...get().wishlist, item] }),
            removeItem: (item) => set({ wishlist: get().wishlist.filter((i) => { return i.uniq_id !== item.uniq_id }) })
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    )
)

