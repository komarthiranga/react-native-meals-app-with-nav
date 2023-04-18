import { SafeAreaView, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealList/MealsList';
import { useContext } from 'react';
import FavoritesContext from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';


const FavoritesScreen = () => {

    const { ids } = useContext(FavoritesContext);
    const displayedFavorites = MEALS.filter( meal => ids.includes(meal.id) )
    console.log(displayedFavorites);

    if(displayedFavorites.length === 0 ) {
        return <SafeAreaView style={styles.rootContainer}>
            <Text style={styles.text}>No Favorite Items are avilable </Text>
        </SafeAreaView>
    }

    return <MealsList items={displayedFavorites} />

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text : {
        fontSize: 18,
        fontweight: 'bold',
        color: 'white'
    }
})

export default FavoritesScreen;