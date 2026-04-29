import { Component } from '@angular/core';
import { LibrosComponent } from './components/libros/libros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}