import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from '@react-navigation/native'

const CategoryGridTile = ({ title, color,id }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.gridItems}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate("MealsOverView", {categoryId: id})}
      >
        <SafeAreaView style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
