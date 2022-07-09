import { createLS } from "./common";
import { IUserData } from "../models";

const USER_DATA = 'userData';

export default createLS<IUserData>(USER_DATA);