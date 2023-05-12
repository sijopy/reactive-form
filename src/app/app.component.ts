import { Component,HostBinding, HostListener} from '@angular/core';
import { AbstractControl,FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  
  title = 'reativeform';
  name: string = "";
  inputtext: string = "Enter a self-explanatory name";
  showChild = true;
  secondchild= true;
  registerForms:boolean=false;
  // formGroup: any;
 
  registerForm = new FormGroup({
    Name: new FormControl("", [Validators.required, Validators.maxLength(5)]),
    select: new FormControl("", [Validators.required])
    });
  
  constructor(private router:Router){

  }
 
  

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Values', this.registerForm.value)
      return;
    }
  }
  cancel() {
    
   
    this.showChild = false;
    this.secondchild=false;
    this.registerForms=true;
    // this.registerForm.reset()
    this.router.navigate(['/app.component']);
    // this.router.navigate(['../app'], { relativeTo: this.router.url.split('/app').slice(0, -1).join('/app') });
    
  }

}

