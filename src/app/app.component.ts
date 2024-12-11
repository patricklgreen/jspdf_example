import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PdfGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pdf_example';
}
