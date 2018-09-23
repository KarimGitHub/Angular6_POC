import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
@Input() text : any
@Input() searchKeyWordInput : any
  constructor() { }

  ngOnInit() {
  }

}
