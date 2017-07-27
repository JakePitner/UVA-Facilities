import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryStack,
  VictoryTheme
} from "victory-native";

const data = [
  { FirstHour: 0, Energy: 402 },
  { SecondHour: 1, Energy: 208 },
  { ThirdHour: 2, Energy: 520 },
  { FourthHour: 3, Energy: 357 },
  { FifthHour: 4, Energy: 291 },
  { SixthHour: 5, Energy: 373 }
];

class LineGraph extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Weekly Energy Consumption"}</Text>
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            tickFormat={["HR 1", "HR 2", "HR 3", "HR 4", "HR 5", "HR 6"]}
          />
          <VictoryAxis dependentAxis tickFormat={x => `${x / 1}`} />
          <VictoryLine
            style={{
              data: { width: 13, strokeWidth: 0 }
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

export default LineGraph;
