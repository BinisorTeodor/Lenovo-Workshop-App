import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recipes: Recipe[] = [];

  dummyRecipes!: Recipe[];

  filteredRecipes!: Recipe[];

  errorMessage = '';

  searchValue = '';

  dbRecipes!: any[];

  constructor(recipesService: RecipesService, readonly router: Router) {
    this.recipes = recipesService.recipes;
    recipesService.getAllRecipes().subscribe({
      next: (response) => {
        this.dummyRecipes = response.recipes;
        this.filteredRecipes = response.recipes;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })


    db.subscribeQuery({ recipes: {} }, (resp) => {
      if (resp.error) {
        this.errorMessage = resp.error.message;
      }

      if (resp.data) {
        this.dbRecipes = resp.data.recipes;;
      }

    });

  }


  filterValues() {
    this.filteredRecipes = this.dummyRecipes.filter
      ((recipe) => recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()));
  }


  redirectToAddRecipe() {
    this.router.navigateByUrl('add-recipe');
  }

}
