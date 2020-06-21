import React, { Component } from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
//import Constants from 'expo-constants';


export default class Cheatlist extends Component {
   //PHYSICS, CHEMISTRY, ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, COMPUTERS(computer science)!
   state = {
      Biology: [],
      Chemistry: [],
      Geology: [],
      Physics: []
   };
   constructor(props) {
      super(props);
      this.state = {


         Biology: [
            {
               "index": 0,
               title: 'Homeostasis',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Life able to maintain stable internal environment - self regulation" }
               ]
            },
            {
               "index": 1,
               title: 'Cell Theory',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Cells are building blocks of all life" },
                  { "index": 1, "name": null, "value": "All cells come from pre-existing cells" },
                  { "index": 2, "name": null, "value": "All metabolism occurs in cells of the body" }
               ]
            },
            {
               "index": 2,
               title: 'Gene Theory',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "All genetic information stored in DNA or genes" },
                  { "index": 1, "name": null, "value": "Genes control most or all aspects of an organism" },
                  { "index": 2, "name": null, "value": "DNA language can be translated into RNA, then to protein language for basic functionality" }
               ]
            },
            {
               "index": 3,
               title: 'Organelles',
               type: "NORMAL",
               data: [

                  { "index": 0, "name": "Cell Wall", "value": "Protects, maintains shape, regulates water intake" },
                  { "index": 1, "name": "Centrioles Centrosomes MTOCs", "value": "Organizes spindle fibers (cell division)" },
                  { "index": 2, "name": "Chloroplast", "value": "Absorbs light & synthesizes sugar" },
                  { "index": 3, "name": "Cytoskeleton", "value": "Maintains cell shape, flow, positioning" },
                  { "index": 4, "name": "Endomembrane System", "value": "Regulates protein traffic+metabolic functions" },
                  { "index": 5, "name": "Endoplasmic Reticulum", "value": "Rough: makes proteins. Smooth: synthesizes lipids, stores Ca++, detxifies drugs/poisons" },
                  { "index": 6, "name": "Golgi Apparatus", "value": "Processes, packages & secretes substances" },
                  { "index": 7, "name": "Lysosomes", "value": "Intracellular digestion" },
                  { "index": 8, "name": "Mitochondria", "value": "Powerhouse of the cel : (respiration)" },
                  { "index": 9, "name": "Nucleolus", "value": "Holds all the cell's genetic information" },
                  { "index": 10, "name": "Nucleus", "value": "Holds chromatin, surrounded by nuclear envelope" },
                  { "index": 11, "name": "Peroxisomes", "value": "Converts H₂O₂ to water+O₂" },
                  { "index": 12, "name": "Ribosomes", "value": "Protein factories" },
                  { "index": 13, "name": "Vacuoles", "value": "Storage & pumping out water" }
               ]
            },
            {
               "index": 4,
               title: 'Prokaryotic vs. Eukaryotic Cells',
               type: "TABLE",
               headers: ["Prokaryotes", "Eukaryotes"],
               data: [
                  { "index": 0, "columns": [{ id: 0, "value": "No internal membrances/organelles" }, { id: 1, "value": "Membrane-bound organelles" }] },
                  { "index": 1, "columns": [{ id: 0, "value": "Circular DNA" }, { id: 1, "value": "DNA forms chromosomes" }] },
                  { "index": 2, "columns": [{ id: 0, "value": "Small ribosomes" }, { id: 1, "value": "Larger ribosomes" }] },
                  { "index": 3, "columns": [{ id: 0, "value": "Anaerobic or aerobic metabolism" }, { id: 1, "value": "Aerobic metabolism" }] },
                  { "index": 4, "columns": [{ id: 0, "value": "No cytoskeleton" }, { id: 1, "value": "Cytoskeleton present" }] },
                  { "index": 5, "columns": [{ id: 0, "value": "Mainly unicellular" }, { id: 1, "value": "Mainly multicellular" }] },
                  { "index": 6, "columns": [{ id: 0, "value": "Very small" }, { id: 1, "value": "Larger cells" }] }
               ]
            },
         ],
         Chemistry: [
            {
               "index": 0,
               title: 'Chemistry 101',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": "", "value": "Chemistry basics.." }
               ]
            },
         ],
         Geology: [],
         Physics: []
      };
   }
   render() {
      console.log("props.cheatList = " + this.props.cheatList);
      let cheatData = this.state.Biology;
      switch (this.props.cheatList) {
         case 'Biology':
            cheatData = this.state.Biology;
            break;
         case 'Chemistry':
            cheatData = this.state.Chemistry;
            break;
         case 'Geology':
            cheatData = this.state.Geology;
            break;
         case 'Physics':
            cheatData = this.state.Physics;
            break;
         default:
            cheatData = this.state.Biology;
            break;
      }
      return (
         <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
               {cheatData.map((topic) => {
                  if (topic.type === 'NORMAL') {
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           <FlatList
                              data={topic.data}
                              renderItem={({ item }) =>
                                 <Text style={styles.myIndent}>
                                    {item.name && (
                                       <Text style={styles.namePromptItem}>{item.name}</Text>
                                    )}
                                    <Text style={styles.item}> {item.value}</Text>
                                 </Text>
                              }
                              keyExtractor={item => item.id}
                           />
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
                                          <Text>{header}</Text>
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
                                                <Text>{column.value}</Text>
                                             </View>
                                          )
                                       })}
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
      marginBottom: 20,
   },
   scrollView: {
      backgroundColor: 'rgb(250,250,250)',
      marginHorizontal: 20,
   },   
   myIndent:
   {
      marginLeft: 10,
   },
   namePrompt:
   {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'underline'
   },
   namePromptItem:
   {
      fontStyle: 'italic',
      textDecorationLine: 'underline'
   },
   item:
   {
      fontSize: 12,
      fontStyle: 'italic'
   }
});
