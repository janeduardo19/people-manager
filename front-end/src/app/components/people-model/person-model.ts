import { Phone } from './phone-model';

export class Person {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  phones: Phone[] = [];

  constructor();
  constructor(id?:number,
    name?:string,
    cpf?: string,
    birthDate?: string,
    phones?: Phone[]);
  constructor(id?:number,
    name?:string,
    cpf?: string,
    birthDate?: string,
    phones?: Phone[]
  ){
    this.id = id ?? 0;
    this.name = name ?? "";
    this.cpf = cpf ?? "";
    this.birthDate = birthDate ?? "";
    this.phones = phones ?? [];
  }
}
