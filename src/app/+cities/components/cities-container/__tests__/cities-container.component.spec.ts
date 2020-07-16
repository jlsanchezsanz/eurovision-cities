import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { CitiesContainerComponent } from '../cities-container.component';
import { CitiesTableComponent } from '../../cities-table';
import { fetchCities } from '../../../state/actions';
import { getCities } from '../../../state/selectors';
import { citiesResponseMock } from '../../../../mocks';

describe('CitiesContainerComponent', () => {
  let component: CitiesContainerComponent;
  let fixture: ComponentFixture<CitiesContainerComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CitiesContainerComponent,
        MockComponent(CitiesTableComponent),
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: getCities, value: citiesResponseMock.content },
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
    getCities.setResult([]);
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(fetchCities({ page: 0, size: 10 }));
  });

  it('should not fetch cities if already in the store', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(dispatchSpy).not.toBeCalled();
  });
});
