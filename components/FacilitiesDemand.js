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
                Chilled Water Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Electric Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Electric Demand KBTH
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Energy Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                HW Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Heating Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Sewer Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Steam Demand
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Water Demand
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
    fontSize: 25,
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
