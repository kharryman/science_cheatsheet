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
import helpers from '../helpers/helper_functions';

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
      biologyCheatlistData.data.forEach((subtopic) => {
         //subtopic.entries.sort(function (a, b) {
            //console.log("A TITLE = " + a.title + ", B TITLE = " + b.title);
         //   if (a.title && b.title) {
               //console.log("A & B TITLE EXIST!!!");
         //      if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1; }
         //      else if (a.title.toUpperCase() < b.title.toUpperCase()) { return 1; }
         //      else { return 0; }
         //   } else {
         //      return 0;
         //   }
         //});
         subtopic.entries.forEach((entry) => {
            //console.log(subtopic.itemName + ":" + entry.title);
         });
         if (subtopic.itemName === 'Cell Biology') {
            var orderedSubtopics = ["Vocabulary", "Vocabulary", "Vocabulary", "Applic­ation in Living Things", "Essential Knowledge", "Postulates of cell theory", "Big Ideas", "External Factors", "Cell Theory", "Cell Theory", "Cell sIZE", "The Endosy­mbiotic Theory", "Endosy­mbiont theory", "Why Should a Cell Program its Death?", "Thermodynamics", "Volume", "Storage and Energy", "Substrate Concen­tration", "Surface Area", "Surface Area to Volume Ratio", "Temperature", "pH", "Culturing microorganisms (aseptic techniques)", "Dehydration Synthesis", "Dehydr­ation Synthesis Applied to Amino Acids", "Dehydr­ation Synthesis Applied to Lipids", "Dehydr­ation Synthesis in Carboh­ydrates", "Cell types", "Animal Cells", "Prokaryotic Cells", "Prokar­yotic Cell Structure", "Parts of the Prokaryotic Cell", "Eukaryotic Cells", "Eukaryotic Cell Structure", "Exclusive Eukaryotic Features", "Prokaryotic vs. Eukaryotic Cells Checklist", "Eukaryotic and Prokar­yotic", "Prokaryotic vs. Eukaryotic Cells", "Prokar­yotic vs. Eukaryotic Cells", "Bacteria Cells", "Consumers", "Specialised Cells", "Cell Composition(Carbs, Proteins, Lipids)", "Cell differentiation in Plant cells", "Anatomy of a Cell", "Organelles", "Cell Components", "Cell Diagram", "Core", "Nucleic Acids", "Nucleus", "Ribosomes", "Lysosomes", "Endoplasmic Reticulum", "Smooth & Rough ER", "Golgi", "Golgi apparatus or complex", "Mitochondria", "Mitochondria Diagram", "Chloroplast", "Cytoskeleton", "Cytoskeleton", "Cellular Wall", "Membranes", "Structure of Cellular Membrane", "Cellular Membrane", "Cellular Membrane", "Cell Membranes are Semipe­rmeable", "Plasma Membrane Structure", "Cell Division", "Motor Neurone", "Lipid Layer", "Structure of Phosph­olipid", "Phospholipid Bilayer", "Amino Acids", "Proteins", "Proteins", "Structural Protein(collagen)", "Antibodies", "ASP and GLU", "Carbohydrate  (sacc­har­ides)", "Carbohydrates", "Carbohydrates", "Carboh­ydrates", "Disaccharide", "Polysaccharides", "Polysa­cch­arides", "Types of Fat", "Monosaturated Fat", "Saturated Fats", "Polysaturated Fat", "Cholesterol", "Lipids", "Phosph­olipid", "Energy Review", "Energy(the ability to do work)", "Enzyme Concen­tration", "Enzymes", "Factors that Affect Enzyme Structure", "Tonic Solutions", "Compet­itive Inhibitors", "Noncom­pet­itive Inhibitors", "Compet­itive vs. Noncom­pet­itive Inhibitors", "producers", "Properties of Enzymes", "The G Things", "Cell Cycle", "The Cell Cycle", "Cell Cycle Image", "Cell Cycle Control", "Activators", "Passive Transport", "Active Transport", "Active Transport", "Active Transport (endocytosis)", "Active Transport (exocytosis)", "Passive Transport (facil­itated diffusion)", "Passive Transport (ion channels)", "Passive Transport (osmosis)", "Passive Transport(diffusion)", "Passive vs. Active Transport Diagram", "Passive and Active Transport", "Passive and Active Transport", "Overview of Cell Signaling", "Overview of Cellular Respir­ation", "Membrane Transport", "Adenosine tripho­sphate(ATP)", "Chemical Energy and ATP", "ATP Powers Cellular Work", "Allosteric Regulation", "Altern­ative Pathways of Carbon Fixation", "Apoptosis", "Apoptosis Cell Death (ways cells die)", "Apoptotic Pathways and Signals that Trigger them", "Apostosis", "C. Elegans (Apopt­osis)", "Aquaporins(Water transport)", "Calvin Cycle", "Cellular Processes", "Cell Communication", "Cell Respiration", "Cellular Respiration", "Cellular Respiration", "Cell Signaling", "Cell Response to Signal", "Steps of Cell Signaling", "Steps of Cell Signaling Image", "Steps of Cell Signaling Image", "EpiPen (Cell Signaling)", "Types of Cell Communication", "Chemical Signals and Cells (Phagocytes)", "Intermediate Step", "Chemical Rxt(water reactions)", "Citric Acid Cycle", "Cleavage Furrow", "Cytokenesis", "Cytokinesis", "Types of Endocy­tosis", "Endocytosis & Exocytosis", "Endocy­tosis Diagram", "Exergonic vs. Endergonic Reactions", "Exocytosis & Endocy­tosis", "Endomembrane system", "Endome­mbrane System", "Facilitated Diffusion", "Function of the Cell Membrane", "Function of the Cell Membrane", "Functions of Cell Structures", "Functions of Membrane Proteins", "Hydrolysis", "Hydrolysis Applied to Amino Acids", "Hydrolysis Applied to Lipids", "Hydrolysis in Carboh­ydrates", "Fluid Mosaic Model", "Osmoregulation", "Osmore­gul­ation (param­ecium)", "Osmosis", "G Protein Steps", "G1 Checkpoint", "G2 Checkpoint", "Glycosis", "Humoral Response", "Induced Fit", "Inflam­matory Response", "Ion Channel Steps", "Steps of Calvin Cycle", "Steps of Light Reactions", "Light Reactions", "Phosph­ory­lation", "Phosph­ory­lation", "REDOX Reactions", "REDOX Reactions Image", "S (synthesis) Checkpoint", "Secondary Messengers", "Signal Transd­uction & Response", "Signal Transd­uction Pathways Reception", "The Endome­mbrane System", "Metabolic Pathways", "Monosa­cch­aride (glucose ==> C6H12O6)", "Transd­uction Pathways", "Tyrosi­ne ­Kinase Steps", "Water Potential", "Water Potential", "Cancer", "Causes of Cancer", "Basic Types of Cancer", "Disrupt Cell Cycle and Trigger Cancer", "What Causes Uncont­rolled Cell Growth?", "Proto onc­ogenes", "Tumor ­Sup­pressor Genes", "What Causes Genetic Variation?", "Spindle Fibers", "Anaphase", "Internal Controls", "What is Meiosis", "Meiosis Diagram", "Meiosis Diagram", "Meiosis Image", "Stages of Meiosis", "Metaphase", "Mitosis", "Mitosis Definition", "Mitosis Image", "Mitosis Phases", "Prophase", "M (mitosis) Checkpoint", "Notes On Chromosomes", "Binary Fission", "Gene Theory", "Interphase", "Telophase", "Arguments Around Stem Cell Research", "Stem Cell Notes", "C3 vs. C4 vs. CAM plants", "Cloning Plants", "Fermentation", "Photosynthesis Overview", "Photos­ynt­hesis", "Plant Cells", "Plant Cells in Pure Water", "Plant Eukaryotic Cell Parts", "Plant vs. Animal Cell", "Pathways of Photos­ynt­hesis", "Plastids", "Transf­orm­ation of Energy(plants)", "Positive and Negative Feedback(Homeostasis)", "Preparing A Slide(Onion edition)", "Microscopes", "Free Energy and Equili­brium", "Hierarchy of Organi­zation", "Diffusion", "Diffusion", "How To Use A Light Microscope To View A Slide", "Jan Ingenhousz (1779)", "Jan van Helmont(1600s)", "John Woodward(late 1600s)", "Joseph Priestly(1771)", "Diabetes", "Fever", "Innate (nonsp­ecific) Immune System", "Ectotherms", "Endotherms", "Size and Metabolic Rate", "Formation of Macrom­ole­cules"];
            var orderedSubtopicsIndex = 0;
            var entriesCopy = [];
            for (var i = 0; i < subtopic.entries.length; i++) {
               //console.log("subtopic.entries[i] = " + JSON.stringify(subtopic.entries[i]));
               entriesCopy.push(subtopic.entries[i]);
            }
            //console.log("entriesCopy = " + JSON.stringify(entriesCopy));
            var foundIndex = -1;
            var newEntries = [];
            console.log(subtopic.itemName + " OLD ENTRIES LENGTH BEFORE = " + entriesCopy.length);
            for (var i = 0; i < subtopic.entries.length; i++) {
               //console.log("TITLE["+ i + "]=" + subtopic.entries[i].title.trim().toUpperCase().replace(/-/g,''));
               //helpers.sayHello();
               foundIndex = helpers.getIndex(entriesCopy, "title", orderedSubtopics[orderedSubtopicsIndex]);
               //console.log("foundIndex = " + foundIndex);
               if (foundIndex !== "FALSE") {
                  if (!entriesCopy[foundIndex]) {
                     console.log("entriesCopy[foundIndex] UNDEFINED!!!");
                  } else {
                     newEntries.push(entriesCopy[foundIndex]);
                     entriesCopy.splice(foundIndex, 1);
                  }
                  //console.log(subtopic.itemName + " OLD ENTRIES LENGTH NOW = " + entriesCopy.length);                  
               } else {
                  console.log("NOT FOUND: '" + orderedSubtopics[orderedSubtopicsIndex].trim().toUpperCase().replace(/-/g,'') + "'");
               }
               orderedSubtopicsIndex++;
               //console.log("TITLE:'" + subtopic.entries[i].title + "'");
            }
            console.log("NEW ENTRIES!!! = " + JSON.stringify(newEntries));
            console.log("NEW entriesCopy.length = " + entriesCopy.length);
            //console.log("NEW ENTRIES = " + JSON.stringify(newEntries));
            console.log(subtopic.itemName + " OLD ENTRIES LENGTH = " + subtopic.entries.length + ", NEW ENTRIES LENGTH = " + newEntries.length);
            //var titlesHyphen = subtopic.entries.map((entry)=>{return entry.title}).filter((title)=>{
            //     return title.indexOf("-")>=0;
            //});
            //console.log("HYPHENATED ENTRIES COUNT = " + titlesHyphen.length + " titlesHyphen = " + titlesHyphen);
            //console.log("NEW ENTRIES = " + JSON.stringify(newEntries));
         }
      });

      this.BiologySubtopics = biologyCheatlistData.data.map((subtopic) => {
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