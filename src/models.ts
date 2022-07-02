export interface IGood {
	id: string,
	title: string,
	image: string,
	price: number
}

export interface IOrder extends IGood {
	quantity: number,
	ID: string
}