import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme
} from "victory-native";

const data = [
  { July: 0, Energy: 13000 },
  { August: 1, Energy: 16500 },
  { September: 2, Energy: 14250 },
  { October: 3, Energy: 11250 },
  { November: 4, Energy: 17050 },
  { December: 5, Energy: 19500 }
];

class MonthBarGraphTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Monthly Energy Consumption"}</Text>
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            tickFormat={["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `${x / 10}`} />
          <VictoryBar
            style={{
              data: { width: 13, strokeWidth: 0, fill: "navy" }
            }}
            data={data}
            x="Month"
            y="Energy"
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20
  }
});

export default MonthBarGraphTwo;
