import { GenericJwtToken } from './../services/mvc-api/datatypes/VsExample.AspAPI.Dtos.GenericJwtToken';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginSingleton {
  token:GenericJwtToken;
  targetUrl: string;

  constructor() { }
}
