import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


export default class App extends React.Component {



    constructor(props) {
	super(props)
	this.state = {
		allBuildingNames: ['thorton']
	}
}

  buildingSelected(building) { console.log( building)
      fetch(
        "http://138.197.11.189:3000/5901ffbfd786a21a6b69eb9a/sensors/" + building
      ). if(results => {
        results.json().then(json => {
          { console.log( json)}
        });
      });
  }


  componentWillMount() {
    fetch(
    "http://138.197.11.189:3000/5901ffbfd786a21a6b69eb9a/buildings"
  ).then(results => {
    results.json().then(json => {
      this.setState({ allBuildingNames: json });
    });
  });
 }
       render() {
       return (
       <View style={styles.container}>
         <ScrollView>
           {this.state.allBuildingNames.map(building =>
             <TouchableOpacity style={styles.options}
             onPress={this.buildingSelected.bind(this, building.Name)}>
               <Text style={{marginLeft: 5, color: 'black', fontSize: 16}}>
                 {building.Name}
               </Text>
             </TouchableOpacity>
           )}
         </ScrollView>
       </View>
       )
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
