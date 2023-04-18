import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavioritesProvider from "./store/context/FavoritesProvider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#351401",
      },
      headerTintColor: "white",
      sceneContainerStyle: {
        backgroundColor: "#3f2f25",
      },
      drawerContentStyle: { backgroundColor: "#3f2f25" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#e4baa1",
    }}
  >
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavioritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavioritesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
