import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CitiesContainerComponent } from '../cities-container.component';
import { fetchCities } from '../../../state/actions';

describe('CitiesContainerComponent', () => {
  let component: CitiesContainerComponent;
  let fixture: ComponentFixture<CitiesContainerComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesContainerComponent],
      providers: [provideMockStore({ initialState })],
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
    expect(dispatchSpy).toBeCalledWith(fetchCities());
  });
});
