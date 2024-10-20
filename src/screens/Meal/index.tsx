import { Alert } from "react-native";

import {
  Container,
  MealInfo,
  MealName,
  MealDescription,
  DateTitle,
  Date,
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";

import { MealProps } from "@storage/storage.config";

import { Button } from "@components/Button";
import { MealTag } from "@components/MealTag";
import { SecondaryHeader } from "@components/SecondaryHeader";

import { removeMeal } from "@storage/meal/removeMeal";

type RouteParams = {
  meal: MealProps;
};

export const Meal = () => {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const handleEditMeal = () => {
    navigate("edit-meal", { meal });
  };

  const removeMealAfterWarning = async () => {
    try {
      await removeMeal(meal);
      navigate("home");
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível excluir a refeição!");
      console.log(error);
    }
  };

  const handleRemoveMeal = async () => {
    Alert.alert(
      "Remover refeição",
      `Deseja remover a refeição "${meal.name}"?`,
      [
        { text: "Sim", onPress: () => removeMealAfterWarning() },
        { text: "Não", style: "cancel" },
      ]
    );
  };

  return (
    <Container>
      <SecondaryHeader title="Refeição" />

      <MealInfo>
        <MealName>{meal.name}</MealName>
        <MealDescription>{meal.description}</MealDescription>
        <DateTitle>Data e Hora</DateTitle>
        <Date>
          {meal.date} às {meal.time}
        </Date>
        <MealTag isInDiet={meal.isInDiet} />

        <Button
          title="Editar refeição"
          icon="pencil"
          style={{ marginTop: "auto" }}
          onPress={handleEditMeal}
        />
        <Button
          title="Excluir refeição"
          icon="trash"
          type="secondary"
          onPress={handleRemoveMeal}
        />
      </MealInfo>
    </Container>
  );
};
