import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {GetSetService} from 'src/app/exibir-dialogo/get-set.service'

@Component({
  selector: 'app-dialogo-reactive',
  templateUrl: './dialogo-reactive.component.html',
  styleUrls: ['./dialogo-reactive.component.css']
})
export class DialogoReactiveComponent implements OnInit {

  constructor(

    public dialogRef2: MatDialogRef<DialogoReactiveComponent>,
    public dialogRef: GetSetService
  ) { }

  dialogo:string = this.dialogRef.getDialogo()

  ngOnInit(): void {
    this.dialogo = this.dialogRef.getDialogo()
  }

  fecharDialogo(): void {
    this.dialogRef2.close();
  } 

}
