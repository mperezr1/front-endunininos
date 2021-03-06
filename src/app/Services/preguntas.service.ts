import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PreguntasModel } from '../Models/pregunta.model';
import { Subject } from "rxjs";
import { nextTick } from "q";

@Injectable({ providedIn: "root" })

export class PreguntasService {

    readonly URL = "https://quiet-retreat-14647.herokuapp.com/api/preguntas";
    readonly URLE = "https://quiet-retreat-14647.herokuapp.com/api/preguntas/modificar-Eliminar";
    preguntas: PreguntasModel[] = [];
    preguntaEliminar: PreguntasModel[] = [];
    private participantesUpdated = new Subject<PreguntasModel[]>();
  
  
    constructor(private http: HttpClient) {}

    getPostUpdateListener() {
      return this.participantesUpdated.asObservable();
    }
  
    addPost(pp: PreguntasModel) {
      this.http
      .post("https://quiet-retreat-14647.herokuapp.com/api/preguntas/modificar/modificar-Agregar",pp)
        .subscribe(responseData => {
          console.log(responseData);
          this.preguntas.push(pp);
          this.participantesUpdated.next([...this.preguntas]);
        });
    }

    getPreguntas() {
      return this.http.get(this.URL + "/getPregunta/");
    }

    getPregunta(pregunta: string) {
        return this.http.get(this.URL + "/getPregunta/");
      }

    deletePregunta(id: string) {
     return this.http.delete(this.URL + "/borrarPregunta/" + id);
    }
}