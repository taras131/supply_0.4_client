import {TTransportCompanyId} from "./transportCompany";
import {TUserId} from "./user";
import {TConsignmentNoteId} from "./consignmentNote";

export type TShipmentId = number
export interface IShipment {
    id: TShipmentId,
    transportCompanyId: TTransportCompanyId,
    dateDispatch: string,
    dateReceipt: string,
    dispatchAuthor: TUserId,
    receiptAuthor: TUserId,
    isAirDelivery: boolean,
    link: string,
    photoLink?: string,
    consignmentNotes: TConsignmentNoteId[]
    note?: string
}