import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatInput,
  MatFormField,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';
import { MockComponent } from 'ng-mocks';

import { CitiesTableComponent } from '../cities-table.component';
import { citiesResponseMock } from '../../../../mocks';

describe('CitiesTableComponent', () => {
  let component: CitiesTableComponent;
  let fixture: ComponentFixture<CitiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
      declarations: [
        CitiesTableComponent,
        MockComponent(MatFormField),
        MockComponent(MatInput),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTableComponent);
    component = fixture.componentInstance;
    component.cities = citiesResponseMock.content;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should update filter on input', () => {
    component.applyFilter(' asdF');
    expect(component.dataSource.filter).toBe('asdf');
  });
});
