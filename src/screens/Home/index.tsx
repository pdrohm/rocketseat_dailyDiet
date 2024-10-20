import { useState, useCallback } from "react";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import {
  Container,
  StatsCard,
  StatsButton,
  StatsTitle,
  StatsText,
  StatsIcon,
  Meals,
  MealsTitle,
  MealGroupTitle,
  EmptyListComponent,
} from "./styles";

import { FlatList, Alert } from "react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { MealCard } from "@components/MealCard";

import { MealGroupProps } from "@storage/storage.config";
import { getAllMealGroups } from "@storage/meal/getAllMealGroups";

import { getStats } from "@utils/getStats";

import { GeneralStatsType } from "@screens/GeneralStats";

export const Home = () => {
  const [stats, setStats] = useState<GeneralStatsType>({} as GeneralStatsType);
  const [mealGroups, setMealGroups] = useState<MealGroupProps[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  const handleAddNewMeal = () => {
    navigate("new-meal");
  };

  const handleShowStats = () => {
    navigate("general-stats");
  };

  const fetchMealGroups = async () => {
    try {
      setIsLoading(true);
      const data = await getAllMealGroups();
      const lastStats = await getStats();

      setStats(lastStats);
      setMealGroups(data);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as refeições!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <StatsCard
        style={
          stats.isDietPositive
            ? { backgroundColor: "#E5F0DB" }
            : { backgroundColor: "#F4E6E7" }
        }
      >
        <StatsTitle>{stats.percentageOfMealsInDiet}%</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <StatsButton onPress={handleShowStats}>
          <StatsIcon />
        </StatsButton>
      </StatsCard>

      <Meals>
        <MealsTitle>Refeições</MealsTitle>
        <Button
          title="Nova Refeição"
          icon="plus"
          onPress={handleAddNewMeal}
          style={{ marginBottom: 20 }}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={mealGroups}
            keyExtractor={(group) => group.date}
            ListEmptyComponent={() => (
              <EmptyListComponent>
                Você ainda não cadastrou nenhuma refeição!
              </EmptyListComponent>
            )}
            renderItem={(group) => (
              <>
                <MealGroupTitle>{group.item.date}</MealGroupTitle>
                <FlatList
                  data={group.item.meals}
                  keyExtractor={(meal) => meal.id.toString()}
                  contentContainerStyle={{ paddingBottom: 10 }}
                  renderItem={(meal) => (
                    <MealCard
                      type={meal.item.isInDiet ? "primary" : "secondary"}
                      time={meal.item.time}
                      text={meal.item.name}
                      onPress={() => navigate("meal", { meal: meal.item })}
                    />
                  )}
                />
              </>
            )}
          />
        )}
      </Meals>
    </Container>
  );
};
