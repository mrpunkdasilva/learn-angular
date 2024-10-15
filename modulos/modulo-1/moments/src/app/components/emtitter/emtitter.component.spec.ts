import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtitterComponent } from './emtitter.component';

describe('EmtitterComponent', () => {
  let component: EmtitterComponent;
  let fixture: ComponentFixture<EmtitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmtitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmtitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
