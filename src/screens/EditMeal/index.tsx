import { useState } from "react";
import { View, Alert } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Form } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Options } from "@components/Options";
import { SecondaryHeader } from "@components/SecondaryHeader";

import { MealProps } from "@storage/storage.config";
import { editMeal } from "@storage/meal/editMeal";

type RouteParams = {
  meal: MealProps;
};

export const EditMeal = () => {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const currentOption = meal.isInDiet ? "inside" : "out";

  const [mealData, setMealData] = useState<MealProps>(meal);
  const [option, setOption] = useState<"inside" | "out" | "">(currentOption);

  const { navigate } = useNavigation();

  const handleChangeMealName = (name: string) => {
    const newMealData = {
      ...mealData,
      name,
    };

    setMealData(newMealData);
  };

  const handleChangeMealDescription = (description: string) => {
    const newMealData = {
      ...mealData,
      description,
    };

    setMealData(newMealData);
  };

  const handleChangeMealDate = (date: string) => {
    const newMealData = {
      ...mealData,
      date,
    };

    setMealData(newMealData);
  };

  const handleChangeMealTime = (time: string) => {
    const newMealData = {
      ...mealData,
      time,
    };

    setMealData(newMealData);
  };

  const changeOption = (option: "inside" | "out" | "") => {
    setOption(option);
  };

  const handleEditMeal = async () => {
    try {
      const newMeal = {
        ...mealData,
        isInDiet: option === "inside" ? true : false,
      };
      await editMeal(meal, newMeal);
      setMealData({} as MealProps);

      if (option === "inside") {
        navigate("inside-diet");
        return;
      }
      navigate("out-diet");
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível editar a refeição!");
      console.log(error);
    }
  };

  return (
    <Container>
      <SecondaryHeader title="Editar refeição" />

      <Form>
        <Input
          title="Nome"
          value={mealData.name}
          onChangeText={(text) => handleChangeMealName(text)}
        />
        <Input
          height="2x"
          multiline={true}
          title="Descrição"
          numberOfLines={4}
          value={mealData.description}
          style={{ textAlignVertical: "top" }}
          onChangeText={(text) => handleChangeMealDescription(text)}
        />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Input
            title="Data"
            width="0.5x"
            value={mealData.date}
            onChangeText={(text) => handleChangeMealDate(text)}
          />
          <Input
            title="Hora"
            width="0.5x"
            value={mealData.time}
            onChangeText={(text) => handleChangeMealTime(text)}
          />
        </View>

        <Options changeOption={changeOption} option={option} />

        <Button
          icon="pencil"
          title="Salvar"
          style={{ width: "100%", marginTop: "auto" }}
          onPress={handleEditMeal}
        />
      </Form>
    </Container>
  );
};
