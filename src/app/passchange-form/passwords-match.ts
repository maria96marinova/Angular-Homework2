import { FormGroup } from '@angular/forms';

export class PasswordsMatch{
    static match(group:FormGroup){

        let newp=group.get('newPassword').value;
        let confirm=group.get('confirmPassword').value;
    
        

        if(confirm=='' || newp==''){
            return null;
        }

        else if(confirm!=newp){
            return{noMatch:true};
        }

        
        return null;


    }
}