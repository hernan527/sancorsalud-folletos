import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicasListComponent } from './clinicas-list.component';

describe('ClinicasListComponent', () => {
  let component: ClinicasListComponent;
  let fixture: ComponentFixture<ClinicasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
