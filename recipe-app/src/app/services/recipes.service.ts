import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '1',
      name: "Classic Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes : 20
    }
  ];
  constructor() { }
}
