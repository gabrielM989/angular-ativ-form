import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogoReactiveComponent } from './reactive/dialogo-reactive/dialogo-reactive.component';
import { GetSetService } from './exibir-dialogo/get-set.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula29-ativ-forms';

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public GetSetService: GetSetService

  ) { }


  nameT: string = ''
  lastnameT: string = ''
  usernameT: string = ''
  emailT: string = ''
  cpfT: string = ''
  telT: string = ''
  streetT: string = ''
  districtT: string = ''
  cityT: string = ''
  passwordT: string = ''
  password2T: string = ''

  personalDataG: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required, Validators.minLength(7)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(8)]),
    tel: new FormControl('', [Validators.required, Validators.minLength(8)]),
    street: new FormControl('', [Validators.required, Validators.minLength(3)]),
    district: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(7)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(5)])

  },
  )

 
  dialogoResultadoT() {

    this.GetSetService.setDialogo(`
    
    Nome: ${this.nameT}
    Sobrenome: ${this.lastnameT}
    Username: ${this.usernameT}
    Email: ${this.emailT}
    CPF: ${this.cpfT}
    Telefone: ${this.telT}
    Rua: ${this.streetT}
    Bairro: ${this.districtT}
    Estado/Cidade: ${this.cityT}
    Senha: ${this.passwordT}
        
    `)


    const dialogRef = this.dialog.open(DialogoReactiveComponent, {
      width: '400px',


    });

    dialogRef.afterClosed().subscribe(result => { /* depois que o diálogo foi fechado */
      console.log('O diálogo foi fechado');

    });
  }


  dialogoResultado() {

    this.GetSetService.setDialogo(`
    
    Nome: ${this.personalDataG.controls['name'].value} 
    Sobrenome: ${this.personalDataG.controls['lastname'].value} 
    Username: ${this.personalDataG.controls['username'].value}
    Email: ${this.personalDataG.controls['email'].value}
    CPF: ${this.personalDataG.controls['cpf'].value}
    Telefone: ${this.personalDataG.controls['tel'].value}
    Rua: ${this.personalDataG.controls['street'].value}
    Bairro: ${this.personalDataG.controls['district'].value}
    Estado/Cidade: ${this.personalDataG.controls['city'].value}
    Senha: ${this.personalDataG.controls['password'].value}
        
    `)


    const dialogRef = this.dialog.open(DialogoReactiveComponent, {
      width: '400px',


    });

    dialogRef.afterClosed().subscribe(result => { /* depois que o diálogo foi fechado */
      console.log('O diálogo foi fechado');

    });
  }

  validarSenhas():void{
    if(this.passwordT === this.password2T){
      alert('As senhas estão corretas')
    }else{
      alert('Senhas divergentes, tente novamente')
    }
  }

  validarSenhas2():void{
    if(this.personalDataG.value.password === this.personalDataG.value.password2){
      alert('As senhas estão corretas')
    }else{
      alert('Senhas divergentes, tente novamente')
    }
  }


   /* @ViewChild('inputPassword') senhaT!: ElementRef
  @ViewChild('inputPassword2') senha2T!: ElementRef
  
  validarSenhas(){
    if(10>5){
      alert('As senhas estão divergentes, tente novamente')
    } else{
      alert('Deu ruim carai')
    }
  }
   */

  /*  VerSenhas(senha: string, confSenha: string){
     return(formGroup: FormGroup) =>{
       const control = formGroup.controls[senha]
       const confsenha = formGroup.controls[confSenha]
       if(confsenha.errors && !confsenha.errors.VerSenhas){
         return
       }
       if(control.value !== confsenha.value){
         confsenha.setErrors(this.VerSenhas:true)
       } else {
         confsenha.setErrors(null)
       }
 
     }
   } */

  /*  validarPassword(n1: string, n2: string): boolean{
     return (n1 !== n2)
   } */
  /* 
    validarSenha(senha2: any){
      const validador = (FormControl: FormControl) =>{
        if(senha2 == null){
          throw new Error('Campo obrigatório')
        }
        if (!FormControl.root || !(<FormGroup>FormControl.root).controls){
          return null
        }
  
        const field = (<FormGroup>FormControl.root).get(senha2)
  
        if (!field){
          throw new Error('Campo obrigatório')
        }
  
        if (field.value !== FormControl.value){
          return {senha2: 'Senhas diferentes' }
        }
        return null
      }
      return validador
  
    } */


}

