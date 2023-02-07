export type TUserId = number

export interface IUser {
    id: TUserId,
    role: string,
    firstNane: string,
    middleName: string,
    lastName: string
}