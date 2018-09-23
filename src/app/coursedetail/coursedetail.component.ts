import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseServiceService} from '../service/course-service.service';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  jsondata:any;
  courseDetailVal:any;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private courseService : CourseServiceService
  ) { }

  ngOnInit() {
  this.getcourse();
  }

  getcourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
   
    this.courseService.getCourses().subscribe(
      data=>
    { this.jsondata =data as string[];
      //.find(course => course.id == id));
      this.courseDetailVal = this.jsondata.find(course => course.id == id)
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    }
  );
  }

  goBack(): void {
    this.location.back();
  }

}
