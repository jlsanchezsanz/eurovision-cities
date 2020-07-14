import { CitiesService } from '../cities.service';
import { citiesResponseMock } from '../../../mocks';

describe('CitiesService', () => {
  let citiesService: CitiesService;
  const httpMock = {
    get: jest.fn(),
  } as any;

  beforeEach(() => {
    citiesService = new CitiesService(httpMock);
  });

  it('should fetch pets data', () => {
    httpMock.get.mockReturnValueOnce(citiesResponseMock);
    expect(httpMock.get).not.toHaveBeenCalled();
    const result = citiesService.getCities(1, 10);
    expect(httpMock.get).toHaveBeenCalledWith(
      'http://localhost:1111/cities/queryByPage?page=1&size=10'
    );
    expect(result).toMatchSnapshot();
  });
});
