import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public single = false;
  public multi = true;
  public default = false;

  constructor() {

  }

  handleState(state) {
    this.resetState();
    this[state] = true;
  }

  resetState() {
    this.single = false;
    this.multi = false;
    this.default = false;
  }
}
