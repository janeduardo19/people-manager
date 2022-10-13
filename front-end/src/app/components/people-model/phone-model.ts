export class Phone {
  id: number;
  name: string;
  number: string;
  email: string;

  constructor();
  constructor(id:number,
    name:string,
    number: string,
    email: string);
  constructor(id?:number,
    name?:string,
    number?: string,
    email?: string
  ){
    this.id = id ?? 0;
    this.name = name ?? "";
    this.number = number ?? "";
    this.email = email ?? "";
  }

  getName() {
    return this.name;
  }

  getNumber() {
    return this.number;
  }

  getEmail() {
    return this.email;
  }
}
