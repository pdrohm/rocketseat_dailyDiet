const MEALS_COLLECTION = "@daily-diet:meals";

type MealGroupProps = {
  date: string;
  meals: MealProps[];
};

type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  id: string | number[];
  isInDiet: boolean;
};

export { MEALS_COLLECTION, MealProps, MealGroupProps };
