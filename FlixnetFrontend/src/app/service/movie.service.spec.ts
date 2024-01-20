import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should retrieve movies from TMDB', () => {
    const mockResponse: any = { results: [
        { id: 1, title: 'Movie 1'},
        { id: 2, title: 'Movie 2'}
        // ... other movie data ...
      ]};
    
  
    service.getMovies().subscribe((response: any) => {
      console.log(response.results);
      expect(response.results.length).toBeGreaterThan(0);
      expect(response.results[0].id).toEqual(1); // Check some data to ensure correct mapping
      // ... other expectations ...
    });
  
    const req = httpController.expectOne(`https://api.themoviedb.org/3/movie/popular?api_key=a9b7cc482d7f4310e604d6fb0cf70b35`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Flush the mock response
  });
});
