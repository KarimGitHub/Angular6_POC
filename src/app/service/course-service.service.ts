import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  jsondata = [];
  constructor(
    private httpservice : HttpClient) { }

    getCourses() : Observable<any>{
    //  return 
    // console.log(this.jsondata);
    return this.httpservice.get('/assets/course.json');
      }

  getCourseById(id:any) : Observable<any>{
    this.getCourses().subscribe(
      data=>
    { this.jsondata =data as string[];
      
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    }
  );
  return of(this.jsondata.find(course => course.id == id));
  }
}
