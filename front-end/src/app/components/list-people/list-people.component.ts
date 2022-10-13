import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people.service';
import { Person } from '../people-model/person-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cpf', 'birthDate', 'actions'];
  listPeople!: Observable<Person[]>;

  constructor(private peopleService:PeopleService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.listPeople = this.peopleService.getPeopleList();
  }

  deletePerson(id: number) {
    this.peopleService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  personDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  updatePerson(id: number){
    this.router.navigate(['/update', id]);
  }
}
