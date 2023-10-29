import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from 'src/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // @Input() users!: any[];
  users: Users[] = [];
  userListForm!: FormGroup;
  // userFormBuild: any;
  constructor(private router: Router, private service: UserService,  private userFormBuild: FormBuilder,){
    this.userListForm = this.userFormBuild.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Age: [''],
    });
  }

  ngOnInit(): void {
   this.getAllUsers();
  }
  getAllUsers() {
    this.service.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  DeleteUser(i: any) {
    console.log(i);
    this.service.deleteUser(i).subscribe((data) => {
    console.log(i);
      this.getAllUsers();
    });
  }

  EditUserById(id: any) {
    // this.service.editUserById(id).subscribe((data) => {
    //   const editedUser = data;
    //   console.log(id);
    //   this.userListForm.patchValue({
    //     Name: data.Name,
    //     Email: data.Email,
    //     Mobile: data.Mobile,
    //     Age: data.Age,
    //   });
    // });
    this.router.navigate(['/Users-edit']);
  }
}
