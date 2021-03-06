import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Participante } from '../Models/participante.model';
import {Grupo} from "../Models/grupo.model";

@Injectable({ providedIn: "root" })


export class PruebasService {


  readonly URL = "https://quiet-retreat-14647.herokuapp.com/api/pruebas";
  private participantes: Participante[] = [];
  private participantesUpdated = new Subject<Participante[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }    


    addPostPP(pp: Participante) {
      this.http
        .post<{ message: string }>(this.URL, pp)
        .subscribe(responseData => {
          console.log(responseData.message);
        });
    }
    addPostGR(pp: Grupo) {
      console.log("entra al servicio");
      this.http
        .post<{ message: string }>("https://quiet-retreat-14647.herokuapp.com/api/pruebas",pp )
        .subscribe(responseData => {
          console.log(responseData.message);
        });
    }
  }