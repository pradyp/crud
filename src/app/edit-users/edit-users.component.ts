import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from 'src/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  users: Users[] = [];
  userEditForm!: FormGroup;
  constructor(private router: Router, private service: UserService,  private userEditFormBuild: FormBuilder){
    this.userEditForm = this.userEditFormBuild.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Age: [''],
    });
  }

  submitForm() {
    console.log(this.userEditForm.value);
    this.service.addUpdateUser(this.userEditForm.value).subscribe((data) => {
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

   EditUserById(id: any) {
    this.service.editUserById(id).subscribe((data) => {
      console.log(id);
      this.userEditForm.patchValue({
        Name: data.Name,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age,
      });
    });
  }

}
