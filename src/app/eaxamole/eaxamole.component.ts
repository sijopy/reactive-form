import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-eaxamole',
  templateUrl: './eaxamole.component.html',
  styleUrls: ['./eaxamole.component.scss']
})
export class EaxamoleComponent {
  registerForm!: FormGroup;
    
  ngOnInit() {
    this.registerForm = new FormGroup({
      Name: new FormControl("", [Validators.required, Validators.maxLength(32)]),
      Select: new FormControl("", [Validators.required])
    });
  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  registerFn(){
    console.log(this.registerForm.value)
    }
  
  
  
  
}
