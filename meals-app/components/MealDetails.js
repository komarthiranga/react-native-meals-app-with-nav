import { SafeAreaView, Text, StyleSheet } from "react-native";
const MealDetails = ({item, style, textStyle}) => {
  return (
    <SafeAreaView style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}> {item.duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{item.complexity.toUpperCase()} </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {item.affordability.toUpperCase()}{" "}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        margin: 8,
      },
      detailsItem: {
        marginHorizontal: 4,
      },

});

export default MealDetails;
