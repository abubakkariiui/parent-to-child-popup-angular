import { Component, ViewChild, DoCheck } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DataService } from '../data.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements DoCheck {
    constructor(private dataService: DataService) { } 
   @ViewChild('childModal') childModal: ModalDirective;
 
  ngDoCheck(){
    this.showChildModals();
  }
  showChildModals(): void {
    if( this.dataService.childModal==true){
       this.childModal.show();
    }
   
  }
 
  hideChildModals() {
    this.dataService.childModal=false;
    this.childModal.hide();
  }
}
