import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  bntClick() {
    console.log('click1');
  }

  bntClick2() {
    console.log('click2');
  }
}
