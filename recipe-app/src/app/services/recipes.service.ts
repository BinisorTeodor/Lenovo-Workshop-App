import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { HttpClient } from '@angular/common/http';
import { db } from '../db/db';
import { id } from '@instantdb/core';
import { BehaviorSubject, Observable } from 'rxjs';


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
    },
    {
      id: '2',
      name: "Salad",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes : 20
    },
    {
      id: '3',
      name: "Cookies",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes : 20
    }
  ];


  readonly API_URL = 'https://dummyjson.com/recipes';

  private recipeSubject = new BehaviorSubject<Recipe[]>(this.recipes)
  recipes$ = this.recipeSubject.asObservable();
  



  constructor(readonly http: HttpClient) {
    this.subscribeToRecipes();
  }



  //HOMEWORK CODE

  private subscribeToRecipes() {
    db.subscribeQuery({ recipes: {} }, (resp) => {
      
      if (resp.data) {
        this.recipeSubject.next([...resp.data.recipes]);
        console.log("Subscribed recipes received:", resp.data.recipes);
      }

    });


    
  }
  
  //END OF HOMEWORK CODE



  getAllRecipes() {
    return this.http.get<{recipes: Recipe[]}>(this.API_URL);
  }
 
  getRecipeById(id: number) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addDbRecipes(recipeInput: Omit<Recipe,'id'>) {

    const newId = id();

    db.transact(
      db.tx.recipes[id()].update({
        id: newId,
        name: recipeInput.name,
        image: recipeInput.image,
        difficulty: recipeInput.difficulty,
        prepTimeMinutes: recipeInput.prepTimeMinutes
      })
    );


    console.log("Succes, the recipe has been added");
  }

  //HOMEWORK CODE


   
}
