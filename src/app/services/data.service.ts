import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../models/entry';

const entriesURL = 'http://localhost:3000/api/entries';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }
}