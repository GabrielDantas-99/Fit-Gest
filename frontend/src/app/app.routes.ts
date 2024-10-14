import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { OverviewComponent } from "./pages/admin/overview/overview.component";
import { StudentsComponent } from "./pages/admin/students/students.component";
import { SettingsComponent } from "./pages/admin/settings/settings.component";
import { AdminLayoutComponent } from "./pages/admin/components/admin-layout/admin-layout.component";
import { ModalitiesComponent } from "./pages/admin/modalities/modalities.component";
import { ExercisesComponent } from "./pages/admin/exercises/exercises.component";

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
    component: AdminLayoutComponent,
    children: [
      {
        path: "overview",
        component: OverviewComponent,
      },
      {
        path: "students",
        component: StudentsComponent,
      },
      {
        path: "exercises",
        component: ExercisesComponent,
      },
      {
        path: "modalities",
        component: ModalitiesComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
    ],
  },
];
