import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bold-reports-angular-report-viewer';
  public serviceUrl: string;
  public reportPath: string;
  
  constructor() {
    // Initialize the Report Viewer properties here.
    this.serviceUrl = 'https://demos.boldreports.com/services/api/ReportViewer';
    this.reportPath = '~/Resources/docs/sales-order-detail.rdl';
  }
}