import { Injectable } from '@angular/core';
import { Usuario } from './log/usuario';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getLogin(user:Usuario){
    return console.log("datos usuario");
  }

}
