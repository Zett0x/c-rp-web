import { AbstractControl, ValidationErrors } from "@angular/forms";



export function mustMatch(field1:string,field2:string){
  return (control:AbstractControl):ValidationErrors | null=>{

    const pass1=control.get(field1)?.value;
    const pass2=control.get(field2)?.value;

    if(pass1!==pass2){
      control.get(field2)?.setErrors({ErrorMsg:'Las contraseñas no coinciden.'});
      return {
        ErrorMsg:'Las contraseñas no coinciden.'
      }
    }



    return null;

  }
}
