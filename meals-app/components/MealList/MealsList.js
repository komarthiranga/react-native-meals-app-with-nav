import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({items}) => {

    const renderItem = ({item}) => <MealItem item={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={items} keyExtractor={ item => item.id} renderItem={renderItem} />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})

export default MealsList;