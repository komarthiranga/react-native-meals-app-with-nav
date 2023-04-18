import { CATEGORIES, MEALS } from '../data/dummy-data'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealList/MealItem';
import { useEffect } from 'react';
import MealsList from '../components/MealList/MealsList';

const MealsOverViewScreen = ({route, navigation}) => {
    const { categoryId } = route.params;
    useEffect( () => {
        const categoryTitle = CATEGORIES.find( category => category.id === categoryId ).title; 
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

    const dispalyedMeals = MEALS.filter( mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0 )

    return(
       <MealsList items={dispalyedMeals} />
    )
}



export default MealsOverViewScreen;