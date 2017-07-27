import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import MonthBarGraph from "./Components/MonthBarGraph";
import MonthBarGraphTwo from "./Components/MonthBarGraphTwo";
import WeeklyBarGraph from "./Components/WeeklyBarGraph";
import CurrentLineGraph from "./Components/CurrentLineGraph";

export default (App = StackNavigator({
  MonthBarGraph: { screen: CurrentLineGraph },
  MonthBarGraphTwo: { screen: MonthBarGraphTwo },
  WeeklyBarGraph: { screen: WeeklyBarGraph },
  CurrentLineGraph: { screen: CurrentLineGraph }
}));
