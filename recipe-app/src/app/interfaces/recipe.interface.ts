export interface Recipe {
    id: string;
    name: string;
    image: string;
    tags: string[];
    prepTimeMinutes: number;
    difficulty?: string;
}


const a: Pick<Recipe, 'name'> = {name:'aaa'};

//const b: Omit<Recipe, 'name'> = {id:1};