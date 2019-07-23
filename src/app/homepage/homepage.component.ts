import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

import { UserService } from '../services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: any = [];
  user: any = [];
  constructor(
    private _userService: UserService
  ) { }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this
      ._userService
      .getUsers()
      .subscribe((data: any) => {
        this.users = data;
        console.log(this.users);
      });
  }

  testing(id: number){
    this
      ._userService
      .getUser(id)
      .subscribe((data: any) => {
        this.user = data;
        console.log(this.user.name);
        // Swal.fire({
        //   title: this.user.name
        // })
      });
  }

  showModalApproved(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Approved!',
          'The application has been approved',
          'success',
        )
      }
    })
  }

  showModalDoubt(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, put as doubt!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Doubted!',
          'The application has been put as doubted',
          'success',
        )
      }
    })
  }

  showModalReject(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Rejected!',
          'The application has been rejected',
          'success',
        )
      }
    })
  }

}