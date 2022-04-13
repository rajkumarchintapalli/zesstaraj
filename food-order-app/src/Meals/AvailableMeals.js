import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Chicken Biryani",
    description: "Non-veg and spicy",
    price: "297",
  },
  {
    id: "2",
    name: "Egg Biryani",
    description: "Non-veg and spicy",
    price: "249",
  },
  {
    id: "3",
    name: "Noodles",
    description: "Veg and spicy",
    price: "148",
  },
  {
    id: "4",
    name: "Pasta",
    description: "Veg and healthy",
    price: "200",
  },
  {
    id: "5",
    name: "Milkshake",
    description: "Fruits are healthy",
    price: "100",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
