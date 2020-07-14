import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
//BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, PHYSICS
import biologyCheatlistData from '../helpers/biology_cheatlist_data';
import chemistryCheatlistData from '../helpers/chemistry_cheatlist_data';
import computersCheatlistData from '../helpers/computers_cheatlist_data';
import ecologyCheatlistData from '../helpers/ecology_cheatlist_data';
import oceanographyCheatlistData from '../helpers/oceanography_cheatlist_data';
import geologyCheatlistData from '../helpers/geology_cheatlist_data';
import meteorologyCheatlistData from '../helpers/meteorology_cheatlist_data';
import physicsCheatlistData from '../helpers/physics_cheatlist_data';

export default class SubSelector extends Component {

   //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
   BiologySubtopics = [];
   ChemistrySubtopics = [];
   ComputersSubtopics = [];
   EcologySubtopics = [];
   GeologySubtopics = [];
   MeteorologySubtopics = [];
   OceanographySubtopics = [];
   PhysicsSubtopics = [];

   constructor(props) {
      super(props);
      console.log("SubSelector constructor called.");
      var index = 0;
      //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
      //console.log("biologyCheatlistData = " + JSON.stringify(biologyCheatlistData));
      this.BiologySubtopics = biologyCheatlistData.data.map((subtopic) => {
         subtopic.entries.sort(function (a, b) {
            //console.log("A TITLE = " + a.title + ", B TITLE = " + b.title);
            if (a.title && b.title) {
               //console.log("A & B TITLE EXIST!!!");
               if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1; }
               else if (a.title.toUpperCase() < b.title.toUpperCase()) { return 1; }
               else { return 0; }
            } else {
               return 0;
            }
         });
         if (subtopic.itemName === 'Basic') {
            var countOrderedList = 0;
            var orderedList = ["Major Themes of Biology", "Matter Basics", "Matter & Units of Matter", "Matter Definitions", "Vocabulary", "Biological Factors", "5 Charac­ter­istics of Living Things", "Basic Properties of Life", "Characteristics of Life", "Properties of Life", "Biology and Life", "Properties of Water", "Carbon", "Theory, Hypoth­esis, Law", "Emergent Properties", "Science vs. Psudoscience vs. Non-Science", "Scientific Method", "Scientific Method", "Reasoning", "CORMMSS(Scientific method)", "Important Scientists", "Using and cleaning the microscope", "Microscope", "Microscope Parts", "Hierarchies of Life", "Plants, Animals and Bacteria", "Domains and Kingdoms", "Five Kingdoms of Living Things", "Divisions of Life", "Ecosystems", "Asexual Reproduction", "Asexual vs. Sexual", "Stages of Sexual Reproduction", "Population Profiles", "Fertil­iza­tion: Pros and Cons", "Fetal Development", "Embryo Develop (first 8 wks)", "Stages of Hormone Signaling", "Air Pollution", "Global Warming", "Cancer (from mutations in cell cycle)", "Biological Molecules", "", "Levels of Biological Organization", "Inorganic v. Organic Compounds", "Organic Chemistry", "Organic Molecules", "Bonding", "Bonding Properties", "Bonds", "Table of bonds", "Covalent Bonds", "Polar vs. Non Polar Covalent Bonds", "Mineral Ions", "pH", "Lipids", "Lipids", "Protein Structure", "Protein Synthesis", "Proteins", "Proteins", "Proteins", "Structures of a Protein", "Other Proteins", "Functions of a Protein", "Polymers and Monomers", "Osmosis", "Test for Glucose and Starch", "", "Agriculture", "Adaptations of leaves", "Aerobic Respir­ation in plants", "Chloroplasts", "Internal Structure of a Leaf", "Photos­ynt­hesis", "Specialized structures of plant cells", "photos­ynt­hesis vs. cell respir­ation", "Experiment to measure the rate of p/s", "Anatomy of a Cell", "Cell Diagram", "Cell Composition(Carbs, Proteins, Lipids)", "Cell Division", "Cell Respiration", "Cell Theory", "Cellular Membrane", "Phosph­olipid", "Cellular Processes", "Cellular Respiration", "Cytoskeleton", "Lipid Layer", "Nucleic Acids", "Mitochondria Diagram", "Nucleus", "Smooth & Rough ER", "Golgi", "Function of the Cell Membrane", "Function of the Cell Membrane", "Endomembrane system", "Endome­mbrane System", "Ribosomes", "Lysosomes", "Eukaryotic and Prokar­yotic", "Eukaryotic Cell Structure", "Prokar­yotic Cell Structure", "Exclusive Eukaryotic Features", "Functions of Cell Structures", "Adenosine tripho­sphate(ATP)", "Chemical Energy and ATP", "Aquaporins(Water transport)", "Chemical Rxt(water reactions)", "Exocytosis & Endocy­tosis", "Types of Endocy­tosis", "Motor Neurone", "The Respiration System and Ventillation", "Digestive System", "DNA", "DNA Replication", "Meiosis", "Mitosis", "Water/­Lip­id-­Soluble Hormone Signaling", "Pathogens", "Fermentation", "Enyzme", "Enzymes", "Phylog­enetics"];
            for (var i = 0; i < subtopic.entries.length; i++) {
               for (var j = 0; j < subtopic.entries.length; j++) {
                  if(subtopic.entries[j].title === orderedList[countOrderedList]){
                     console.log(JSON.stringify(subtopic.entries[i]));
                     countOrderedList++;
                     break;
                  }
               }
            }
         }
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.ChemistrySubtopics = chemistryCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.ComputerSubtopics = computersCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.EcologySubtopics = ecologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.GeologySubtopics = geologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.MeteorologySubtopics = meteorologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.OceanographySubtopics = oceanographyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.PhysicsSubtopics = physicsCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
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


      this.state = {
         selectedcat: this.props.topic,
         category: this.BiologySubtopics
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
            this.state.category = this.BiologySubtopics;
            break;
         case 'Chemistry':
            this.state.category = this.ChemistrySubtopics;
            break;
         case 'Computers':
            this.state.category = this.ComputersSubtopics;
            break;
         case 'Ecology':
            this.state.category = this.EcologySubtopics;
            break;
         case 'Geology':
            this.state.category = this.GeologySubtopics;
            break;
         case 'Meteorology':
            this.state.category = this.MeteorologySubtopics;
            break;
         case 'Oceanography':
            this.state.category = this.OceanographySubtopics;
            break;
         case 'Physics':
            this.state.category = this.PhysicsSubtopics;
            break;
         default:
            this.state.category = this.BiologySubtopics;
            break;
      }
      return (
         <View style={styles.viewStyle}>
            <View style={{ flex: 1.0, fontSize: 14 }}>
               <Picker
                  itemStyle={styles.itemStyle}
                  mode="dropdown"
                  style={styles.pickerStyle}
                  selectedValue={this.props.subtopic}
                  onValueChange={this.onValueChangeCat.bind(this)}
               >
                  {this.state.category.map((item, index) => (
                     <Picker.Item
                        color="#0087F0"
                        label={item.itemName + " ->" + item.type}
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