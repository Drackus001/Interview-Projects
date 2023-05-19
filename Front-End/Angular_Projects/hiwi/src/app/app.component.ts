import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp';
  task: string = "";

  public btnClick(event: any): void {
    this.task = 'Task1';
    console.log('btn clicked');
  }
}
