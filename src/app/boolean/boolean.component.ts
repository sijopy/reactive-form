import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent {
  value: boolean = false;

  reset() {
    this.value = false;
  }
         list=[
          {listname:"Boolean"}
         ];

         lists!: any[];
         @Input() set listname(name:string){
           this.lists=[];
           for (var i=0; i<this.list.length; i++){
             if (this.list[i].listname===name){
               this.lists.push(this.list[i]);
             }
           }
         }
}
