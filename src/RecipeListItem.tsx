import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Text, View } from "react-native";
import styled from "styled-components";

export const RecipeListItem = ({ recipe }) => {
  const goToRecipe = () => {
    Alert.alert("Navigate to recipe");
  };

  return (
    <Container>
      <View />
      <Text>{recipe.Title}</Text>
      <GoToRecipeContainer>
        <Ionicons
          name="md-arrow-dropright-circle"
          size={48}
          color="black"
          onPress={goToRecipe}
        />
      </GoToRecipeContainer>
    </Container>
  );
};

const GoToRecipeContainer = styled.View`
    width: 64px;
    height 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.View`
  background-color: #eee;
  height: 64;
  margin-bottom: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 4;
  margin-left: 4;
`;
