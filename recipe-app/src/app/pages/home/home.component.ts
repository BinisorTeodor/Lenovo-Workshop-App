import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule, CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  recipes: Recipe[] = [];

  dummyRecipes!: Recipe[];

  filteredRecipes!: Recipe[];

  errorMessage = '';

  searchValue = '';

  dbRecipes!: any[];


  constructor(private recipesService: RecipesService, readonly router: Router, private cdr:ChangeDetectorRef) {
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

    

    // db.subscribeQuery({ recipes: {} }, (resp) => {
    //   if (resp.error) {
    //     this.errorMessage = resp.error.message;
    //   }

    //   if (resp.data) {
    //     this.dbRecipes = resp.data.recipes;
    //   }

    // });

  }

  ngOnInit() {
    this.recipesService.recipes$.subscribe((recipes) => {
      this.dbRecipes=[...recipes];
      this.cdr.detectChanges();
    })
  }


  filterValues() {
    this.filteredRecipes = this.dummyRecipes.filter
      ((recipe) => recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()));
  }


  redirectToAddRecipe() {
    this.router.navigateByUrl('add-recipe');
  }

}
