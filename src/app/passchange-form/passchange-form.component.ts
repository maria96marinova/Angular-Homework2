import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordsMatch } from "./passwords-match";

@Component({
  selector: 'app-passchange-form',
  templateUrl: './passchange-form.component.html',
  styleUrls: ['./passchange-form.component.css']
})
export class PasschangeFormComponent implements OnInit {

  passchangeForm=new FormGroup({
    "currentPassword":new FormControl('',Validators.required),
    "newPassword":new FormControl('',[Validators.required,Validators.minLength(8),
                                  Validators.pattern('.*[A-Z]+.*'),
                                Validators.pattern('.*[a-z]+.*'),
                              Validators.pattern('.*[0-9]+.*')]),
    "confirmPassword":new FormControl('',Validators.required)                          
  },PasswordsMatch.match);

  
  get currentPassword(){
    return this.passchangeForm.get('currentPassword');
  }
  

  get newPassword(){
    return this.passchangeForm.get('newPassword');
  }

  get confirmPassword(){
    return this.passchangeForm.get('confirmPassword');
  }


  get changeForm(){
    return this.passchangeForm;
  }

  submitForm(){
    if(this.passchangeForm.get('currentPassword').value!='Angular2018'){
      this.passchangeForm.setErrors({invalid:true});
    }

    else{
      this.passchangeForm.reset();
      alert("Suceessfully submitted");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
