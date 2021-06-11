import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Users} from "../models/inscription";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  baseUrl: string = 'http://localhost:8080/api';

  // On créer un constructeur pour la requête
  constructor(private http: HttpClient) {}


  getInscription(): Observable<Users[]> {
     return this.http.get<Users[]>(`${this.baseUrl}/allUsers`);
  }

  // Créer un nouvel utilsateur
  addInscription(inscription: Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}/exploiters/add`, inscription);
  }

  // Mise à jour des données de l'utilisateur
  updateInscription(inscription: Users): Observable<Users>{
    return this.http.put<Users>(`${this.baseUrl}/update`, inscription);
  }

  // Supprimer un utilisateur
  deleteInscription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  // Afficher tous les utilisateurs
  // getInscriptionlist(): Observable<Users> {
  //   return this.http.get<Users>(`${this.baseUrl}`);
  // }
}
