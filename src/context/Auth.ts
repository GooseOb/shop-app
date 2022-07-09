import { createContext } from "react";

export interface IAuthApi {
	login: () => void,
	logout: () => void,
	isAuth: boolean
}

const noop = () => {};

export default createContext({
	login: noop,
	logout: noop,
	isAuth: false
});