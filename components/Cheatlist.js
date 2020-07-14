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
      selectedSubtopicFolder = selectedSubtopicFolder.replace(/-/g, '_').toUpperCase();
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
                           {this.getTitle(topic)}
                           {topic.image &&
                              <View style={styles.imageView}>
                                 <Image source={Images[selectedSubtopicFolder][topic.image]} style={styles.image} />
                              </View>
                           }
                           {topic.data.map((item) => {
                              { return this.getDataItem(item, 'NORMAL') }
                           })}
                        </View>
                     )
                  } else if (topic.type === 'TABLE') {
                     return (
                        <View>
                           {this.getTitle(topic)}
                           <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                              {topic.headers && (
                                 <View style={{ backgroundColor: '#FFFF9C', borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                    {topic.headers.map((header) => {
                                       return (
                                          <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                             <Text style={styles.tableHeader}>{header}</Text>
                                          </View>
                                       )
                                    })}
                                 </View>
                              )}
                              {topic.data.map((dataItem) => {
                                 return (
                                    <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                       {dataItem.columns.map((column) => {
                                          return (
                                             <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                                {this.getDataItem(column, 'TABLE')}
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
                           {this.getTitle(topic)}
                           <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                              {topic.data.map((dataItem) => {
                                 return (
                                    <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text style={styles.tableCell}>{dataItem.name}</Text>
                                       </View>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          {this.getDataItem(dataItem, 'TABLE_LIST')}
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

   getTitle(topic) {
      if (topic.title) {
         return (
            <Text style={styles.namePrompt}>{topic.title}</Text>
         );
      } else if (topic.titles) {
         return (
            <Text style={styles.myIndent}>
               {topic.titles.map((title) => {
                  if (title.type === 'NORMAL') {
                     return (
                        <Text style={styles.namePrompt}>{title.value}</Text>
                     )
                  } else if (title.type === 'MATH') {
                     return (
                        <MathExpression expression={title.value} myWidth={title.width} myHeight={title.height} />
                     )
                  }
               })}
            </Text>
         );
      }
   }

   getDataItem(item, type) {
      if (type === "NORMAL") {
         if (item.name) {
            return (
               <Text>
                  <Text style={styles.namePromptItem}>{item.name}</Text>
                  <Text>: </Text>
                  {this.getDataValues(item)}
               </Text>
            )
         } else if (item.names) {
            return (
               <Text>
                  {this.getDataText(item.names, "NAME")}
                  <Text>: </Text>
                  {this.getDataValues(item)}
               </Text>
            )
         } else {
            return this.getDataValues(item);
         }
      } else {
         return this.getDataValues(item);
      }
   }

   getDataValues(item) {
      if (item.value) {
         console.log("getDataItem RETURNING A VALUE!!, value=" + item.value);
         return (
            <Text style={styles.myIndent}>
                {this.getDataText([{"value":item.value, "styles":item.styles, "type":item.type, "width":item.width, "height":item.height}], "VALUE")}
            </Text>
         )
      } else if (item.values) {
         return (
            <Text style={styles.myIndent}>
               {this.getDataText(item.values, "VALUE")}
            </Text>
         )
      }
   }

   getDataText(values, myType) {
      let myStyle;
      if (myType === "NAME") {
         myStyle = styles.namePromptItem;
      } else if (myType === "VALUE") {
         myStyle = styles.textItem;
      }
      return values.map((text) => {
         console.log("values!!! text = " + JSON.stringify(text));
         if (!text.type || text.type === 'NORMAL') {
            if (text.styles) {
               var myStyles = [];
               for (var i = 0; i < text.styles.length; i++) {
                  if (text.styles[i] === "ITALIC") {
                     myStyles.push(styles.italic);
                  } else if (text.styles[i] === "BOLD") {
                     myStyles.push(styles.bold);
                  }
               }
               return (
                  <Text style={myStyles}>{text.value}</Text>
               )
            } else {
               return (
                  <Text style={myStyle}>{text.value}</Text>
               )
            }
         } else if (text.type === 'MATH') {
            if (myType === "NAME") {
               return (
                  <View style={styles.mathElement} width={text.width} height={text.height}>
                     <MathExpression expression={text.value} myWidth={text.width} myHeight={text.height} />
                  </View>
               )
            } else {
               return (
                  <MathExpression expression={text.value} myWidth={text.width} myHeight={text.height} />
               )
            }
         }
      });
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
      marginLeft: 10,
      fontSize: 18,
      fontStyle: 'italic',
      textDecorationLine: 'underline'
   },
   namePromptItemView: {
      marginLeft: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#000'
   },
   textItem:
   {
      fontSize: 16
   },
   textItemBold:
   {
      fontSize: 16,
      fontWeight: "bold"
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
   },
   italic: {
      fontStyle: 'italic'
   },
   bold: {
      fontWeight: 'bold'
   },
   mathElement: {
      margin: 0,
      padding: 0,
      flexDirection: 'column',
      alignSelf: "flex-start",
      justifyContent: "flex-start",
      borderBottomWidth: 1,
      borderBottomColor: '#000'
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
