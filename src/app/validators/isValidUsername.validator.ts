import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function isValidUsernameValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors| null=>{
    const value= control.value;
    if(!value){
      return null;
    }
    const usernameValid=/[a-zA-Z]+_[a-zA-Z]+/.test(value);

    return !usernameValid?{ErrorMsg:'El nombre de usuario debe de cumplir con el formato "Nombre_Apellido" ejemplo: "Michael_Jordan"'}:null;

  }
}
