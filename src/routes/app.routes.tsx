import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { OutDiet } from "@screens/OutDiet";
import { EditMeal } from "@screens/EditMeal";
import { InsideDiet } from "@screens/InsideDiet";
import { GeneralStats } from "@screens/GeneralStats";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="out-diet" component={OutDiet} />
      <Screen name="edit-meal" component={EditMeal} />
      <Screen name="inside-diet" component={InsideDiet} />
      <Screen name="general-stats" component={GeneralStats} />
    </Navigator>
  );
};
