import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import themeReducer from './features/themeList'
import { loadFromLocalStorage, saveToLocaleStorage } from './helpers/storage'


export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        themeList: themeReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocaleStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch