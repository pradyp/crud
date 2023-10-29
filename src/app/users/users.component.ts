import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Users } from 'src/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userCreateForm!: FormGroup;
  users!: Users[];
  // users: any;
  constructor(
    private userFormBuild: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.userCreateForm = this.userFormBuild.group({
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
    console.log(this.userCreateForm.value);
    this.service.addUpdateUser(this.userCreateForm.value).subscribe((data) => {
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

}
