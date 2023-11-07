import { Component, OnInit, ViewChild } from '@angular/core';
import { COURSE_DATA, Course } from '../models/models';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['id', 'name', 'instructor', 'duration', 'action'];
  @ViewChild( 'newCourseDialog', { static: true } ) newCourseDialog: any;
  couseDate:Course[] = COURSE_DATA;
  currentCourseData!: Course;
  
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Course>(this.couseDate);
  }

  newCourse() {
    this.currentCourseData = new Course();
    this.modalService.open( this.newCourseDialog, { centered: true, backdrop: "static", keyboard: false } );
  }


  upsertCourse() {
    if(this.currentCourseData.name && this.currentCourseData.instructor && this.currentCourseData.duration)
    {
      this.currentCourseData.id = this.couseDate.length + 1;
      this.couseDate.push(this.currentCourseData);
      this.dataSource = new MatTableDataSource<Course>(this.couseDate);
      this.modalService.dismissAll();
    }
    else
    {
      alert("All fields are mandatory"); 
    }
  }



}
