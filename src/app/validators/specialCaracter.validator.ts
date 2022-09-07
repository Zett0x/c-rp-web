import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function containsSpecialCaracterValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null=>{
    const value= control.value;
    if(!value){
      return null;
    }
    const fieldValid=/^[a-zA-Z0-9.$@_-]*$/.test(value);

    return !fieldValid?{ErrorMsg:'El campo no puede contener caracteres especiales: "<>\'\""'}:null;

  }
}
