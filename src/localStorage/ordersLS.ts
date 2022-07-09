import { createLS } from "./common";
import { IOrdersData } from "../models";

const ORDERS = 'orders';

export default createLS<IOrdersData>(ORDERS);