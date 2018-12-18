export class RecipeModel {
    image:string;
    label:string;
    url: string;
    dietLabels: Array<string>;
    ingredientLines: Array<string>;
    calories: number;
    totalTime: number;
}
