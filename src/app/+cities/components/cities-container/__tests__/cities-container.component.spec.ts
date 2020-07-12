import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesContainerComponent } from '../cities-container.component';

describe('CitiesContainerComponent', () => {
  let component: CitiesContainerComponent;
  let fixture: ComponentFixture<CitiesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
