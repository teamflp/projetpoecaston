import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Users } from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = 'http://localhost:8080/api/exploiters';

  // On créer un constructeur pour la requête
  constructor(private http: HttpClient) {}


  getUsers(): Observable<Users[]> {
     return this.http.get<Users[]>(`${this.baseUrl}/all`);
  }

  // Créer un nouvel utilsateur
  addUsers(users: Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}/exploiters/add_user`, users);
  }

  // Mise à jour des données de l'utilisateur
  updateUsers(users: Users): Observable<Users>{
    return this.http.put<Users>(`${this.baseUrl}/update_user`, users);
  }

  // Supprimer un utilisateur
  deleteUsers(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete_user/${id}`);
  }

  // Afficher tous les utilisateurs
  // getInscriptionlist(): Observable<Users> {
  //   return this.http.get<Users>(`${this.baseUrl}`);
  // }
}
