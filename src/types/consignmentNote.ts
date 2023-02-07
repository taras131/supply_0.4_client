import {TSupplierId} from "./supplier";
import {TUserId} from "./user";

export type TConsignmentNoteId = number
export interface IConsignmentNote {
    id: TConsignmentNoteId,
    supplierId: TSupplierId,
    authorId: TUserId,
    number: string,
    sum: number,
    date: string,
    link: string,
    note?: string
}