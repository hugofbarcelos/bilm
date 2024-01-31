import { Component, Input } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroupDirective, FormsModule, NgForm, Validators} from '@angular/forms';
import { UserCredentials } from "../usercredentials";
import { LoginDialog} from "../dialogs/login-dialog.component";
import {
    MatDialog
  } from '@angular/material/dialog';

@Component({
    selector: "login",
    standalone: true,
    imports: [ MatToolbarModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
    templateUrl: './login.component.html',
    styleUrls: ['../login/login.component.sass'],

})
export class LoginComponent {

    constructor(public dialog: MatDialog) {}

    userCredentials: UserCredentials = {
        email: "",
        password: "",    
    }
    
    onSubmit(): void {
        if(this.userCredentials.email !== "dog@gmal.com" && this.userCredentials.password !== "12345678"){
            const dialogRef = this.dialog.open(LoginDialog);
        }
    }
  emailFormControl = new FormControl('', [Validators.required]);

}