import { MealProps } from "../storage";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      "new-meal": undefined;
      "general-stats": undefined;
      "edit-meal": MealProps;
      "inside-diet": undefined;
      "out-diet": undefined;
      meal: MealProps;
    }
  }
}
