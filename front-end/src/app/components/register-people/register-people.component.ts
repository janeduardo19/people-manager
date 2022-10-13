import { Component, OnInit } from '@angular/core';
import { Person } from '../people-model/person-model';
import { PeopleService } from '../../people.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-people',
  templateUrl: './register-people.component.html',
  styleUrls: ['./register-people.component.css']
})
export class RegisterPeopleComponent implements OnInit {
  formPeople!: FormGroup;
  people!: Person;
  displayedColumns: any;

  constructor(private peopleService: PeopleService,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm(new Person);
  }

  createForm(person: Person) {
    this.formPeople = this.formBuilder.group({
      name: [person.name, Validators.required],
      cpf: [person.cpf, Validators.required],
      birthDate: [person.birthDate, Validators.required],
      phones: this.formBuilder.array([
        this.formBuilder.group({
          phone_name: new FormControl('',[Validators.required]),
          phone_number: new FormControl('',[Validators.required]),
          phone_email: new FormControl('',[Validators.required, Validators.email])
      })])
    })
  }

  get phones() {
    return this.formPeople.get('phones') as FormArray;
  }

  save(){
    this.peopleService.createPerson(this.people)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    console.log(this.formPeople.value);
    this.save();
    this.formPeople.reset(new Person);
  }

  gotoList(){
    this.router.navigate(['/'])
  }

  /*getErrorMessage() {
    if (this.formPeople.get .hasError('required')) {
      return 'You must enter a value';
    }

    return this.phones.email.hasError('email') ? 'Not a valid email' : '';
  }*/
}
