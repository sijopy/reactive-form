import { Component, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

 
      list= [
        
        {listname:"Enum"},]

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
