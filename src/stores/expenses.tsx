import { create } from 'zustand'
import { getExpenses } from '../api/expenses';

const useExpensesStore = create((set) => ({
  expenses: getExpenses().then((data) => data),
  actualPage: 1, ///this would update based on the router header
  numberOfPages: 1,
  numberofItems: getExpenses().then((data) => data.length),
  actions: {
    setPage: (page: number) => set({ actualPage: page }),
    setNumberOfPages: (number: number) => set({ numberOfPages: number }),
  }
}));


export const useWeatherActions = () => useExpensesStore((state) => state.actions)
export const useExpenses = () => useExpensesStore((state) => state.expenses)
export const useActualPage = () => useExpensesStore((state) => state.actualPage)
export const useNumberOfPages = () => useExpensesStore((state) => state.numberOfPages)
export const useNumberOfItems = () => useExpensesStore((state) => state.numberofItems)
