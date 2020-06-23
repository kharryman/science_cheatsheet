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
         topics: [
            {
               name: "Biology",
               data: [
                  {
                     index: 0,
                     itemName: "Cell Biology",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 1,
                           title: 'Cell Theory',
                           type: "NORMAL",
                           image: null,
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
                           image: null,
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
                           image: null,
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
                           image: null,
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
                        }
                     ]
                  },
                  {
                     index: 1,
                     itemName: "Developemnet",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'Homeostasis',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Life able to maintain stable internal environment - self regulation" }
                           ]
                        }
                     ]
                  },
                  {
                     index: 2,
                     itemName: "Evolution",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 3,
                     itemName: "Regenerative Biology and Stem Cells",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 4,
                     itemName: "Host-pathogen Interactions",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 5,
                     itemName: "Plant Biology",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 6,
                     itemName: "Systems Biology",
                     type: "Cell & Developement Biology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 7,
                     itemName: "Behavioral Ecology",
                     type: "Ecology, Behavior & Evolution",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 8,
                     itemName: "Ecology",
                     type: "Ecology, Behavior & Evolution",
                     entries: [
                        {
                           "index": 0,
                           title: 'Biosphere',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "The biosphere is the area around the Earth where life can exist within the lithos­phere, the atmosphere and the hydros­phe­re.The biosphere is a closed­(no­thing enters­/leaves except light energy), self-r­egu­lat­ed(­mai­ntains sustai­nable living conditions on it's own) system consisting of all life on Earth.The supply of resources for a living thing to surviv­e(w­ater, space and nutrients) is limited, thus it puts a limit on the number of indivi­duals of a certain species that can live." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Photosynthesis',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Photos­ynt­hesis is the process in which green plants convert light energy from the Sun into chemical energy­(su­gar­).The cell in the plant that does this process is called the chloro­plast and it contains a special, green chemical called chloro­phyll that capture the light energy and turn it, along with water from the soil and carbon dioxide from the air, into energy for the plant as well as oxygen­(O2­).The formula for this is transf­orm­ation is CO2 and H2O though light energy into C6H12O­6+O2." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Food Chain',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Food Chains illustrate who eats whom in an ecosys­tem.It also shows how energy passes through an ecosys­tem.All organisms contin­ually use and release energy to their enviro­nment, meaning that energy is contin­uously lost from all levels of the food chain.Food chains are rarely longer than 4 organisms as energy available decreases quickl­y.Only 10% of the energy that is gained by the first organism is passed on to the second organism, and so on." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Pyramid of Energy',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Illust­rates energy loss and transfer between trophic levels.Sp­ecies in the highest trophic levels have less energy available to them than the species near the bottom." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Water Cycle',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "The water cycle first starts off in the process of either evapor­ation or transp­ira­tio­n.E­vap­oration is the process where a liquid, in this case water, changes from a liquid state to a gaseous state.The gas then rises up and goes into the air.Tr­ans­pir­ation is where a plant absorbs water from the soil and as the water reaches the leaves, some of it evaporates and goes into the air.The cycle moves on through conden­sation which is where the water vapour gained through evapor­ation or transp­iration becomes cooler and turns back into a liquid.This liquid then falls to the earth as precip­ita­tio­n.P­rec­ipi­tation can be either snow, hail or rain.This precip­itation then collects on either the surface soil and then flows to the lakes and oceans as rivers or it can collect underg­round as ground­water." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Biotic and Abiotic Limiting Factors and Influences',
                           type: "TABLE_LIST",
                           image: null,
                           data: [
                              { "index": 0, "name": "Limiting factors", "value": "Any factors that limits the size of a population" },
                              { "index": 0, "name": "Antibiotic Limiting Factors", "value": "A non-living limiting factor­(ex­:access to water)" },
                              { "index": 0, "name": "Biotic Limiting Factor", "value": "A living limiting factor­(ex­:av­ail­ability of food)" },
                              { "index": 0, "name": "Abiotic Influences", "value": "Ability to surviv­e(l­ight, H2O, nutrients, O2, temper­ature, soil, acidity, salinity)" },
                              { "index": 0, "name": "Biotic Influences", "value": "Intera­ctions between specie­s(food, light, space, mates)" }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Biodiversity',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Biodiv­ersity is the variety of life found in an area.It is often measured by counting the number of species in a specific ecosystem." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Ex-situ and In-situ Conser­vation',
                           type: "TABLE_LIST",
                           image: null,
                           data: [
                              { "index": 0, "name": "Ex-situ Conser­vation", "value": "This conser­vation method is when we remove that species from their natural habita­t.This method is used when a specie's habitat is threatened or no longer exists or if the existing population is extremely small." },
                              { "index": 0, "name": "In-situ Conser­vation", "value": "This conser­vation method is focused on conserving the species in their natural habitat." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Effects of Acid Rain',
                           type: "TABLE_LIST",
                           image: null,
                           data: [
                              { "index": 0, "name": "Soil", "value": "Burn skin of Earthworm and increases the soil's acidit­y(l­owers the pH)" },
                              { "index": 0, "name": "Vegetation", "value": "Damages the waxy coating that protects leaves from infection and affects plants roots' ability to absorb nutrients" },
                              { "index": 0, "name": "Water", "value": "Makes bodies of water more acidic­(lowers the pH)" },
                              { "index": 0, "name": "Aquatic Animals", "value": "Dissolves the shells of shellfish" }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Stewardship',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "A good steward is someone who manages any sort of resource wisely.An enviro­nmental steward means taking care of our natural resources to ensure that they are used in sustai­nable way for current and future genera­tio­ns.This includes: \n1)Re­ducing the amount of resources we use, \n2)Re­using items instead of throwing them away, \n3)Re­cycling used items" }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Soli Types',
                           type: "TABLE_LIST",
                           image: null,
                           data: [
                              { "index": 0, "name": "Sandy Soil", "value": "Large sand particles, permit root growth and air pockets, permit water to drain away quickly, carrying essential nutrients away from roots, less fertile than loam soil" },
                              { "index": 0, "name": "Loam Soil", "value": "Has rock particles, has pockets that hold air or water, lots of humus, drains well without drying out, most fertile soil" },
                              { "index": 0, "name": "Clay Soil", "value": "Small particles packed tightly together, plant roots do not grow well, block root growth and trap water, making soil wet, least fertile soil" }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'The 3 Spheres',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": "Lithosphere", "value": "Is the Earth's solid, rocky outer shell.C­on­sists of rocks and minerals that make up the mountains, oceans and all of Earth's solid landsc­ape.Ranges from about 50 to 150 km in thickness down from the surface." },
                              { "index": 0, "name": "Atmosphere", "value": "Is the layer of gases that surround the Earth.This layer is critical to life on Earth as it moderates surface temper­atures by acting like a blanket, it blocks some incoming solar radiation, such as ultrav­iol­et(UV) rays, and prevents excessive heating during the day and cooling during the night." },
                              { "index": 0, "name": "Hydrosphere", "value": "Is all of the water on Earth(both solid, liquid and gas form).It includes; Clouds, ground­water, ice, lakes and oceans" }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Cellular Respiration',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Cellular Respir­ation is a process in which the plant uses the stored energy­(sugar) and O2 produced in photos­ynt­hesis and it converts and releases it as CO2, H2O and energy.The plant is able to use this released energy for cellular functions such as; movement, growth and reprod­uct­ion.The formula for this equation is C6H12O6+O2 into CO2, H20 and energy.Both plants and animals undergo cellular respir­ation. \n**NOTE: The Cellular Respir­ation formula is the exact reverse of the Photos­ynt­hesis formula." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Food Webs',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Food webs are more accurate, but still an incomplete way to illustrate intera­ctions between organisms in an ecosys­tem.They are useful to figure what may happen when a species is removed from or added to an ecosys­tem.The arrows indicate the direction of energy flow in both a food web and food chain.Food webs are highly complex, with consumers feeding on many different species." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Pyramid of Numbers',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Shows the number of indivi­duals of all popula­tions in each trophic level." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Nitrogen Cycle',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "The first step for the nitrogen cycle is for special bacteria in the soil to convert nitrogen from the atmosphere into forms that plants can use (nitrates, nitrites and ammoni­a).This process is called nitrogen fixati­on.The plants absorb the nitrat­es/­nit­rites through their roots and use it.When they die or, if they get eaten, the consumer dies, the nitrogen is released back into the atmosp­her­e.The bacteria get the new nitrogen and the cycle continues." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Extinction',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Extinction is a natural process, which involves an entire species to be wiped out.Only catast­rophic events can cause extinc­tion, such as an asteroid impact or a massive volcano erupti­on.T­hese are very rare so the number of species that are extinct is low." },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Invasi­ve,­Endemic and Indicator Species',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "An invasive species is a species which is not native to the ecosystem and causes harm to that ecosys­tem.An endemic species is a species whose habitat is restricted to a particular area or space on the globe.An indicator species is sensitive to slight enviro­­nm­ental changes and therefore serves as an early warning indicator for things such as global warming or chemical changes." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Oil Spills',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Happen when an oil tanker or rig leaks and releases oil into the body of water.S­ince oil is toxic and is slow to break down, takes a long time to clean up.Harms wildlife that lives in ocean and surrou­nding land." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Natural Resources',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Natural Resour­ces­(wood, water, etc) are gained from ecosystems that have an abundance of that certain resource." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Urban Forests',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "They are forests growing in old buildings that are either natural or man-de­sig­ned.They:\n1)Remove excess carbon from the atmosphere.\n2)Reduce energy consum­ption by providing shade.\n3Help slow run-off of water from rainstorms.\n4)Pr­otect soils from erosion and filter chemicals from water and air.\n5)Pr­ovide a tourist attraction and are enjoyable to look at and be around." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Biotic Factors',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Biotic factors are the living components of an ecosys­tem.They include; organisms, organism remains (decom­posing remains) and waste produces (feces­).A­biotic factors are the nonliving components of an ecosys­­te­m.They include; air, minerals, sun, temper­­ature, water, wind, etc." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Abiotic vs. Biotic',
                           type: "TABLE",
                           image: null,
                           headers: ["Abioitic", "Biotic"],
                           data: [
                              { "index": 0, "columns": [{ "value": "Non-living" }, { "value": "Living" }] },
                              { "index": 0, "columns": [{ "value": "Have never lived" }, { "value": "Have lived before" }] },
                              { "index": 0, "columns": [{ "value": "Are not dead" }, { "value": "Can be dead" }] },
                              { "index": 0, "columns": [{ "value": "Are not parts of living things" }, { "value": "Can be parts of living things" }] }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Sustainability',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Most ecosystems are self-r­egu­lating or sustai­nab­le.S­us­tai­nab­ility is the ability to maintain natural ecological condit­ion­swi­thout interr­uption, weakening or loss of value." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Producers and Consumers',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "A producer is a name given to an organism that photos­ynt­hes­ize.These organisms are critical to ecosystems as most energy that organisms other than produc­ers­(co­nsu­mers) comes from produc­ers.A consumer is a name given to an organism that cannot photos­ynt­hesize and therefore must eat other organisms (producers or other consumers) to survive." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Energies',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": "Thermal Energy", "value": "Keeps the Earth's surface warm, but it cannot provide organisms with the energy they need to grow and function." },
                              { "index": 0, "name": "Light Energy", "value": "Can be used by some organisms, but it cannot be stored and is not available in the night." },
                              { "index": 0, "name": "Chemical Energy", "value": "Is used by all organisms to perform functions, including movement, growth and reprod­uction." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Niches',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Every species uniquely interacts with other species and with it's own enviro­nme­nt.T­hese intera­ctions define the ecological job or niche of a species.A species niche includ­es;what it eats, what eats it and how it behaves." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Trophic Levels',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Trophic Level or feeding level describes the position of an organism along a food chain." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Pyramid of Biomass',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Shows the total mass of organisms in each trophic level(­nor­mally producers have the greatest biomass)." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Basics of Bioche­mical Cycles',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "The particles that make up matter cannot be created nor destroyed, only cycled.This means that all water and nutrients must be produced or obtained from chemicals that already exist in the enviro­nme­nt.This happens in a series of cycles in which chemicals are contin­uously consumed, rearra­nged, stored and used.Since these cycles involve organisms (bio) and occur as Earth (geo) processes, they are called biogeo­che­mical cycles.These cycles are the Water, Carbon and Nitrogen cycles." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'The Carbon Cycle',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Carbon moves through both the biotic and abiotic parts of an ecosys­tem.The first step in this process is when plants pull carbon from the atmosphere through photos­ynt­hes­is.T­hese plants are then eaten by consum­ers.The plant's carbon is passed to the consumer when it eats the plant.The consumer, after time, dies and gets decomp­ose­d.The carbon is released back into the atmosp­her­e.A­nother way for carbon to get released is through cellular respir­ation." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Nitrogen Cycle Example',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": null }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Biomes',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "A biome is a large region defined by climat­e(p­rec­ipi­tation and temper­ature) with a specific set of abioti­c/b­iotic features." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Level of Risk',
                           type: "TABLE_LIST",
                           image: null,
                           data: [
                              { "index": 0, "name": "Extinct", "value": "No longer exists on Earth" },
                              { "index": 0, "name": "Extirpated", "value": "No longer exists in a specific area" },
                              { "index": 0, "name": "Endangered", "value": "May become extirpated or extinct" },
                              { "index": 0, "name": "Threatened", "value": "May become endangered" },
                              { "index": 0, "name": "Special Concern", "value": "May become threatened or endangered" },
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Keystone Species',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "A keystone species is a species that when added or removed from an ecosystem leads to major changes in abundance or occurrence of at least one other species." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Acid Rain',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "Emissions and pollutants coming from factories and cars are combining with water vapour to form acid rain.We can reduce acid rain by putting limits on emissions and install special scrubbers, which cleanse the emissions to remove most of the nitrogen and sulphur, which causes acid rain." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Protecting Endangered Species',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": "The plans to protect endangered species involves;\n1)Go­ver­nments, industries and commun­ities working together\n2)Id­ent­ifying the specific causes of the problem.\n3)De­vel­oping specific plans to fix the problems.\n)4Mo­nit­oring conditions to check that the actions taken are working." }
                           ]
                        },
                        {
                           "index": 0,
                           title: 'Soil Profile',
                           type: "NORMAL",
                           image: null,
                           data: [
                              { "index": 0, "name": null, "value": null }
                           ]
                        }
                     ]
                  },
                  {
                     index: 9,
                     itemName: "Global Environmental Cahange",
                     type: "Ecology, Behavior & Evolution",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 10,
                     itemName: "Organismal Evolution",
                     type: "Ecology, Behavior & Evolution",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 11,
                     itemName: "Marine Biology",
                     type: "Ecology, Behavior & Evolution",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 12,
                     itemName: "Cancer Biology",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 13,
                     itemName: "Gene Regulaion",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 14,
                     itemName: "Immunology",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 15,
                     itemName: "Microbiology",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 16,
                     itemName: "RNA Biology",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 17,
                     itemName: "Quantitative Biology",
                     type: "Molecular",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 18,
                     itemName: "Cellular/Molecular Biology",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 19,
                     itemName: "Neural Genetics",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 20,
                     itemName: "Developmental Neurobiology",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 21,
                     itemName: "Neural Circuits",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 22,
                     itemName: "Computational Neurobiology",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 23,
                     itemName: "Systems Neurobiology",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  },
                  {
                     index: 24,
                     itemName: "Neural Plasticity",
                     type: "Neurobiology",
                     entries: [
                        {
                           "index": 0,
                           title: 'TEMPLATE',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "TEMPLATE" },
                           ]
                        }
                     ]
                  }
               ]
            },
            {
               name: "Chemistry",
               data: [
                  {
                     index: 0,
                     itemName: "Chemistry 101",
                     type: "Chemistry Basics",
                     entries: [
                        {
                           "index": 0,
                           title: 'Chemistry Basics',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "Chemistry is about atoms..." }
                           ]
                        }
                     ]
                  }
               ]
            },
            {
               name: "Geology",
               data: [
                  {
                     index: 0,
                     itemName: "Geology 101",
                     type: "Geology Basics",
                     entries: [
                        {
                           "index": 0,
                           title: 'Geology Basics',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "Geology is about the earth..." }
                           ]
                        }
                     ]
                  }
               ]
            },
            {
               name: "Physics",
               data: [
                  {
                     index: 0,
                     itemName: "Physics 101",
                     type: "Physics Basics",
                     entries: [
                        {
                           "index": 0,
                           title: 'Physics Basics',
                           type: "NORMAL",
                           data: [
                              { "index": 0, "name": null, "value": "Physics is about the how things work..." }
                           ]
                        }
                     ]
                  }
               ]
            },
         ]
      };
   }
   render() {
      console.log("props.cheatList = " + this.props.cheatList);
      let cheatData = this.state.topics[0].data[0];
      let selectedTopic = this.props.cheatList;
      let selectedSubtopic = this.props.subtopic;
      let selectedSubtopicFolder = selectedSubtopic.replace(/ /g,'_');
      let filteredTopic = this.state.topics.filter((topic) => {
         return topic.name === selectedTopic;
      });
      if (filteredTopic) {
         let filteredSubtopic = filteredTopic[0].data.filter((subtopic) => {
            return subtopic.itemName === selectedSubtopic;
         });
         if (filteredSubtopic) {
            cheatData = filteredSubtopic[0].entries;
         }
      }
      console.log("cheatData = " + JSON.stringify(cheatData));
      return (
         <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
               {cheatData.map((topic) => {
                  if (topic.type === 'NORMAL') {
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           <FlatList
                              data={topic.data}
                              renderItem={({ item }) => {
                                 {(item.name || item.value) && (
                                    <Text style={styles.myIndent}>
                                       {item.name && (
                                          <Text style={styles.namePromptItem}>{item.name}</Text>
                                       )}
                                       {item.value && (
                                          <Text style={styles.item}>{item.value}</Text>
                                       )}
                                    </Text>
                                 )}
                              }}
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
                  } else if (topic.type === 'TABLE_LIST') {
                     return (
                        <View>
                           <Text style={styles.namePrompt}>{topic.title}</Text>
                           <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                              {topic.data.map((dataItem) => {
                                 return (
                                    <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', alignSelf: 'stretch', flexDirection: 'row' }}>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text>{dataItem.name}</Text>
                                       </View>
                                       <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'gray', flex: 1, alignSelf: 'stretch' }}>
                                          <Text>{dataItem.value}</Text>
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
