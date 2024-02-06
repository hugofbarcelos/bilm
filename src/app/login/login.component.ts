import { Component, Input } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginDialog} from "../dialogs/login-dialog.component";
import {
    MatDialog
  } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";

@Component({
    selector: "login",
    standalone: true,
    imports: [ MatToolbarModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrls: ['../login/login.component.sass'],
})
export class LoginComponent {

    email = '';
    password = '';
    form: FormGroup;

    constructor(
            public dialog: MatDialog,
            private fb: FormBuilder
        ) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit(): void {
        if(this.email !== "dog@gmal.com" && this.password !== "12345678"){
            const dialogRef = this.dialog.open(LoginDialog);
        }
    }

    isInvalid(control: string){
        return this.form.controls[control].hasError('required') && this.form.get(control)?.touched && this.form.get(control)?.dirty;
    }

}