import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';

const List = ({data}) => {
    return(
             data.map( (dataItem, index) => <SafeAreaView style={styles.listItem}><Text key={`li-${index}`} style={styles.itemText}>{dataItem}</Text></SafeAreaView> )
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 22,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
});

export default List;