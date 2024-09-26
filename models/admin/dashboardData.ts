import type {ProductFilterData} from "~/models/product/productQueries";

export interface DashboardData{
    currentImpureIncome: number
    lastImpureIncome: number
    currentSoldItems: number
    lastSoldItems: number
    notifications: number
    todayOrders: number
    canceledOrders: number
    delayedOrders: number
    unavailableItems: ProductFilterData[]
    lowQuantityItems: ProductFilterData[]
    mostSoldItems: ProductFilterData[]
}
export interface AdminSidePanelData{
    pendingComments: number
    pendingOrders: number
    pendingContacts: number
    pendingTickets: number
}