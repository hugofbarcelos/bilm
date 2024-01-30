import { Component } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
    selector: "login",
    standalone: true,
    imports: [ MatToolbarModule, MatFormFieldModule, FormsModule, MatInputModule],
    templateUrl: './login.component.html',
    styleUrls: ['../login/login.component.sass'],

})

export class LoginComponent{

}