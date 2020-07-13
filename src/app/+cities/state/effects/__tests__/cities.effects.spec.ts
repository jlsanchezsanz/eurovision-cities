import { marbles } from 'rxjs-marbles';
import { of, throwError } from 'rxjs';

import { CitiesEffects } from '../cities.effects';
import { ActionsMock } from '../../../../../jest-mocks';
import {
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesError,
} from '../../actions';
import { citiesResponseMock } from '../../../../mocks';

describe('CitiesEffects', () => {
  let actions$: ActionsMock<any>;
  let effects: CitiesEffects;
  let citiesServiceMock: { getCities: jest.Mock<any> };

  beforeEach(() => {
    actions$ = new ActionsMock();
    citiesServiceMock = { getCities: jest.fn() };
    effects = new CitiesEffects(actions$, citiesServiceMock as any);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchCities$', () => {
    it(
      'should return fetch success action with cities on success',
      marbles((m) => {
        citiesServiceMock.getCities.mockReturnValueOnce(of(citiesResponseMock));
        actions$.setSource(
          m.cold('a', { a: fetchCities({ page: 1, size: 10 }) })
        );

        const expected = m.cold('a', {
          a: fetchCitiesSuccess({ citiesResponse: citiesResponseMock }),
        });
        m.expect(effects.fetchCities$).toBeObservable(expected);
        expect(citiesServiceMock.getCities).not.toHaveBeenCalled();
        m.flush();
        expect(citiesServiceMock.getCities).toHaveBeenCalledTimes(1);
        expect(citiesServiceMock.getCities).toHaveBeenCalledWith(1, 10);
      })
    );

    it(
      'should return fetch error action with cities on fail',
      marbles((m) => {
        const error = { message: '' };
        citiesServiceMock.getCities.mockReturnValueOnce(throwError({ error }));
        actions$.setSource(
          m.cold('a', { a: fetchCities({ page: 1, size: 10 }) })
        );

        const expected = m.cold('a', {
          a: fetchCitiesError({ error }),
        });
        m.expect(effects.fetchCities$).toBeObservable(expected);
      })
    );
  });
});
