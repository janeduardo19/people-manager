import { Component, OnInit } from '@angular/core';
import { Person } from '../people-model/person-model';
import { PeopleService } from '../../people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../people-model/phone-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  id!: number;
  person!: Person;
  displayedColumns: string[] = ['name', 'number', 'email'];
  phones: any = [];

  constructor(private route:ActivatedRoute, private router: Router,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.person = new Person();
    this.id = this.route.snapshot.params['id'];
    this.peopleService.getPerson(this.id)
    .subscribe(data => {
      console.log(data)
      this.person = data;
      this.phones = data['phones'];
    }, error => console.error(error));
  }

  goToRegister() {
    this.router.navigate(['/'])
  }

  goToList() {
    this.router.navigate(['/list-people'])
  }
}
