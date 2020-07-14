import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { CitiesContainerComponent } from '../cities-container.component';
import { CitiesTableComponent } from '../../cities-table';
import { fetchCities } from '../../../state/actions';
import {
  getCities,
  getPageSize,
  getTotalElements,
  getPage,
} from '../../../state/selectors';
import { citiesResponseMock } from '../../../../mocks';
import { CitiesPaginatorComponent } from '../../cities-paginator';

describe('CitiesContainerComponent', () => {
  let component: CitiesContainerComponent;
  let fixture: ComponentFixture<CitiesContainerComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CitiesContainerComponent,
        MockComponent(CitiesPaginatorComponent),
        MockComponent(CitiesTableComponent),
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: getCities, value: citiesResponseMock.content },
            { selector: getPage, value: 0 },
            { selector: getPageSize, value: 10 },
            { selector: getTotalElements, value: 100 },
          ],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should fetch cities', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(fetchCities({ page: 0, size: 10 }));
  });

  it('should fetch cities on page change', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.onPageChange({
      pageIndex: 2,
      pageSize: 20,
      length: 300,
    });
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(fetchCities({ page: 2, size: 20 }));
  });
});
