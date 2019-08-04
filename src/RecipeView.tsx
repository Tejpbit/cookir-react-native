import React from "react";
import { Text, View, Button } from "react-native";
import { Recipe, Ingredient } from "./backend";
import styled from "styled-components";
import { H1, H2 } from "./common/styled";

export const RecipeView = ({ navigation }) => {
  const recipe: Recipe = navigation.getParam("recipe", "no recipe");

  return (
    <RecipeViewContainer>
      <RecipeTitleContainer>
        <H1>{recipe.Title}</H1>
      </RecipeTitleContainer>
      <H2>Ingredients</H2>
      <Ingredients>
        {recipe.Ingredients.map((i: Ingredient) => {
          return (
            <IngredientRow key={i.Name}>
              <IngredientText>{i.Name}</IngredientText>
              <IngredientQuantity>{i.Quantity}</IngredientQuantity>
              <IngredientUnit>{i.Unit}</IngredientUnit>
            </IngredientRow>
          );
        })}
      </Ingredients>

      <H2>Description</H2>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit
        amet purus. Nullam ac tortor vitae purus faucibus ornare suspendisse
        sed. Quis imperdiet massa tincidunt nunc pulvinar sapien et. In
        fermentum et sollicitudin ac orci phasellus. Varius vel pharetra vel
        turpis. Lorem sed risus ultricies tristique nulla aliquet enim tortor
        at. Ut etiam sit amet nisl purus in mollis nunc. Eu sem integer vitae
        justo. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
        {"\n"}
        Sit amet commodo nulla facilisi nullam. Dignissim sodales ut eu sem.
        Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
        Ornare arcu odio ut sem nulla pharetra. Non sodales neque sodales ut
        etiam sit amet nisl purus. Ac turpis egestas integer eget aliquet nibh
        praesent tristique. Elementum nibh tellus molestie nunc. Turpis in eu mi
        bibendum neque egestas congue quisque. Vitae aliquet nec ullamcorper
        sit. Tortor vitae purus faucibus ornare suspendisse sed. Nullam eget
        felis eget nunc lobortis mattis aliquam faucibus. Viverra nibh cras
        pulvinar mattis nunc sed. Quisque egestas diam in arcu cursus euismod
        quis viverra nibh. Imperdiet sed euismod nisi porta lorem mollis aliquam
        ut. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus
        a. Ultrices gravida dictum fusce ut placerat orci.
        {"\n"}
        Dolor sit amet consectetur adipiscing elit. At consectetur lorem donec
        massa sapien faucibus et molestie. Sagittis aliquam malesuada bibendum
        arcu vitae elementum curabitur vitae nunc. Gravida neque convallis a
        cras semper auctor neque vitae tempus. Nec nam aliquam sem et tortor
        consequat id porta nibh. Tortor aliquam nulla facilisi cras fermentum.
        Quam pellentesque nec nam aliquam sem et tortor consequat id. Ipsum
        faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisi morbi
        tempus iaculis urna id volutpat lacus. Consectetur libero id faucibus
        nisl tincidunt eget nullam non.
      </Description>
    </RecipeViewContainer>
  );
};

RecipeView.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("otherParam", "recipe")
  };
};

const RecipeViewContainer = styled.ScrollView`
  display: flex;
`;

const RecipeTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10;
`;

const Description = styled.Text`
  margin-left: 20;
`;

const Ingredients = styled.View`
  margin-left: 20;
`;

const IngredientRow = styled.View`
  display: flex;
  flex-direction: row;
`;

const IngredientText = styled.Text`
  text-align: right;
  flex: 2;
  padding-right: 10px;
`;

const IngredientQuantity = styled.Text`
  flex: 1;
  text-align: right;
  padding-right: 10px;
`;

const IngredientUnit = styled.Text`
  flex: 1;
`;
