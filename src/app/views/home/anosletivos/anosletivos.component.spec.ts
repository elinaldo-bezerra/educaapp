import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnosletivosComponent } from './anosletivos.component';

describe('AnosletivosComponent', () => {
  let component: AnosletivosComponent;
  let fixture: ComponentFixture<AnosletivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnosletivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnosletivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
