import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.scss']
})
export class InprogressComponent {
  // public task: string = "";
  @Input() text: string = "";

}
