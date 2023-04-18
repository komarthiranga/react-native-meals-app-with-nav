import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from 'react';
import IconButton from "../components/IconButton";
import FavoritesContext from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const {addFavorite, ids, removeFavorite} = useContext(FavoritesContext);
    const mealIsFavorite = ids.includes(mealId)

    const headerButtonPressHandler = () => {
        if(mealIsFavorite) {
          removeFavorite(mealId);
        } else {
          addFavorite(mealId);
        }
    }

   useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={ mealIsFavorite ? "star" : "star-outline"} color="white" onPress={headerButtonPressHandler} />
                )
            }
        })
   }, [navigation, headerButtonPressHandler]);



  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails item={selectedMeal} textStyle={styles.detailText} />
      <SafeAreaView style={styles.listOuterCOntainer}>
        <SafeAreaView style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
rootContainer: {
        margin: 32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterCOntainer: {
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
