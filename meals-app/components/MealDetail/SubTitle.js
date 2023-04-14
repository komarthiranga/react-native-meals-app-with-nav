import { SafeAreaView, Text, StyleSheet } from "react-native";

const SubTitle = ({children}) => {
  return (
    <SafeAreaView style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 8,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
});

export default SubTitle;
