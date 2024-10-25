import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthRequest } from "../interfaces/auth.request";
import { AuthResponse } from "../interfaces/auth.response";
import { environment } from "../../environments/environment.development";
import { Observable, tap } from "rxjs";
import { User } from "../interfaces/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private _http: HttpClient, private router: Router) {}

  authenticate(authRequest: AuthRequest): Observable<AuthResponse> {
    return this._http
      .post<AuthResponse>(
        `${environment.baseUri}/auth/authenticate`,
        authRequest
      )
      .pipe(
        tap((res) => {
          const { role, access_token, ...user } = res;
          console.log("🚀 ~ AuthService ~ tap ~ role:", role);
          this.accessToken = access_token;
          this.user = user;
          this.role = role;
          this.handleRoute(role);
        })
      );
  }

  set user(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  get user() {
    return JSON.parse(localStorage.getItem("user"));
  }

  set role(role: any) {
    localStorage.setItem("role", JSON.stringify(role));
  }

  get role() {
    return JSON.parse(localStorage.getItem("role"));
  }

  set accessToken(token: string) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  }

  get accessToken() {
    return JSON.parse(localStorage.getItem("accessToken"));
  }

  handleRoute(role: string) {
    switch (role) {
      case "ADMIN":
        this.router.navigate(["admin/students"]);
        break;
      case "PERSONAL":
        this.router.navigate(["personal/overview"]);
        break;
      default:
        this.router.navigate(["user/overview"]);
        break;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
