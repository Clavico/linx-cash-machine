export enum AccountType {
  SAVINGS = 1,
  CHECKING = 2
}

export class Account {
  private _id?: number;
  private _type: AccountType
  private _balance: number
  private _userId?: number

  constructor(
    type: AccountType,
    balance: number,
    userId?: number,
    id?: number,
  ) {
    this._type = type;
    this._balance = balance;
    this._userId = userId;
    this._id = id;
  }

  public get id() {
    return this._id;
  }

  public get balance() {
    return this._balance;
  }

  public get type() {
    return this._type;
  }

  public get userId() {
    return this._userId;
  }
}