import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { isEmailValidator } from 'src/app/validators/isEmail.validator';
import { isValidUsernameValidator } from 'src/app/validators/isValidUsername.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  myForm:FormGroup=this.fb.group({
    email:['',[Validators.required,isEmailValidator()]],
    username:['',[Validators.required,Validators.minLength(8),isValidUsernameValidator()]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    terms:[false,[Validators.requiredTrue]]
  });


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.myForm.controls);
    console.log(this.myForm);

  }

  checkFieldErrors(field:string):boolean{
      return this.myForm.controls[field].errors && this.myForm.controls[field].touched || false;

  }

  get emailErrorMsg():string{
    const errors=this.myForm.get('email')?.errors;
    if(errors?.['required']){
      return 'El campo email es obligatorio'
    }

    if(errors?.['ErrorMsg'])
    return errors?.['ErrorMsg'];


    return '';
  }

}
