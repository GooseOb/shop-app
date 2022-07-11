import { PayloadAction } from "@reduxjs/toolkit"

export interface IAnyGood {
	isOrder: boolean,
	id: string,
	title: string,
	description: string,
	image?: string,
	images: string[],
	price: number,
	category: {
		id: number,
		name: string
	}
}

export interface IGood extends IAnyGood {
	isOrder: false
}

export interface IOrder extends IAnyGood {
	isOrder: true,
	quantity: number,
	ID: string
}

export interface IOrdersData {
	list: IOrder[],
	totalPrice: number
}

export interface IUserData {
	isAuth: boolean
}

export interface IOrderPayload<T> {
	quantity: number
	good: T
}

export type IOrderPayloadAction<T> = PayloadAction<IOrderPayload<T>>