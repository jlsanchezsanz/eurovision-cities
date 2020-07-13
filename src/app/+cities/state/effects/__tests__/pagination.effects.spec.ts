import { marbles } from 'rxjs-marbles';

import { PaginationEffects } from '../pagination.effects';
import { ActionsMock } from '../../../../../jest-mocks';
import { updatePagination, fetchCitiesSuccess } from '../../actions';
import { citiesResponseMock } from '../../../../mocks';

describe('PaginationEffects', () => {
  let actions$: ActionsMock<any>;
  let effects: PaginationEffects;

  beforeEach(() => {
    actions$ = new ActionsMock();
    effects = new PaginationEffects(actions$);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('updatePagination$', () => {
    it(
      'should update pagination on fetch cities success',
      marbles((m) => {
        actions$.setSource(
          m.cold('a', {
            a: fetchCitiesSuccess({ citiesResponse: citiesResponseMock }),
          })
        );

        const expected = m.cold('a', {
          a: updatePagination({ paginationInfo: citiesResponseMock }),
        });
        m.expect(effects.updatePagination$).toBeObservable(expected);
      })
    );
  });
});
