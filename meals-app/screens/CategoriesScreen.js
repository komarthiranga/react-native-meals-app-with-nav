import { CATEGORIES } from '../data/dummy-data';
import {  FlatList, SafeAreaView, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {

    const renderCategoryItem = ({item}) => <CategoryGridTile title={item.title} color={item.color} />

    return (
        <SafeAreaView>
            <FlatList data={CATEGORIES} keyExtractor={ (item) => item.id  } renderItem={renderCategoryItem} numColumns={2} />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default CategoriesScreen;