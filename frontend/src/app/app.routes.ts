import { Routes } from "@angular/router";
import { roleGuard } from "./core/auth/role.guard";
import { AdminLayoutComponent } from "./pages/admin/components/admin-layout/admin-layout.component";
import { ExercisesComponent } from "./pages/admin/pages/exercises/exercises.component";
import { ModalitiesComponent } from "./pages/admin/pages/modalities/modalities.component";
import { OverviewComponent } from "./pages/admin/pages/overview/overview.component";
import { SettingsComponent } from "./pages/admin/pages/settings/settings.component";
import { StudentsComponent } from "./pages/admin/pages/students/students.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { SignupComponent } from "./pages/auth/signup/signup.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "admin",
    canActivate: [roleGuard],
    data: { role: "ADMIN" },
    component: AdminLayoutComponent,
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "students", component: StudentsComponent },
      { path: "exercises", component: ExercisesComponent },
      { path: "modalities", component: ModalitiesComponent },
      { path: "settings", component: SettingsComponent },
    ],
  },
  {
    path: "academies",
    canActivate: [roleGuard],
    data: { role: "ADMIN" },
    component: AdminLayoutComponent,
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "students", component: StudentsComponent },
      { path: "exercises", component: ExercisesComponent },
      { path: "modalities", component: ModalitiesComponent },
      { path: "settings", component: SettingsComponent },
    ],
  },
  // {
  //   path: "student",
  //   component: UserLayoutComponent,
  //   canActivate: [roleGuard],
  //   data: { role: "STUDENT" },
  //   children: [
  //     {
  //       path: "overview",
  //       component: UserOverviewComponent,
  //     },
  //   ],
  // },
];
