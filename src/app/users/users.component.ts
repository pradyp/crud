import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Users } from 'src/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  users!: Users[];
  // users: any;
  constructor(
    private userFormBuild: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.userForm = this.userFormBuild.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Age: [''],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  submitForm() {
    console.log(this.userForm.value);
    this.service.addUpdateUser(this.userForm.value).subscribe((data) => {
      console.log(data);
      this.getAllUsers();

    });
    this.router.navigate(['/Users-List']);
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((data) => { 
      console.log(data);
      this.users = data;
    });
  }

  // DeleteUser(i: any) {
  //   this.service.deleteUser(i).subscribe((data) => {
  //     this.getAllUsers();
  //   });
  // }

  // EditUserById(id: any) {
  //   this.service.editUserById(id).subscribe((data) => {
  //     console.log(id);
  //     this.userForm.patchValue({
  //       Name: data.Name,
  //       Email: data.Email,
  //       Mobile: data.Mobile,
  //       Age: data.Age,
  //     });
  //   });
  // }
}
