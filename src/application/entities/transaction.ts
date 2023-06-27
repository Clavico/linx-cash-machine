export enum TransactionType {
  WITHDRAWAL = 1,
  DEPOSIT = 2
}

export class Transaction {
  private _id?: number;
  private _type: TransactionType
  private _value: number
  private _dateTime: Date
  private _accountId: number

  constructor(
    type: TransactionType,
    value: number,
    dateTime: Date,
    accountId: number,
    id?: number,
  ) {
    this._type = type;
    this._value = value;
    this._dateTime = dateTime;
    this._accountId = accountId;
    this._id = id;
  }

  public get id() {
    return this._id;
  }

  public get value() {
    return this._value;
  }

  public get dateTime() {
    return this._dateTime;
  }

  public get type() {
    return this._type;
  }

  public get accountId() {
    return this._accountId;
  }
}