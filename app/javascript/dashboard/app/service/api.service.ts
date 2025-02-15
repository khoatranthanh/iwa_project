import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('api/v1/login', loginPayload);
  }

  logout() : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('api/v1/logout', null);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('api/v1/users');
  }

  getRoles() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('api/v1/users/roles');
  }

  createUser(user) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('api/v1/users', user);
  }

  getUserById(userId) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('api/v1/users/' + userId);
  }

  updateUser(userId, userPayload)  : Observable<ApiResponse> {
    return this.http.put<ApiResponse>('api/v1/users/' + userId, userPayload);
  }

  deleteUser(userId)  : Observable<ApiResponse> {
    return this.http.delete<ApiResponse>('api/v1/users/' + userId);
  }

  getTests() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('api/v1/tests');
  }

  createTest(test) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('api/v1/tests', test);
  }

  getTestById(testId) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>('api/v1/tests/' + testId);
  }

  updateTest(testId, testPayload)  : Observable<ApiResponse> {
    return this.http.put<ApiResponse>('api/v1/tests/' + testId, testPayload);
  }

  deleteTest(testId) : Observable<ApiResponse> {
    return this.http.delete<ApiResponse>('api/v1/tests/' + testId);
  }
}