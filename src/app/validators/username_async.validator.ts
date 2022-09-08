import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import {  map, Observable } from "rxjs";
import { UserService } from "../user/services/user.service";


export const usernameAvailableValidator=(userService:UserService):AsyncValidatorFn=>{
  return (control:AbstractControl):Observable<ValidationErrors | null>=>{
    return userService.getUser(control.value)
    .pipe(
      map(user=> (user.length>0?{ErrorMsg:'Este nombre ya está en uso.'}:null))

    )

  }
}
