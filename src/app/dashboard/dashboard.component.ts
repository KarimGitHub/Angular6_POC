import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseServiceService} from '../service/course-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   jsondata:any;
  constructor( private courseService : CourseServiceService) { }

  ngOnInit() {
    this.getCourseInDash()
  }
  getCourseInDash(){
    this.courseService.getCourses().subscribe(
      userdata=>
    { this.jsondata =userdata as string[];
      //.find(course => course.id == id));
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    }
  );
  }

}
