import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornularioComponent } from './fornulario.component';

describe('FornularioComponent', () => {
  let component: FornularioComponent;
  let fixture: ComponentFixture<FornularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
