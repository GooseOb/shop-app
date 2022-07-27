import { createLS } from "./common";
import { IUserData, IOrdersData } from "models";

export const userDataLS = createLS<IUserData>('userData');
export const ordersLS = createLS<IOrdersData>('orders');