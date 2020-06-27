import React, { Component } from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Images from '../images/index';
//BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, PHYSICS
import biologyCheatlistData from '../helpers/biology_cheatlist_data';
import chemistryCheatlistData from '../helpers/chemistry_cheatlist_data';
import computersCheatlistData from '../helpers/computers_cheatlist_data';
import ecologyCheatlistData from '../helpers/ecology_cheatlist_data';
import oceanographyCheatlistData from '../helpers/oceanography_cheatlist_data';
import geologyCheatlistData from '../helpers/geology_cheatlist_data';
import meteorologyCheatlistData from '../helpers/meteorology_cheatlist_data';
import physicsCheatlistData from '../helpers/physics_cheatlist_data';
import MathExpression from '../components/Math';
//import Constants from 'expo-constants';


export default class Cheatlist extends Component {
   //PHYSICS, CHEMISTRY, ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, COMPUTERS(computer science)!
   constructor(props) {
      super(props);
      this.state = {
         topics: biologyCheatlistData
      };
   }
   render() {
      console.log("props.cheatList = " + this.props.cheatList);
      let cheatData = this.state.topics.data[0];
      let selectedTopic = this.props.cheatList;
      let selectedSubtopic = this.props.subtopic;
      let selectedSubtopicFolder = selectedSubtopic.replace(/ /g, '_').toUpperCase();
      //let imageFilename = "";
      let filteredTopic = {};
      //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, PHYSICS
      switch (selectedTopic) {
         case 'Biology':
            filteredTopic = biologyCheatlistData;
            break;
         case 'Chemistry':
            filteredTopic = chemistryCheatlistData;
            break;
         case 'Computers':
            filteredTopic = computersCheatlistData;
            break;
         case 'Ecology':
            filteredTopic = ecologyCheatlistData;
            break;
         case 'Oceanography':
            filteredTopic = oceanographyCheatlistData;
            break;
         case 'Geology':
            filteredTopic = geologyCheatlistData;
            break;
         case 'Meteorology':
            filteredTopic = meteorologyCheatlistData;
            break;
         case 'Physics':
            filteredTopic = physicsCheatlistData;
            break;
         default:
            filteredTopic = biologyCheatlistData;
      }
      let filteredSubtopic = filteredTopic.data.filter((subtopic) => {
         return subtopic.itemName === selectedSubtopic;
      });
      if (filteredSubtopic) {
         cheatData = filteredSubtopic[0].entries;
      }
      //console.log("cheatData = " + JSON.stringify(cheatData));
      return (
         <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
               {cheatData.map((topic) => {
                  if (topic.type === 'NORMAL') {
                     //console.log("topic.data.length = " + topic.data.length);
                     //if(topic.image){
                     //imageFilename = './images/' + selectedSubtopicFolder + '/' + topic.image;
                     //console.log("imageFilename = " + imageFilename);
                     //}
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           {topic.image &&
                              <View style={styles.imageView}>
                                 <Image source={Images[selectedSubtopicFolder][topic.image]} style={styles.image} />
                              </View>
                           }
                           {topic.data.map((item) => {
                              if (!item.type && (item.name || item.value)) {
                                 return (
                                    <Text style={styles.myIndent}>
                                       {item.name && (
                                          <Text>
                                             <Text style={styles.namePromptItem}>{item.name}</Text>
                                             <Text>: </Text>
                                          </Text>
                                       )}
                                       {item.value && (
                                          <Text style={styles.textItem}>{item.value}</Text>
                                       )}
                                    </Text>
                                 )
                              } else if (item.type === 'MATH') {
                                 return (
                                    <MathExpression expression={item.value} />
                                 )
                              }
                           })}
                        </View>
                     )
                  } else if (topic.type === 'TABLE') {
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                              <View style={{ backgroundColor: '#FFFF9C', borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                 {topic.headers.map((header) => {
                                    return (
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text style={styles.tableHeader}>{header}</Text>
                                       </View>
                                    )
                                 })}
                              </View>
                              {topic.data.map((dataItem) => {
                                 return (
                                    <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                       {dataItem.columns.map((column) => {
                                          return (
                                             <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                                <Text style={styles.tableCell}>{column.value}</Text>
                                             </View>
                                          )
                                       })}
                                    </View>
                                 )
                              })}
                           </View>
                        </View>
                     )
                  } else if (topic.type === 'TABLE_LIST') {
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                              {topic.data.map((dataItem) => {
                                 return (
                                    <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text style={styles.tableCell}>{dataItem.name}</Text>
                                       </View>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text style={styles.tableCell}>{dataItem.value}</Text>
                                       </View>
                                    </View>
                                 )
                              })}
                           </View>
                        </View>
                     )
                  }
               })}
            </ScrollView>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginBottom: 1,
      borderWidth: 2,
      borderColor: '#000000'
   },
   scrollView: {
      backgroundColor: 'rgb(250,250,250)',
      paddingHorizontal: 15,
   },
   myIndent:
   {
      marginLeft: 10,
   },
   namePrompt:
   {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'underline'
   },
   namePromptItem:
   {
      fontSize: 18,
      fontStyle: 'italic',
      textDecorationLine: 'underline'
   },
   textItem:
   {
      fontSize: 16
   },
   tableHeader:
   {
      fontSize: 18
   },
   tableCell:
   {
      fontSize: 16
   },
   imageView:
   {
      flex: 1.0,
      padding: 0
   },
   image:
   {
      resizeMode: "contain",
      width: "100%",
      height: 250
   },
   katex: {
      flex: 1,
   }
});

const inlineStyle = `
html, body {
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;
