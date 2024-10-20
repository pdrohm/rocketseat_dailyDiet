import { useState, useEffect } from "react";

import {
  Container,
  Header,
  ReturnButton,
  StatsText,
  StatsTitle,
  ReturnIcon,
  Stats,
  StatsSubtitle,
  InfoBlock,
  InfoTitle,
  InfoView,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { getStats } from "@utils/getStats";
import { Loading } from "@components/Loading";

export type GeneralStatsType = {
  numberOfMeals: number;
  numberOfMealsOutDiet: number;
  bestSequenceOfMealsInDiet: number;
  percentageOfMealsInDiet: string;
  isDietPositive: boolean;
};

export const GeneralStats = () => {
  const [stats, setStats] = useState<GeneralStatsType>({} as GeneralStatsType);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  const {
    numberOfMeals,
    numberOfMealsOutDiet,
    percentageOfMealsInDiet,
    bestSequenceOfMealsInDiet,
    isDietPositive,
  } = stats;

  const handleReturnHome = () => {
    navigate("home");
  };

  useEffect(() => {
    (async () => {
      const stats = await getStats();
      setStats(stats);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container
      style={
        isDietPositive
          ? { backgroundColor: "#E5F0DB" }
          : { backgroundColor: "#F4E6E7" }
      }
    >
      <Header>
        <StatsTitle>{percentageOfMealsInDiet}%</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <ReturnButton onPress={handleReturnHome}>
          <ReturnIcon />
        </ReturnButton>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <Stats>
          <StatsSubtitle>Estatísticas Gerais</StatsSubtitle>

          <InfoBlock>
            <InfoTitle>{bestSequenceOfMealsInDiet}</InfoTitle>
            <InfoView>melhor sequência de pratos dentro da dieta</InfoView>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>{numberOfMeals}</InfoTitle>
            <InfoView>refeições registradas</InfoView>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>{numberOfMeals - numberOfMealsOutDiet}</InfoTitle>
            <InfoView>refeições dentro da dieta</InfoView>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>{numberOfMealsOutDiet}</InfoTitle>
            <InfoView>refeições fora da dieta</InfoView>
          </InfoBlock>
        </Stats>
      )}
    </Container>
  );
};
