import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    recipes: Recipe[] = [];

    dummyRecipes!: Recipe[];

    errorMessage= '';
    

    constructor(recipesService: RecipesService) {
        this.recipes = recipesService.recipes;
        recipesService.getAllRecipes().subscribe({
          next: (response) => {
            this.dummyRecipes = response.recipes;
          },
          error: (err) => {
            this.errorMessage = err;
          }
        })
    }

}
