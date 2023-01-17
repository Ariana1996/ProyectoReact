const meals = [{
    "id": "52959",
    "tittle": "Baked salmon with fennel & tomatoes",
    "price": 100,
    "imgUrl": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    "category": "salmon"
  },
  {
    "id": "52819",
    "tittle": "Cajun spiced fish tacos",
    "price": 100,
    "imgUrl": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    "category": "salmon"
  },
  {
    "id": "52944",
    "tittle": "Escovitch Fish",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    "id": "52802",
    "tittle": "Fish pie",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg"
  },
  {
    "id": "52918",
    "tittle": "Fish Stew with Rouille",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg"
  },
  {
    "id": "52764",
    "tittle": "Garides Saganaki",
    "price": 100,
    "category": "langostinos",
    "imgUrl": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg"
  },
  {
    "id": "52773",
    "tittle": "Honey Teriyaki Salmon",
    "price": 100,
    "category": "salmon",
    "imgUrl": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
  },
  {
    "id": "52887",
    "tittle": "Kedgeree",
    "price": 100,
    "category": "fideosArroz",
    "imgUrl": "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg"
  },
  {
    "id": "52946",
    "tittle": "Kung Po Prawns",
    "category": "langostinos",
    "imgUrl": "https://www.themealdb.com/images/media/meals/1525873040.jpg"
  },
  {
    "id": "52821",
    "tittle": "Laksa King Prawn Noodles",
    "price": 100,
    "category": "fideosArroz",
    "imgUrl": "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg"
  },
  {
    "id": "52777",
    "tittle": "Mediterranean Pasta Salad",
    "price": 100,
    "category": "fideosArroz",
    "imgUrl": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
  },
  {
    "id": "52809",
    "tittle": "Recheado Masala Fish",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg"
  },
  {
    "id": "52960",
    "tittle": "Salmon Avocado Salad",
    "price": 100,
    "category": "salmon",
    "imgUrl": "https://www.themealdb.com/images/media/meals/1549542994.jpg"
  },
  {
    "id": "52823",
    "tittle": "Salmon Prawn Risotto",
    "price": 100,
    "category": "salmon",
    "imgUrl": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg"
  },
  {
    "id": "52936",
    "tittle": "Saltfish and Ackee",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg"
  },
  {
    "id": "52836",
    "tittle": "Seafood fideuà",
    "price": 100,
    "category": "langostinos",
    "imgUrl": "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg"
  },
  {
    "id": "52953",
    "tittle": "Shrimp Chow Fun",
    "price": 100,
    "category": "langostinos",
    "imgUrl": "https://www.themealdb.com/images/media/meals/1529445434.jpg"
  },
  {
    "id": "53023",
    "tittle": "Sledz w Oleju (Polish Herrings)",
    "price": 100,
    "category": "salmon",
    "imgUrl": "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg"
  },
  {
    "id": "52882",
    "tittle": "Three Fish Pie",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg"
  },
  {
    "id": "52975",
    "tittle": "Tuna and Egg Briks",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
  },
  {
    "id": "52852",
    "tittle": "Tuna Nicoise",
    "price": 100,
    "category": "pescado",
    "imgUrl": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg"
  }
]

export default function getAllItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meals);
    }, 10);
  });
}

export function getSingleItem(itemID) {

  let meal = meals.find((item) => {
    return item.id === itemID;
  });


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (meal !== undefined) resolve(meal);
      else reject("Comida no encontrada");
    }, 200);
  });
}

export function getItemsByCategory(categoryID) {
  //filter es como el find, pero trae un array, no solo encuentra el primero
  let ItemsByCategory = meals.filter((item) => item.category === categoryID);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemsByCategory);
    }, 200);
  });
}