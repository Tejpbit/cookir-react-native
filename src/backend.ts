let BACKEND_URL = "192.168.1.21";
let BACKEND_PORT = "8080";

export interface Recipe {
  Id: string;
  Title: string;
  Ingredients: Ingredient[];
}

export interface Ingredient {
  Name: string;
  Quantity: string;
  Unit: string;
}

export const getRecipes: () => Promise<Recipe[]> = async () => {
  let resp = await fetch(`http://${BACKEND_URL}:${BACKEND_PORT}/recipes`);
  let respJson = await resp.json();
  return respJson;
};
