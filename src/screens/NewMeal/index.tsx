import { useState } from "react";
import { View, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Container, Form } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Options } from "@components/Options";
import { SecondaryHeader } from "@components/SecondaryHeader";
import { addNewMeal } from "@storage/meal/addNewMeal";

export type MealProps = {
  name: string;
  date: string;
  time: string;
  description: string;
};

export const NewMeal = () => {
  const [mealData, setMealData] = useState<MealProps>({} as MealProps);
  const [option, setOption] = useState<"inside" | "out" | "">("");

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

  const handleAddMeal = async () => {
    const newMeal = {
      ...mealData,
      isInDiet: option === "inside" ? true : false,
      id: uuidv4(),
    };

    try {
      await addNewMeal(newMeal);
      setMealData({} as MealProps);

      if (option === "inside") {
        navigate("inside-diet");
        return;
      }
      navigate("out-diet");
    } catch (error) {
      Alert.alert("Refeição", "Não foi adicionar a refeição!");
      console.log(error);
    }
  };

  return (
    <Container>
      <SecondaryHeader title="Nova refeição" />

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
          onPress={handleAddMeal}
          title="Cadastrar refeição"
          style={{ width: "100%", marginTop: "auto" }}
        />
      </Form>
    </Container>
  );
};
