import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const faciltiesArray = ['a', 'b', 'c', 'd']


export default class App extends React.Component {



  facilitySelected() {
      fetch(
        "138.197.11.189:3000/api/AIzaSyAroiIgW9Qyn2QOMvdjJxZqntnDkdNH8Fc/buildings"
      ).then(results => {
        results.json().then(json => {
          console.log(json)
          this.setState({ allBuildingData: json });
          this.props.navigation.navigate('FacilitiesDemand', { categoryBuildingData: json} )
        })
      });
    }

    componentWillMount() {
          fetch(
            "http://138.197.11.189:3000/5900e4e9ddb6a40f274b7361/buildings"
          ).then(results => {
            results.json().then(json => {
              console.log(json)
              this.setState({ allBuildingData: json });
              this.props.navigation.navigate('FacilitiesDemand', { categoryBuildingData: json} )
            })
          });
        }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility ZY1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.options}>
              <Text style={styles.optionsText}>
                Facility X
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
