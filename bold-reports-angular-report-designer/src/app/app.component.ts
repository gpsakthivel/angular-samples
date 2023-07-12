import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bold-reports-angular-report-designer';
  public serviceUrl: string;
  
  constructor() {
    // Initialize the Report Designer properties here.
    this.serviceUrl = "https://demos.boldreports.com/services/api/ReportingAPI";
  }
}