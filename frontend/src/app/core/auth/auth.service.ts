import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment.development";
import { AuthRequest } from "../models/request/auth.request";
import { AuthResponse } from "../models/response/auth.response";
import { User } from "../models/user";

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
          this.accessToken = access_token;
          this.user = user;
          console.log("🚀 ~ AuthService ~ tap ~ this.user:", this.user);
          this.role = role;
          this.router.navigate(["admin/overview"]);
          // this.handleRoute(role);
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
        console.log("admin");
        this.router.navigate(["academies"]);
        break;
      case "PERSONAL":
        this.router.navigate(["personal/overview"]);
        console.log("PERSONAL");
        break;
      default:
        console.log("user/overview");
        this.router.navigate(["user/overview"]);
        break;
    }
  }

  hasRole(roleTarget: string) {
    return roleTarget === this.role;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
