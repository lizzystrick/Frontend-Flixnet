import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { Guid } from 'guid-typescript';
import { Createmodel } from '../model/user/createmodel';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should post a new user', () => {
    const newUser: Createmodel = { 
      UserName: 'lizzy',
      Email: 'lizzy@live.nl',
      Password: 'hoi123'
     };
    const responseUser = {
      id: Guid.create(),
      username: newUser.UserName,
      email: newUser.Email,
      password: newUser.Password
    };

    const expectedUrl = 'https://localhost:7294/User/';

    service.postUser(newUser).subscribe(user => {
      expect(user).toEqual(responseUser);
    });

    const req = httpController.expectOne(expectedUrl);
  expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(JSON.stringify(newUser));
    req.flush(responseUser);
  });

  it('should retrieve all users', () => {
    const mockUsers = [{ id: Guid.create(), username: 'lizzy', email: 'lizzy@example.com', password: 'hoi123' },
    { id: Guid.create(), username: 'sacha', email: 'sacha@example.com', password: 'hoi123' },
    { id: Guid.create(), username: 'bart', email: 'bart@example.com', password: 'hoi123' },
    { id: Guid.create(), username: 'mae', email: 'mae@example.com', password: 'hoi123' }];

    service.getUsers().subscribe(users => {
      console.log(users);
      expect(users.length).toBeGreaterThan(0);
      expect(users).toEqual(mockUsers);
    });

    const req = httpController.expectOne('https://localhost:7294/user/');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  afterEach(() => {
    httpController.verify(); 
  });
});
