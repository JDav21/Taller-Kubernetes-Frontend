import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroService, Libro } from '../../services/libro.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibrosComponent implements OnInit, OnDestroy {

  libros: Libro[] = [];
  cargando = true;
  error: string | null = null;
  
  private destroy$ = new Subject<void>();

  constructor(
    private service: LibroService,
    private cdr: ChangeDetectorRef  // ← AGREGAR ESTO
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listar() {
    this.cargando = true;
    this.service.getLibros()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          console.log('DATA:', data);
          this.libros = data;
          this.cargando = false;
          this.cdr.markForCheck();  // ← AGREGAR ESTO
        },
        error: (error) => {
          console.error('Error al cargar libros:', error);
          this.error = 'No se pudo cargar la lista de libros';
          this.cargando = false;
          this.cdr.markForCheck();  // ← AGREGAR ESTO
        }
      });
  }
}