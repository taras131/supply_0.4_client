import {TUserId} from "./user";

export type TOrderId = number
export type TProductId = number

export interface IProduct {
    id: TProductId,
    name: string,
    catalogNumber: string,
    note?: string
}

export interface IOrder {
    id: TOrderId,
    author: TUserId,
    authorApproved: TUserId,
    executorId?: TUserId,
    name: string,
    createdDate: string,
    approvedDate: string,
    isApproved: boolean,
    isAirDelivery: boolean
    products: IProduct[]
    note?: string
}