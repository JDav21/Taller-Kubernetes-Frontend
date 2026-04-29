import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibrosComponent } from './libros';
import { LibroService } from '../../services/libro.service';

describe('LibrosComponent', () => {
  let component: LibrosComponent;
  let fixture: ComponentFixture<LibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosComponent, HttpClientTestingModule],
      providers: [LibroService]
    }).compileComponents();

    fixture = TestBed.createComponent(LibrosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});