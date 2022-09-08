import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { map, tap } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { emailAvailableValidator } from 'src/app/validators/email_async.validator';
import { isEmailValidator } from 'src/app/validators/isEmail.validator';
import { isValidUsernameValidator } from 'src/app/validators/isValidUsername.validator';
import { mustMatch } from 'src/app/validators/mustMatch.validator';
import { containsSpecialCaracterValidator } from 'src/app/validators/specialCaracter.validator';
import { strongPasswordValidator } from 'src/app/validators/strongPassword.validator';
import { usernameAvailableValidator } from 'src/app/validators/username_async.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* showTermsError:boolean=false; */

  myForm:FormGroup=this.fb.group({

    email:['',{
      validators: [Validators.required,isEmailValidator()],
      asyncValidators:[emailAvailableValidator(this.userService)],
      updateOn:'blur'
    }
    ],

    username:['',{
      validators:[Validators.required,Validators.minLength(8),isValidUsernameValidator()],
      asyncValidators:[usernameAvailableValidator(this.userService)],
      updateOn:'blur' //or change or submit

    }],
    password:['',[Validators.required,Validators.minLength(6),containsSpecialCaracterValidator(),strongPasswordValidator()]],
    confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    terms:[false,[Validators.requiredTrue]]
  },{
    validators:[mustMatch('password','confirmPassword')]
  });


  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }

  submitForm(){


    //this.myForm.reset();
    //console.log(this.myForm);
    this.addUser();

  }

  private addUser(){
    const email=this.myForm.controls['email'].value;
    const username=this.myForm.controls['username'].value;
    const password=this.myForm.controls['password'].value;
    const confirmPassword=this.myForm.controls['confirmPassword'].value;

    this.userService.addUser({email,username,password,confirmPassword})
    .subscribe(data=>{
      console.log(data);
      this.myForm.reset();
    })
  }

  checkFieldErrors(field:string):boolean{
      return this.myForm.controls[field].errors && this.myForm.controls[field].touched || false;

  }







  //GETTERS FIELDS ERRORS MSG

  get emailErrorMsg():string{
    const errors=this.myForm.get('email')?.errors;
    if(errors?.['required']){
      return 'El campo email es obligatorio'
    }

    if(errors?.['ErrorMsg'])
    return errors?.['ErrorMsg'];


    return '';
  }

  get usernameErrorMsg():string{
    const errors=this.myForm.get('username')?.errors;
    if(errors?.['required']){
      return 'El campo "nombre de usuario" es obligatorio'
    }
    if(errors?.['minlength'])
    return 'El campo debe tener mínimo 8 caracteres';
    if(errors?.['ErrorMsg'])
    return errors?.['ErrorMsg'];


    return '';

  }

  get passwordErrorMsg():string{
    const errors=this.myForm.get('password')?.errors;
    if(errors?.['required']){
      return 'El campo es obligatorio'
    }
    if(errors?.['minlength'])
    return 'La contraseña debe de tener mínimo 6 caracteres';

    if(errors?.['ErrorMsg'])
    return errors?.['ErrorMsg'];


    return '';

  }

  get confirmPasswordErrorMsg():string{
    const errors=this.myForm.get('confirmPassword')?.errors;
    if(errors?.['required']){
      return 'El campo es obligatorio'
    }

    if(errors?.['ErrorMsg'])
    return errors?.['ErrorMsg'];


    return '';

  }

}
