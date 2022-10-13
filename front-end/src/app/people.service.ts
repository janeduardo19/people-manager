import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './components/people-model/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = 'http://localhost:8080/api/v1/people';

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
