import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LibroService, Libro } from './libro.service';

describe('LibroService', () => {
  let service: LibroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LibroService]
    });
    service = TestBed.inject(LibroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch libros from API', () => {
    const mockLibros: Libro[] = [
      { idLibro: 1, titulo: 'Angular Basics', autor: 'Juan' },
      { idLibro: 2, titulo: 'TypeScript Guide', autor: 'María' }
    ];

    service.getLibros().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data[0].titulo).toBe('Angular Basics');
    });

    const req = httpMock.expectOne('http://localhost:8084/taller-kubernetes-backend/libro/listar');
    expect(req.request.method).toBe('GET');
    req.flush(mockLibros);
  });
});