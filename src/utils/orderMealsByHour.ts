import { MealProps } from "@storage/storage.config";

export const orderMealsByHour = (meals: MealProps[]) => {
  const orderedMeals = meals.sort((a, b) => {
    const aTimeFormatted = parseInt(a.time.replace(":", ""));
    const bTimeFormatted = parseInt(b.time.replace(":", ""));

    return aTimeFormatted < bTimeFormatted;
  });

  return orderedMeals;
};
