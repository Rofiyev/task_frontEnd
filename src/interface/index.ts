export interface IUser {
  login: string;
  password: string;
}

export interface IAuth extends IUser {
  IVV: string;
  VII_Administration: string;
  District_IIB: string;
}
