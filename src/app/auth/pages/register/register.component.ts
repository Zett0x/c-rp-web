import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  get emailErrorMsg():string{
    const errors=this.myForm.get('email')?.errors;
    if(errors?.['required']){
      return 'Email obligatorio'
    }

    if(errors?.['pattern']){
      return 'El email no es válido'
    }
    if(errors?.['emailTomado']){
      return 'Este email ya está en uso'
    }


    return '';
  }

  myForm:FormGroup=this.fb.group({
    email:[''],
    username:[''],
    password:[''],
    password2:['']
  });


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(){

  }

  checkFieldErrors(field:string){

  }

}
