export class User {
  private _id?: number;
  private _name: string;
  private _birthDate: Date;
  private _document: string;

  constructor(
   name: string, 
   birthDate: Date,
   document: string,
   id?: number, 
  ) {
    this._name = name;
    this._birthDate = birthDate;
    this._document = document;
    this._id = id;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get birthDate() {
    return this._birthDate;
  }

  public get document() {
    return this._document;
  }
}