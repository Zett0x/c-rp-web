import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function strongPasswordValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null=>{
    const value= control.value;
    if(!value){
      return null;
    }


    const hasAtLeastOneUppercaseLetter=/(?=.*[A-Z])/.test(value);
    const hasAtLeastOneLowercaseLetter=/(?=.*[a-z])/.test(value);
    const hasAtLeastOneDigit=/(?=.*[0-9])/.test(value);

   /*  if(!hasAtLeastOneUppercaseLetter){
      return {ErrorMsg:'La contraseña debe de tener al menos una letra mayúscula'}
    }
    if(!hasAtLeastOneLowercaseLetter){
      return {ErrorMsg:'La contraseña debe de tener al menos una letra minúscula'}
    }
    if(!hasAtLeastOneDigit){
      return {ErrorMsg:'La contraseña debe de tener al menos un dígito/número'}
    } */
    return !hasAtLeastOneUppercaseLetter || !hasAtLeastOneLowercaseLetter || !hasAtLeastOneDigit ? {ErrorMsg:'La contraseña debe de estar formada por maýusculas, minúsculas y números'} : null;


  }
}
