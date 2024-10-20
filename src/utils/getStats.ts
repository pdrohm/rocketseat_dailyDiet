import { getAllMealGroups } from "@storage/meal/getAllMealGroups";

export const getStats = async () => {
  const mealGroups = await getAllMealGroups();

  const numberOfMeals = mealGroups.reduce(
    (accumulator, mealGroup) => accumulator + mealGroup.meals.length,
    0
  );

  const numberOfMealsOutDiet = mealGroups.reduce((accumulator, mealGroup) => {
    const mealsOutDiet = mealGroup.meals.reduce((accumulator, meal) => {
      if (!meal.isInDiet) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);

    return accumulator + mealsOutDiet;
  }, 0);

  const percentageOfMealsInDiet = (
    100 -
    (numberOfMealsOutDiet / numberOfMeals) * 100
  )
    .toFixed(2)
    .toString();

  const bestSequenceOfMealsInDiet = mealGroups.reduce(
    (accumulator, mealGroup) => {
      const sequenceOfMealsInDiet = mealGroup.meals.reduce(
        (accumulator, meal) => {
          if (meal.isInDiet) {
            return accumulator + 1;
          }
          return accumulator;
        },
        0
      );

      if (sequenceOfMealsInDiet > accumulator) {
        return sequenceOfMealsInDiet;
      }

      return accumulator;
    },
    0
  );

  const isDietPositive =
    parseFloat(percentageOfMealsInDiet) > 50 ? true : false;

  return {
    numberOfMeals,
    isDietPositive,
    numberOfMealsOutDiet,
    percentageOfMealsInDiet:
      percentageOfMealsInDiet === "NaN" ? "0" : percentageOfMealsInDiet,
    bestSequenceOfMealsInDiet,
  };
};
