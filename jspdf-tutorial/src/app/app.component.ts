import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'jspdf-tutorial';
  public convertToPDF() {
    html2canvas(document.body).then(canvas => {
      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4')
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataUrl, 'PNG', 0, 0, width, height)
      pdf.save('output.pdf')
    })
  }
}
