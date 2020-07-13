import { citiesResponseMock } from '../../../../mocks';
import { getCities } from '../cities.selectors';

describe('Cities Selectors', () => {
  describe('getCities', () => {
    it('should select cities', () => {
      expect(
        getCities.projector({ cities: { 1: citiesResponseMock.content } }, 1)
      ).toMatchSnapshot();
    });
  });
});
