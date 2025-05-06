import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipe-card',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
    @Input() recipe!: Recipe;


    constructor(readonly router: Router) {

    }

    goToRecipePage() {
      this.router.navigateByUrl('recipes/' + this.recipe.id);
    }
}
