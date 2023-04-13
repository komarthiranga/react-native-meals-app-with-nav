import { CATEGORIES, MEALS } from '../data/dummy-data'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';

const MealsOverViewScreen = ({route, navigation}) => {
    const { categoryId } = route.params;

    useEffect( () => {
        const categoryTitle = CATEGORIES.find( category => category.id === categoryId ).title; 
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

    const dispalyedMeals = MEALS.filter( mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0 )
    const renderItem = ({item}) => <MealItem item={item} />

    return(
        <SafeAreaView style={styles.container}>
              <FlatList data={dispalyedMeals} keyExtractor={ item => item.id} renderItem={renderItem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})

export default MealsOverViewScreen;