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
  { FirstWeek: 0, Energy: 3250 },
  { SecondWeek: 1, Energy: 3250 },
  { ThirdWeek: 2, Energy: 3250 },
  { FourthWeek: 3, Energy: 3250 }
];

class WeeklyBarGraph extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Weekly Energy Consumption"}</Text>
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[0, 1, 2, 3]}
            tickFormat={["WK 1", "WK 2", "WK 3", "WK 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `${x / 1}`} />
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

export default WeeklyBarGraph;
