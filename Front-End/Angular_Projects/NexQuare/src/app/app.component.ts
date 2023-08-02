import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('popupModal') popupModal!: ElementRef;
  title = 'NexQuare';

  // Data from API Variables
  schoolName: string = '';
  userName: string = '';
  userDetail: string = '';
  annualFee: string = '';

  ngOnInit() {
    console.log('Hello World');
    // Get data from API
    this.schoolName = 'School Name';
    this.userName = 'Jessica John Jones';
    this.userDetail = 'FS1 Acacia';
  }

  activateNow(): void {
    this.popupModal.nativeElement.style.display = 'block';
  }
}
