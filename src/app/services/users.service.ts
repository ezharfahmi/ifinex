import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';
  private users: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  users$ = this.users.asObservable();
  
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  postUsers(user) {
    return this.http.post(this.url, user);
  }

  updateUser(user) {
    return this.http.put(this.url + '/' + user.id, user);
  }

  getUsersViaSubject() {
    this.http.get(this.url)
      .subscribe(users => this.users.next(users));
  }

  changeUsers(changedUsers) {
    this.users.next(changedUsers);
  }

}