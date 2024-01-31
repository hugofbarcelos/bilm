import { Component, Inject } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
  
@Component({ 
  selector: 'login-dialog', 
  standalone: true,
  imports: [ MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule], 
  templateUrl: 'login-dialog.component.html',
}) 
export class LoginDialog { 
  
  constructor( 
    public dialogRef: MatDialogRef<LoginDialog>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { } 
  
  onNoClick(): void { 
    this.dialogRef.close(); 
  } 
  
}