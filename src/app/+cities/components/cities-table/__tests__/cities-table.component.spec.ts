import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatTableModule,
  MatSortModule,
  MatPaginator,
  MatInput,
  MatFormField,
} from '@angular/material';

import { CitiesTableComponent } from '../cities-table.component';
import { citiesResponseMock } from '../../../../mocks';
import { MockComponent, MockModule } from 'ng-mocks';

describe('CitiesTableComponent', () => {
  let component: CitiesTableComponent;
  let fixture: ComponentFixture<CitiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MockModule(MatSortModule)],
      declarations: [
        CitiesTableComponent,
        MockComponent(MatPaginator),
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
});
