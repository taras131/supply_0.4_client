import {TSupplierId} from "./supplier";
import {TUserId} from "./user";
import {TConsignmentNoteId} from "./consignmentNote";

export type TPaymentInvoiceId = number
export interface IPaymentInvoice {
    id: TPaymentInvoiceId,
    supplierId: TSupplierId,
    sum: number,
    number: string,
    isPaid: boolean,
    author: TUserId,
    paidAuthor: TUserId,
    link: string,
    createdDate: string,
    paidDate: string,
    note?: string
}