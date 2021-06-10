import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Users} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  baseUrl: string = 'http://localhost:8080/api';

  // On créer un constructeur pour la requête
  constructor(private http: HttpClient) {}


  getInscription(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Créer un nouvel utilsateur
  createInscription(users: Users): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, users);
  }

  // Mise à jour des données de l'utilisateur
  updateInscription(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // Supprimer un utilisateur
  deleteInscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text'
    });
  }

  // Afficher tous les utilisateurs
  getInscriptionlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
