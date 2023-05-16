import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  public email = "";
  public isValid = true;
  public errorMessage = "";

  ngOnInit(): void {
  }

  change(event: any) {
    this.email = event.target.value;
    this.errorMessage = event.target.validationMessage;
    this.isValid = false;
  }

}
