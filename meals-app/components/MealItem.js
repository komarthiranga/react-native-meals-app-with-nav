import {
  SafeAreaView,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
const MealItem = ({ item }) => {
  return (
    <SafeAreaView style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style={({ pressed }) => [
          pressed ? styles.buttonPressed : null,
        ]}>
        <SafeAreaView style={styles.innerConatiner}>
          <SafeAreaView>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.details}>
            <Text style={styles.detailsItem}> {item.duration}m</Text>
            <Text style={styles.detailsItem}>
              {item.complexity.toUpperCase()}{" "}
            </Text>
            <Text style={styles.detailsItem}>
              {item.affordability.toUpperCase()}{" "}
            </Text>
          </SafeAreaView>
        </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  mealItem: {
    margin: 16,
    borderRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
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
  innerConatiner: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
