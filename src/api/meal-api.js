import axios from "axios";

const BASE_URL = "http://localhost:3200";
const BASE_URL_BACKEND= "http://localhost:8080";


export class MealApi {
  static async createMeal(formValues) {
    //"http://localhost:8080/meal/user/{id}"
    // return (await axios.post(`${BASE_URL}/meal/user/${formValues.userId}`, formValues)).data;
    return (await axios.post(`${BASE_URL}/meal`, formValues)).data;

    //BE
    //    return (await axios.post(`${BASE_URL}/meal/user/${mealId}`, formValues)).data;

  }

  static async fetchAllMeals() {
    return (await axios.get(`${BASE_URL}/meal`)).data;
    //BE:
    // return (await axios.get(`${BASE_URL_BACKEND}/meal/all`)).data;

  }

  static async deleteById(mealId) {
    return (await axios.delete(`${BASE_URL}/${mealId}`)).data;
  }
  //
  // static async updateById(id, values) {
  //   return (await axios.patch(`${BASE_URL}/${id}`, values)).data;
  // }
  // TO DO! 

  static async fetchById(mealId) {
    return (await axios.get(`${BASE_URL}/meal/${mealId}`)).data;
    //BE
    //     return (await axios.get(`${BASE_URL}/meal/${mealId}`)).data;

  }

  static async fetchAllUsers() {
    return (await axios.get(`${BASE_URL}/user`)).data;
  }

  static async createUser(user) {
    return (await axios.post(`${BASE_URL}/user`, user)).data;
  }

  static async fetchAllFoods() {
    return (await axios.get(`${BASE_URL}/food`)).data;
  }

  static async getFoodData(foodName) {
    return (await axios.get(`${BASE_URL}/food/search?name=${foodName}`)).data;
  }
}