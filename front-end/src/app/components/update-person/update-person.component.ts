import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/people.service';
import { Person } from '../people-model/person-model';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  id!: number;
  person!: Person;
  submitted=false;
  formPeople!: FormGroup;

  constructor(private route:ActivatedRoute, private router: Router,
    private peopleService: PeopleService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.person = new Person();
    this.createForm(this.person);
    this.id = this.route.snapshot.params['id'];
    this.peopleService.getPerson(this.id)
    .subscribe(data => {
      console.log(data)
      this.person = data;
    }, error => console.error(error));
  }

  updatePerson(){
    this.peopleService.updatePerson(this.id, this.person)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.person = new Person();
    this.gotoList();
  }

  createForm(person: Person) {
    this.formPeople = this.formBuilder.group({
      name: [person.name],
      cpf: [person.cpf],
      birthDate: [person.birthDate]
    })
  }

  onSubmit(){
    this.updatePerson();
  }

  gotoList(){
    this.router.navigate(['/list-peoples']);
  }
}
