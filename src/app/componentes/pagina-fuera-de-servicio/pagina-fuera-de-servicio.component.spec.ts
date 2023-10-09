import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFueraDeServicioComponent } from './pagina-fuera-de-servicio.component';

describe('PaginaFueraDeServicioComponent', () => {
  let component: PaginaFueraDeServicioComponent;
  let fixture: ComponentFixture<PaginaFueraDeServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFueraDeServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFueraDeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
