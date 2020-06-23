import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";

//CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
const BiologySubtopics = [

   { index: 0, itemName: "Cell Biology", type: "Cell & Developement Biology" },
   { index: 1, itemName: "Developemnet", type: "Cell & Developement Biology" },
   { index: 2, itemName: "Evolution", type: "Cell & Developement Biology" },
   { index: 3, itemName: "Regenerative Biology and Stem Cells", type: "Cell & Developement Biology" },
   { index: 4, itemName: "Host-pathogen Interactions", type: "Cell & Developement Biology" },
   { index: 5, itemName: "Plant Biology", type: "Cell & Developement Biology" },
   { index: 6, itemName: "Systems Biology", type: "Cell & Developement Biology" },
   { index: 7, itemName: "Behavioral Ecology", type: "Ecology, Behavior & Evolution" },
   { index: 8, itemName: "Ecology", type: "Ecology, Behavior & Evolution" },
   { index: 9, itemName: "Global Environmental Cahange", type: "Ecology, Behavior & Evolution" },
   { index: 10, itemName: "Organismal Evolution", type: "Ecology, Behavior & Evolution" },
   { index: 11, itemName: "Marine Biology", type: "Ecology, Behavior & Evolution" },
   { index: 12, itemName: "Cancer Biology", type: "Molecular" },
   { index: 13, itemName: "Gene Regulaion", type: "Molecular" },
   { index: 14, itemName: "Immunology", type: "Molecular" },
   { index: 15, itemName: "Microbiology", type: "Molecular" },
   { index: 16, itemName: "RNA Biology", type: "Molecular" },
   { index: 17, itemName: "Quantitative Biology", type: "Molecular" },
   { index: 18, itemName: "Cellular - Molecular Biology", type: "Neurobiology" },
   { index: 19, itemName: "Neural Genetics", type: "Neurobiology" },
   { index: 20, itemName: "Developmental Neurobiology", type: "Neurobiology" },
   { index: 21, itemName: "Neural Circuits", type: "Neurobiology" },
   { index: 22, itemName: "Computational Neurobiology", type: "Neurobiology" },
   { index: 23, itemName: "Systems Neurobiology", type: "Neurobiology" },
   { index: 24, itemName: "Neural Plasticity", type: "Neurobiology" }
   /*
   {index:0, name:"Animals with Differing Names"},
   {index:0, name:"Antimicrobial Chemotherapy"},
   {index:0, name:"Biochemistry"},
   {index:0, name:"Biochemical Pathways Template"},
   {index:0, name:"Cells And Cell Membranes"},
   {index:0, name:"Cell Communication and Cell Cycle"},
   {index:0, name:"Cell Energetics"},
   {index:0, name:"Cell Processes"},   
   {index:0, name:"Cell Structure and Function"},  
   {index:0, name:"Cell Theory"},
   {index:0, name:"Cell Transport"},
   {index:0, name:"Chemistry of Life"},
   {index:0, name:"Chromosomal Basis of Hereditary"},
   {index:0, name:"DNA"},
   {index:0, name:"DNA Structure and Replication"},   
   {index:0, name:"Ecology and Animal Behavior"},
   {index:0, name:"Gene Expression and Regulation"},
   {index:0, name:"Genetics"},
   {index:0, name:"Genetics Fundamentals"},
   {index:0, name:"Hereditary"},
   {index:0, name:"Homesostasis"},
   {index:0, name:"HS Cells and Energy"},
   {index:0, name:"Malaria"},
   {index:0, name:"Meiosis"},
   {index:0, name:"Metabolism"},
   {index:0, name:"Mitosis"},
   {index:0, name:"Osmosis & Water Potential"},
   {index:0, name:"Photosynthesis & Cellular Respiration"},
   {index:0, name:"Plant Physiology"},
   {index:0, name:"Polymers and Carbs"},
   {index:0, name:"Protozoa"},
   {index:0, name:"Science Ecology"},
   {index:0, name:"Specialized Plate Media"},
   {index:0, name:"Tetanus"},
   */
];

//CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
const ChemistrySubtopics = [
];
const ComputersSubtopics = [
];
const EcologySubtopics = [
];
const GeologySubtopics = [
];
const MeteorologySubtopics = [
];
const OceanographySubtopics = [
];
const PhysicsSubtopics = [
];

export default class SubSelector extends Component {

   state = {
      selectedcat: "",
      category: BiologySubtopics
   };

   constructor(props) {
      super(props);
      console.log("SubSelector constructor called.");
      this.state = {
         selectedcat: this.props.topic,
         category: BiologySubtopics
      }
      for(var i=0;i<BiologySubtopics.length;i++){
         console.log(BiologySubtopics[i].itemName.replace(/ /g,"_").toUpperCase());
      }
   }


   async onValueChangeCat(value) {
      console.log("onValueChangeCat called, value = " + value);
      this.setState({ selectedcat: value });
      this.props.callback(value);
   }

   render() {
      console.log("props.topic = " + this.props.topic);      
      //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
      switch (this.props.topic) {
         case 'Biology':
            this.state.category = BiologySubtopics;
            break;
         case 'Chemistry':
            this.state.category = ChemistrySubtopics;
            break;
         case 'Computers':
            this.state.category = ComputersSubtopics;
            break;
         case 'Ecology':
            this.state.category = EcologySubtopics;
            break;
         case 'Geology':
            this.state.category = GeologySubtopics;
            break;
         case 'Meteorology':
            this.state.category = MeteorologySubtopics;
            break;
         case 'Oceanography':
            this.state.category = OceanographySubtopics;
            break;
         case 'Physics':
            this.state.category = PhysicsSubtopics;
            break;
         default:
            this.state.category = BiologySubtopics;
            break;
      }
      return (
         <View style={styles.viewStyle}>
            <View style={{ flex: 1.0, fontSize: 14 }}>
               <Picker
                  itemStyle={styles.itemStyle}
                  mode="dropdown"
                  style={styles.pickerStyle}
                  selectedValue={this.state.selectedcat}
                  onValueChange={this.onValueChangeCat.bind(this)}
               >
                  {this.state.category.map((item, index) => (
                     <Picker.Item
                        color="#0087F0"
                        label={item.itemName}
                        value={item.itemName}
                        index={index}
                     />
                  ))}
               </Picker>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   viewStyle: {
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      width: "92%",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: 40
   },
   itemStyle: {
      fontSize: 10,
      fontFamily: "Roboto-Regular",
      color: "#007aff",
      textAlign: 'right'
   },
   pickerStyle: {
      width: "100%",
      height: 40,
      color: "#007aff",
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      textAlign: 'right'
   },
   textStyle: {
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      textAlign: 'right'
   }
});