import * as fromFetchCities from '../cities.actions';

import { citiesResponseMock } from '../../../../mocks';

describe('Fetch cities', () => {
  it('should return fetch action', () => {
    expect(fromFetchCities.fetchCities({ page: 1, size: 10 }).type).toBe(
      '[Cities] Fetch'
    );
  });

  it('should return fetch success action', () => {
    expect(
      fromFetchCities.fetchCitiesSuccess({ citiesResponse: citiesResponseMock })
        .type
    ).toBe('[Cities] Fetch success');
  });

  it('should return fetch error action', () => {
    expect(fromFetchCities.fetchCitiesError({ error: {} }).type).toBe(
      '[Cities] Fetch error'
    );
  });
});
