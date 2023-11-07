import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent {
  @ViewChild( 'newCollegeDialog', { static: true } ) newCollegeDialog: any;
  constructor(
    private modalService: NgbModal
  ) {}

  newCollege() {
    this.modalService.open( this.newCollegeDialog, { centered: true, backdrop: "static", keyboard: false } );
  }


  addCollege() {
      console.log("Add college");
  }
}
