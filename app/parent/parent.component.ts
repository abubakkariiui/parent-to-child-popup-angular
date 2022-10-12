import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: [ './parent.component.css' ]
})
export class ParentComponent  {
  constructor(private dataService: DataService) { } 

  showChildModals(){
    this.dataService.childModal=true;
  }
}
