import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generatePdf() {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('sample.pdf');
  }
}