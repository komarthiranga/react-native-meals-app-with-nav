import { MEALS } from '../data/dummy-data'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const MealsOverViewScreen = ({route}) => {
    const { categoryId } = route.params;
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