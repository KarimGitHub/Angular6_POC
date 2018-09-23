import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

data : any[];

@Input() searchKeyWord: any;


  constructor() { }

  ngOnInit() {
    this.data = [
      {
        "name":"Arun",
        "age":"20",
        "phoneNo":"748"
      },{
        "name":"Karim",
        "age":"18",
        "phoneNo":"567"
      },{
        "name":"Vasanth",
        "age":"25",
        "phoneNo":"890"
      }
    ]
  }

}
