import { AppComponent } from './../app.component';
import { DatetimeComponent } from './../editor/datetime/datetime.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  myDateTime: string = '2019-03-10 12:44:12';
  myDateTime2: string = '2019-04-10 12:44:12';
  @ViewChild(DatetimeComponent) datetime: DatetimeComponent;
  
  constructor(public app: AppComponent) { }

  ngOnInit() {
  }

}
