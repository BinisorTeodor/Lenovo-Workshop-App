import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
   {path:'', redirectTo: 'recipes', pathMatch: 'full'},
   {path:'recipes', component: HomeComponent},
   {path:'recipes/:id', component: RecipePageComponent},
   {path:'add-recipe', component: AddRecipeComponent},
   {path:'**', component: Page404Component}
     
];
