import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Current Electric Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Weekly Interpolated Data For Electric Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Monthly Interpolated Data For Electric Demand
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  optionsText: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 5

  },
  options: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: Dimensions.get('window').width,
    marginTop: 20,
    paddingBottom: 15

  },
}
)
