//
/*CHEATSHEETS DONE:
1) AP Bio Unit 1: Chemistry of Life Cheat Sheet
2) Chromosomal Basis of Heredity Cheat Sheet
3) Principles of Antimicrobial Chemotherapy Cheat Sheet
4) Homeostasis Cheat Sheet
5) Science Ecology Review Cheat Sheet
*/
//BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, PHYSICS
const biology_cheatlist_data = {
   name: "Biology",
   data: [
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
         index: 12,
         itemName: "Cancer Biology",
         type: "Molecular",
         entries: [
            {
               "index": 0,
               title: 'Antibiotics',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Subances produced by a microo­rganism that (at low concen­tra­tion) inhibit or kill other microo­rga­nisms\nTalking about chemical produce by living organisms that can kill or inhibit\nBASI­CAL­LY: life destroys life" }
               ]
            },
            {
               "index": 0,
               title: 'Chemotherapy',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "The use of drugs to treat a disease" }
               ]
            },
            {
               "index": 0,
               title: 'Antimicrobial Drugs',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Any substance of natural, synthetic or semi-s­ynt­hetic origin that kills or inhibits the growth of a microo­rganism\nCauses little or no host damage" }
               ]
            },
            {
               "index": 0,
               title: 'Selection of Antimi­crobial Agents',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Requires knowing the following:\n- The organism's identity\n- The organism's suscep­tib­ility to a particular agent\n- The site of infection\n- Patient's factors\n- The safety of the agent\n- The cost of therapy" }]
            },
            {
               "index": 0,
               title: 'Selective Toxicity',
               type: "TABLE_LIST",
               data: [
                  { "index": 0, "name": "Definition", "value": "Ability to kill or injure an invading microo­rganism without harming the cells of the host" },
                  { "index": 0, "name": "LD50", "value": "Lethal dose at 50%; should be high" },
                  { "index": 0, "name": "MIC", "value": "Minimal inhibitory concen­tra­tion; should be low; the lowest concen­tration of antibiotic that INHIBITS bacterial growth; lowest concen­tration that will stop the growth of bacteria" },
                  { "index": 0, "name": "MBC", "value": "Minimal bacter­icidal concen­tra­tion; should be; minimum concen­tration of antibiotic that KILLS the bacteria" },
               ]
            },
            {
               "index": 0,
               title: 'Mechanism of Selective Targeting',
               type: "NORMAL",
               data: [
                  { "index": 0, "name": null, "value": "Sele­ctive Toxici­ty: goal of antimi­crobial drug therapy\nExam­ple: inhibit pathways or targets critical for pathogen survival at drug concen­tra­tions lower than those required to affect host pathways" }
               ]
            },
            {
               "index": 0,
               title: 'Types of Pathways',
               type: "TABLE_LIST",
               data: [
                  { "index": 0, "name": "Unique Pathways", "value": "Also known as Cell Wall Synthesis Inhibi­tors; drug that inhibits the cell wall synthesis in microbes; the walls will lyse and the bacteria will die" },
                  { "index": 0, "name": "Selective Pathways", "value": "Also known as protein synthesis inhibitors" },
                  { "index": 0, "name": "Common Pathways", "value": "Also known as metabo­lites" }
               ]
            },
            {
               "index": 0,
               title: 'Types of Antibiotic Agents',
               type: "TABLE",
               headers: ["Type", "Example"],
               data: [
                  { "index": 0, "columns": ["Cause inhibition of cell wall synthesis", "Beta-L­actamas"] },
                  { "index": 0, "columns": ["Alter the function of the cytopl­asmic membrane; destroy cytopl­asmic membranes", "Isoniazid"] },
                  { "index": 0, "columns": ["Inhibit protein synthesis", "Macrolides"] },
                  { "index": 0, "columns": ["Inhibit nucleic acid synthesis", "Quinolones"] },
                  { "index": 0, "columns": ["Inhibit metabolite activity", "Sulfon­amides"] }
               ]
            },
            {
               "index": 0,
               title: 'Chemot­her­apeutic Spectra of Antiba­cterial Agents',
               type: "TABLE_LIST",
               data: [
                  { "index": 0, "name": "Narrow Spectrum", "value": "Prefer­ent­ially active against single or limited group of microo­rga­nisms\nTx eg: isoniazid" },
                  { "index": 0, "name": "Extended Spectrum", "value": "Effective against gram-p­ositive and SOME gram negative bacteria\nTx eg: ampicillin" },
                  { "index": 0, "name": "Broad Spectrum", "value": "Active against BOTH gram positive and gram negative bacteria\nTx eg: tetrac­ycline\nTx eg: chlora­mph­enicol" }
               ]
            },
            {
               "index": 0,
               title: 'Site of Action of Antiba­cterial Drug Classes',
               type: "TABLE_LIST",
               data: [
                  { "index": 0, "name": "Cell Wall Inhibi­tors", "value": "Prefer­ent­ially active against single or limited group of microo­rga­nisms\nTx eg: isoniazid" },
                  { "index": 0, "name": "DNA Synthesis & Integrity Inhibi­tors", "value": "Sulfon­amides\nTrimet­hoprim\nQuinolones" },
                  { "index": 0, "name": "Tran­scr­iption & Translation Inhibi­tors", "value": "Rifampin\nAxmino­gly­cosdes\nSpecti­nomycin\nTetrac­yclines\nMacrolides\nChlora­mph­enicol\nStrept­ogr­amins\nOxazol­idi­nones" },
               ]
            },
            {
               "index": 0,
               title: 'Site of Action of Antiba­cterial Drug Classes',
               type: "TABLE_LIST",
               data: [
                  { "index": 0, "name": "Cell Wall Inhibi­tors", "value": "Prefer­ent­ially active against single or limited group of microo­rga­nisms\nTx eg: isoniazid" },
                  { "index": 0, "name": "DNA Synthesis & Integrity Inhibi­tors", "value": "Sulfon­amides\nTrimet­hoprim\nQuinolones" },
                  { "index": 0, "name": "Tran­scr­iption & Translation Inhibi­tors", "value": "Rifampin\nAxmino­gly­cosdes\nSpecti­nomycin\nTetrac­yclines\nMacrolides\nChlora­mph­enicol\nStrept­ogr­amins\nOxazol­idi­nones" },
               ]
            },
            {
               "index": 0,
               title: 'Site of Action of Antiba­cterial Drug Classes',
               type: "NORMAL",
               image: "ANTIBACTERIAL_DRUG_CLASSES",
               data: [
                  { "index": 0, "name": null, "value": null }
               ]
            },
            {
               "index": 0,
               title: 'Types of Bacterial Infections',
               type: "NORMAL",
               image: "BACTERIAL_INFECTIONS",
               data: [
                  { "index": 0, "name": null, "value": null }
               ]
            },
            {
               "index": 0,
               title: 'Bacterialstatic Drugs',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "INHI­BIT the growth of pathogens without causing cell death\nEg: sulfon­amides (DNA synthesis & intercity inhibitor)\nEg: chlora­mph­enicol (trans­cri­ption & transl­ation inhibitor)\nBacter­ios­tatic effect­iveness relies on an intact host immune system to CLEAR THE NONGROWING (but viable) bacteria" }
               ]
            },
            {
               "index": 0,
               title: 'Bacteria Morphology',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Spirilla", "value": "Spiral shaped bacteria" },
                  { "index": 0, "name": "Bacilla", "value": "Rod shaped bacteria" },
                  { "index": 0, "name": "Cocci", "value": "Sperical shaped bacteria" },
                  { "index": 0, "name": "Diplo-", "value": "Pair" },
                  { "index": 0, "name": "Staphylo-", "value": "Clusters" },
                  { "index": 0, "name": "Strepto-", "value": "Chain" }
               ]
            },
            {
               "index": 0,
               title: 'Gram POSTIVE Bacteria',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Looks violet or dark blue in gram staining\nRetains the crystal violet stain\nSingle layered membrane -- it lacks the second outer phosph­olipid bilayer\nThick layer of peptid­oglycan -- only this forms the cell wall\nEasier to treat with antibi­otics because it only has one phosph­olipid bilayer" }
               ]
            },
            {
               "index": 0,
               title: 'Gram NEGATIVE Bacteria',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Defi­nit­ion: bacteria which resist decolo­riz­ation with an acid-a­lcohol mixture during the acid-fast stain procedure\nIt retains the initial dye (carbo­fuc­hsin)\nAcid-fast bacteria (mycob­acteria and some of the related actino­myc­etes) appear red" }
               ]
            },
            {
               "index": 0,
               title: 'Acid-Fast Bacteria',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Don't retain crystal violet dye from gram staining\nThey are pink or red colored\nThin peptid­oglycan wall\nTwo phosph­olipid bilayers (two membranes)\nConsist of outer membrane and thin peptid­oglycan wall as cell wall\nThe cell wall is thinner than gram positive\nThis is harder to treat with antibi­otics because it has two phosph­olipid bilayers" }
               ]
            },
            {
               "index": 0,
               title: 'Medically Important Microo­rga­nisms',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Gram Positive Cocci\nGram Positive Bacilli\nGram Positive Cocci\nGram Negative Bacilli\nAnaerobe Organisms\nSpiroc­hetesMycoplasma\nChlamydia\nOther" }
               ]
            },
            {
               "index": 0,
               title: 'Reasons of Using Single Drug to Treat a Patient and Not Combinations of Antimicrobrial Drugs',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "1. Reduces the possib­ility of superi­nfe­ction\n2. Reduces the emergence of resistant organisms\n3. Minimizes toxicity" }
               ]
            },
            {
               "index": 0,
               title: 'Combinations of Antimicrobrial Drugs',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Advantage:", "value": "Synergism\nEg: beta-l­actams and aminog­lyc­osides" },
                  { "index": 0, "name": "Disadvantage:", "value": "Drug antagonism\nEg: combining bacter­ios­tatic drug with bacter­icidal drug\nEg: giving a patient tetrac­ycline with penicillin or cephal­osp­orins" },
                  { "index": 0, "name": "BASICALLY:", "value": "Don't combine bacter­ios­tatic drugs with bacter­icidal drugs" }
               ]
            },
            {
               "index": 0,
               title: 'Prophylactic Antibiotics',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "- Use of antibi­otics for prevention instead of treatment of infection\n- May cause resistance and superi­nfe­ction\n- Use is limited" }
               ]
            },
            {
               "index": 0,
               title: 'Compli­cations of Antibiotic Therapy',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "1. Hypers­ens­itivity\n2. Direct toxicity\n3. Superi­nfe­ction" }
               ]
            },
            {
               "index": 0,
               title: 'Antimi­crobial Resistance',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Defi­nit­ion: relative or complete lack of effect of antimi­crobial against a previously suscep­tible microbe\nIncrease in MIC (remember MIC is lowest concen­tration needed to inhibit bacterial growth)\nMay be innate (an escape from antibiotic effect)\nOR it may be acquired" }
               ]
            },
            {
               "index": 0,
               title: 'Result of Acquired Antibiotic Resistance',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "1. Sponta­neous, random chromo­somal mutations. The mutations are due to change in either a structural protein receptor for an antibiotic or a protein involved in drug transport\n2. Extrac­hro­mosomal transfer of drug-r­esi­stant genes\n2a. Tran­sfo­rma­tion: transfer of naked DNA between cells of same species\n2b. Tran­sdu­ction through R plasmi­ds: R plasmids are a sexual transfer of plasmid DNA in a bacteria virus between bacteria of the same species\n2c. Conj­uga­tion: the passage of gene from bacteria to bacteria via direct contact through a sex plus or bridge. Conjug­ation occurs primarily in GRAM NEGATIVE BACILLI. It is the principal mechanism of acquired resistant among entero­bac­teria\n2d. Tran­spo­sit­ion: occurs as a result of movement or \"­jumping or transp­oso­ns\" (stretches of DNA containing insertion sequences at each end) from plasmid to plasmid or from plasmid to chromosome and back" }
               ]
            },
            {
               "index": 0,
               title: 'Mechanisms of Antimi­crobial Resistance',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "1. Reduced entry of antibiotic into pathogen\n2. Enhanced export of antibiotic by pathogen efflux pumps\n3. release of microbial enzymes that destroy the antibiotic\n4. Altera­tions of microbial enzymes that are required to transform products to the effective moieties\n4. Altera­tions of target proteins\n5. Develo­pment of altern­ative bioche­mical pathways to those inhibited by the antibiotic" }
               ]
            },
            {
               "index": 0,
               title: 'Factors that Promote Antimi­crobial Resistance',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "1. Exposure to sub-op­timal levels of antimi­crobial\n2. Exposure to microbes carrying resistance genes" }
               ]
            },   
            {
               "index": 0,
               title: 'Inappr­opriate Antimi­crobial Use',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "- Prescr­iptions not taken correctly\n- Antibi­otics for viral infections (you don't give antibi­otics for viral infect­ions)\n- Antibi­otics sold without medical superv­ision\n- Spread of resistant microbes in hospitals due to lack of hygiene\n- Lack of quality control in manufa­cture of outdated antimi­crobial\n- Inadequate survei­llance of defective suscep­tib­ility assays\n- Poverty or way\n- Use of antibi­otics in foods" }
               ]
            },
            {
               "index": 0,
               title: 'Antibi­otics in Foods',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Antibi­otics are used in animal feeds and sprayed on plants to prevent infection and promote growth.\nMulti-drug resistant Salmo­nella typhi has been found in some people who eat beef fed antibi­otics" }
               ]
            },                  
            {
               "index": 0,
               title: 'MRSA \"­mer­-sa­h\"(Meth­ici­lli­n-R­esi­stant Staphy­loc­occus Aureus)',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Most frequent nosocomial (hospi­tal­-ac­quired) pathogen\nUsually resistant to several other antibi­otics" }
               ]
            },                              
         ]
      },
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
            },
            {
               "index": 4,
               title: 'Proteins',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Proteins are the doers of the cell and are made up of amino acids linked together\n1. Proteins carry messages around the cell and let messages through the membrane\n2. 40% of the protein in the body is coll­agen which is a protein that streng­thens the connective tissue in our skin, bones, ligaments, and tendons\n3. Hemo­glo­bin is a protein that allows red blood cells to transport oxygen" }
               ]
            },
            {
               "index": 4,
               title: 'ASP and GLU',
               type: "NORMAL",
               image: "ASP_AND_GLU",
               data: [
                  { "index": 0, "name": null, "value": null }
               ]
            },
            {
               "index": 4,
               title: 'Hydrolysis Applied to Amino Acids',
               type: "NORMAL",
               image: "HYDROLYSIS_IN_PROTEINS",
               data: [
                  { "index": 0, "name": null, "value": "There are two reasons to break down proteins:\n1. When you eat proteins (cheese, meat) it is broken down and digested\n2. When a protein is not functi­onal, it is broken down and it's parts reused" }
               ]
            },
            {
               "index": 4,
               title: 'Amino Acids',
               type: "NORMAL",
               image: "AMINO_ACIDS",
               data: [
                  { "index": 0, "name": null, "value": "Amino acids are the building blocks of proteins.\nThere are 20 different kinds of amino acids.\nThey have the same basic structure except for the bottom (repre­sented by and \"­R\").\nAmino acids have shorter names that are three letters of the whole name:\n  Ex: ASP--> aspartate, GLU--> glutamic" }
               ]
            },
            {
               "index": 4,
               title: 'Dehydr­ation Synthesis Applied to Amino Acids',
               type: "NORMAL",
               image: "AMINO_ACIDS_DEHYDRATION",
               data: [
                  { "index": 0, "name": null, "value": "Amino acids bond to make proteins with dehydr­ation synthesis\nProteins can be from very short to thousands of amino acids long\nThe protein hemoglobin (carries oxygen in red blood cells) has 146 amino acids" }
               ]
            }
         ]
      },
      {
         index: 3,
         itemName: "Cellular - Molecular Biology",
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
         index: 1,
         itemName: "Development",
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
            },
            {
               "index": 0,
               title: 'Homeostasis Nervous System',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": "Nervous System", "value": "Rapid response to stimuli via electrical signals" },
                  { "index": 0, "name": "Endocrine System", "value": "Long-term response using chemical signals (hormones)" }
               ]
            },
            {
               "index": 0,
               title: 'Feedback Mechanisms',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Negative Feedback", "value": "Primary mechanism of homeos­tasis. Used to produce opposite effect of the change and bring back to homeos­tasis." },
                  { "index": 0, "name": "Positive Feedback", "value": "Increases the effects of change produced by enviro­nmental stimulus. Does not bring back to homeos­tasis." },
                  { "index": 0, "name": "Thermal Regulation", "value": "Conduc­tion, Convec­tion, Radiation, Evapor­ation" }
               ]
            },
            {
               "index": 0,
               title: 'Thermalregulation',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Heat Stress", "value": "1)Monitor thermo­rec­eptors of peripheral nervous system detect increased temp\n2)Coor­din­ate hypoth­alamus signals CNS via motor nerves to sweat glands\n3)Regu­late sweat glands initiate sweating, blood vessels dilate" },
                  { "index": 0, "name": "Cold Stres", "value": "1)Moni­tor thermo­rec­eptors signal hypoth­alamus using sensory neurons\n2)Coor­din­ate hypoth­alamus sends message via motor neurons\n3)Regu­late arterioles and smooth muscle of skin contract, captures heat, skeletal muscles contract- shivering" }
               ]
            },
            {
               "index": 0,
               title: 'Osmoregulation',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": "Osmosis", "value": "Water from high concentration to low concentration" },
                  { "index": 0, "name": "Osmoregulation", "value": "regulating osmotic pressure of bodily fluids and cells, management of bodies water and solute content" },
                  { "index": 0, "name": "Excretion", "value": "Compos­ition of bodily fluids. regulation of blood pH, volume, and pressure. Excretion of metabolic waste." }
               ]
            },
            {
               "index": 0,
               title: 'Nitrogenous Waste',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": "Ammonia", "value": "Released when liver breaks down proteins - by deamin­ation. Very soluble and toxic. Must be diluted w/ H2O" },
                  { "index": 0, "name": "Urea", "value": "Product of Ammonia and CO2. Conversion occurs in liver. Low toxicity." },
                  { "index": 0, "name": "Uric Acid", "value": "product of nucleic acid breakdown. Released through liver metabo­lism. Non toxic and insoluble in H2O" }
               ]
            },
            {
               "index": 0,
               title: 'Chi-Square',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "((O-E)­^2)/E\nDegrees of Freedom: n-1 (number of variants -1)\nCritical Values: 95% certainty (0.05)\nif the number is higher than the critical value, REJECT the null hypothesis"}
               ]
            },
            {
               "index": 0,
               title: 'Surface Tension',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "measure of how difficult to stretc­h/break the surface\ninterface H bonds with molecules on surface and below the surface\ncauses water to bead"}
               ]
            },  
            {
               "index": 0,
               title: 'Water is the Solvent of Life',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "solution: homoge­neous mixture of two or more substances\nsolvent: dissolving agent\nsolute: substance that is dissolved\naqueous solution: water is solvent"}
               ]
            },
            {
               "index": 0,
               title: 'Nucleic Acids Structure',
               type: "TABLE",
               headers:["Monomer - Nucleo­tide:", "DNA:", "RNA:"],
               image: null,
               data: [
                  { "index": 0, "columns":["sugar (ribose, deoxyr­ibose)", "deoxyr­ibose", "ribose"]},
                  { "index": 0, "columns":["nitrogen base (pyrim­idine (C,T,U and one ring) and purine (A,G and two rings)", "A, T, G, C", "A, U, G, C"]},
                  { "index": 0, "columns":["phosphate", "double strand", "single strand"]}
               ]
            },
            {
               "index": 0,
               title: 'Protein Structure',
               type: "NORMAL",
               image: "PROTEIN_STRUCTURE",
               data: [
                  { "index": 0, "name":null, "value":null}
               ]
            },
            {
               "index": 0,
               title: 'Properties of Water',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name":null, "value":"cohesive behavior\nresists changes in temper­ature\nexpands when it freezes\nversatile solvent\npolar, covalent\nH+ and O-"}
               ]
            },
            {
               "index": 0,
               title: 'Hydrogen Bonding',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name":null, "value":"absorb heat to break\nrelease heat to form"}
               ]
            },         
            {
               "index": 0,
               title: 'Hydrop­hobic vs. Hydrop­hilic',
               type: "TABLE",
               headers: ["Hydrop­hobic:", "Hydrop­hilic:"],
               image: null,
               data: [
                  { "index": 0, "columns": ["do not have affinity to water", "has affinity for water"]},
                  { "index": 0, "columns": ["non-ionic, non-polar repel water", "even if substance does not dissolve (cotton)"]}
               ]
            }, 
            {
               "index": 0,
               title: 'Peptide Bonds',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "carbonyl adjacent to amino\nformed by dehydr­ation\nN-terminus (amino group)\nC-terminus (carboxyl group)\nformed by dehydr­ation"}
               ]
            },  
            {
               "index": 0,
               title: 'Primary Structure',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "unique sequence of amino acids\nDNA -> RNA -> protein\nLysozyme (129 amino acids, inherited)"}
               ]
            },
            {
               "index": 0,
               title: 'Secondary Structure',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "coils and folds\nresult of hydrogen bonding\nonly atoms in backbone are involved\nα helix and β pleated sheets"}
               ]
            },
            {
               "index": 0,
               title: 'Lipids Structure',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "diverse non-polar, hydrop­hobic molecules (insol­uble)\nhydroc­arbons\nglycerol and fatty acids"}
               ]
            },
            {
               "index": 0,
               title: 'Cohesion',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "cohesion held together by hydrogen bonds\nplants: upward water transport\nadhesion: water to other types of molecules (plant wall)"}
               ]
            },
            {
               "index": 0,
               title: 'Density',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "ice floats: hydrogen bonds make water less dense in solid state\nwater is densest at -4 C"}
               ]
            },   
            {
               "index": 0,
               title: 'Acids and Bases',
               type: "TABLE",
               headers: ["Acids:", "Bases:"],
               image: null,
               data: [
                  { "index": 0, "columns": ["increase the hydrogen ion concen­tration of a solution", "reduces hydrogen ion concen­tration"]},
                  { "index": 0, "columns": ["lower ph", "higher ph"]}
               ]
            },
            {
               "index": 0,
               title: 'Amino Acid Structure',
               type: "NORMAL",
               image: "AMINO_ACID_STRUCTURE",
               data: [
                  { "index": 0, "columns": ["increase the hydrogen ion concen­tration of a solution", "reduces hydrogen ion concen­tration"]},
                  { "index": 0, "columns": ["lower ph", "higher ph"]}
               ]
            },
            {
               "index": 0,
               title: 'Tertiary Structure',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name":null, "value": "intera­ctions of side chains (R groups)\nhydrop­hobic intera­ctions\ndisulfide bridges\nhydrogen bonds\nionic bonds"}
               ]
            },
            {
               "index": 0,
               title: 'Quaternary Structure',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name":null, "value": "overall protein structure\naggreg­ation of two or more polype­ptide chains\nprotein confor­mation (inter­actions respon­sible for 2' and 3', physical and chemical condit­ions)\ndenatu­ration: unfolding of protein structure"}
               ]
            },            
            {
               "index": 0,
               title: 'Saturated fat vsn Unsaturated fat',
               type: "NORMAL",
               headers: ["Saturated fat:", "Unsaturated fat:"],
               image: null,
               data: [
                  { "index": 0, "columns":["no double bonds", "double bond"]},
                  { "index": 0, "columns":["max number of hydrogens", "tail kinks at double bond"]},
                  { "index": 0, "columns":["solid at room temp", "liquid at room temp"]},
                  { "index": 0, "columns":["animal fats (bacon, grease, lard, butter)", "plant fats (corn, peanut, olive oil)"]}
               ]
            },                                    
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
               image: "FOOD_CHAIN",
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
               image: "WATER_CYCLE",
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
               image: "FOOD_WEBS",
               data: [
                  { "index": 0, "name": null, "value": "Food webs are more accurate, but still an incomplete way to illustrate intera­ctions between organisms in an ecosys­tem.They are useful to figure what may happen when a species is removed from or added to an ecosys­tem.The arrows indicate the direction of energy flow in both a food web and food chain.Food webs are highly complex, with consumers feeding on many different species." },
               ]
            },
            {
               "index": 0,
               title: 'Pyramid of Numbers',
               type: "NORMAL",
               image: "PYRAMID_NUMBERS",
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
               image: "NITROGEN_CYCLE",
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
               image: "SOIL_PROFILE",
               data: [
                  { "index": 0, "name": null, "value": null }
               ]
            },
            {
               "index": 0,
               title: 'Population Ecology',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "biotic­/ab­iotic factorsresponse: acclimate, regulate, conform, migrate, torpor, etc.\nfundam­ental niche=­range of factor­s/r­eso­urces a species could use\nrealized niche=­actual use of potential enviro­nment\nuniform disper­sio­n=e­venly spaced\nrandom disper­sio­n=u­npr­edi­ctable spacing\nclumped disper­sio­n=a­ggr­egate in patches" }
               ]
            },
            {
               "index": 0,
               title: 'Logistic Growth',
               type: "NORMAL",
               image: "LOGISTIC_GROWTH",
               data: [
                  { "index": 0, "name": null, "value": "K-sele­cti­on=­sen­sitive to population density\nr-sele­cti­on=­max­imizes r (repro­ductive rate)\ndensity indepe­ndent= pop. density does not affect birth/­death rate\ndensity dependent= "},
                  { "index": 0, "type":"MATH", "name": null, "value": "c=\\pm\\sqrt{a^2 + b^2}" },
                  { "index": 0, "type": null, "value": "pop. density" },
                  { "index": 0, "type":"MATH", "name": null, "value": "\\rightarrow\\downarrow" },
                  { "index": 0, "type": null, "value": "birth rate/" },
                  { "index": 0, "type":"MATH", "name": null, "value": "\\uparrow" },
                  { "index": 0, "type": null, "value": "death rate" }
               ]
            },            
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
         index: 2,
         itemName: "Genetics",
         type: "Cell & Developement Biology",
         entries: [
            {
               "index": 0,
               title: 'Genetics',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Genetics is the study of genes, heredity, and variation in living organisms." },
               ]
            },
            {
               "index": 0,
               title: 'Deoxyr­ibo­nucleic acid',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Is a molecule that encodes the genetic instru­ctions used in the develo­pment and functi­oning of all known living organisms and many viruses.\nDNA is a nucleic acid; alongside proteins and carboh­ydr­ates, nucleic acids compose the three major macrom­ole­cules essential for all known forms of life." }
               ]
            },
            {
               "index": 0,
               title: 'Ribonu­cleic acid',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Ribonu­cleic acid (RNA) is a polymeric molecule. It's implicated in a varied sort of biological roles in coding, decoding, regula­tion, and expression of genes.\nDNA and RNA are nucleic acids, and, along with proteins, constitute the three major macrom­ole­cules essential for all known forms of life.\nLike DNA, RNA is assembled as a chain of nucleo­tides, but unlike DNA it is more often found in nature as a single­-strand folded unto itself, rather than a paired double­-st­rand." }
               ]
            },
            {
               "index": 0,
               title: 'Zygote',
               type: "NORMAL",
               image: "ZYGOTE",
               data: [
                  { "index": 0, "name": null, "value": "A zygote is the initial cell formed when two gamete cells are joined by means of sexual reprod­uction.\nIn single­-celled organisms, the zygote divides to produce offspring, usually through mitosis, the process of cell division." }
               ]
            },
            {
               "index": 0,
               title: 'Genotype',
               type: "NORMAL",
               image: "GENOTYPE",
               data: [
                  { "index": 0, "name": null, "value": "The genotype is the genetic makeup of a cell, an organism, or an individual usually with reference to a specific charac­ter­istic under consid­era­tion." }
               ]
            },
            {
               "index": 0,
               title: 'Ploidy',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Ploidy is the number of sets of chromo­somes in the nucleus of a cell." }
               ]
            },
            {
               "index": 0,
               title: 'Phenotype',
               type: "NORMAL",
               image: "PHENOTYPE",
               data: [
                  { "index": 0, "name": null, "value": "A phenotype (from Greek phainein, meaning \"to show\", and typos, meaning \"­typ­e\") is the composite of an organism's observable charac­ter­istics or traits, such as its morpho­logy, develo­pment, bioche­mical or physio­logical proper­ties, phenology, behavior, and products of behavior (such as a bird's nest)." }
               ]
            },
            {
               "index": 0,
               title: 'Allele',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "An allele, or allel, is one of a number of altern­ative forms of the same gene or same genetic locus." }
               ]
            },
            {
               "index": 0,
               title: 'Homozygous & Hetero­zygous',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Zygosity is the degree of similarity of the alleles for a trait in an organism.\nA cell is said to be homozygous for a particular gene when identical alleles of the gene are present on both homologous chromo­somes.\nA diploid organism is hetero­zygous at a gene locus when its cells contain two different alleles of a gene." }
               ]
            },
            {
               "index": 0,
               title: 'Meosis',
               type: "NORMAL",
               image: "MEOSIS",
               data: [
                  { "index": 0, "name": null, "value": "Meiosis is a special type of cell division necessary for sexual reprod­uction which occurs or has occurred in all eukary­otes, including animals, plants and fungi, including both multi-­celled and single­-celled organisms." }
               ]
            },
            {
               "index": 0,
               title: 'Mitosis',
               type: "NORMAL",
               image: "MITOSIS",
               data: [
                  { "index": 0, "name": null, "value": "Mitosis is the process, in the cell cycle, by which the chromo­somes in the cell nucleus are separated into two identical sets of chromo­somes, each in its own nucleus." }
               ]
            },
            {
               "index": 0,
               title: 'Gregory Medel(1860s Father of Genetics',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "His jobs", "value": "Austrian monk, teacher, scientist, and gardener" },
                  { "index": 0, "name": "Used peas because", "value": "easy to grow, relatively short time period per generation (3 months), self-p­oll­ina­ting, and created purebreds" },
                  { "index": 0, "name": "Tree-breeding", "value": "7 simple traits without genetic variation" }
               ]
            },
            {
               "index": 0,
               title: 'Meiosis I',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Prophase I(2N)", "value": "Chromo­somes condense, homologous pairs align, syna­psis (precise alignment, ensires 1 copy of each gene in a daughter cell). Synapsed set called a tetrad (4 chroma­tids). Then, cros­sin­g-o­ver occurs (exchange of chromosome segments between pairs of homol­ogous chromo­somes, or nonsister chroma­tids). Chia­sma forms, visible structure from crossover. X and Y chromo­somes pair and synapse thru terminal ends (PARs)." },
                  { "index": 0, "name": "Metaphase I(2N)", "value": "Nucleoli and envelope broken down, centroiles w/ spinde entern­uclear area, kinet­echore microt­ubules attach to sister kineto­chores, tetrads align at metaphase plate." },
                  { "index": 0, "name": "Anaphase I(2N-N)", "value": "Chromo­somes of tetrad separate (now dyad­s). Sister chromatids remain attached at centro­meres. DNA content is halved." },
                  { "index": 0, "name": "Telophase I(N)", "value": "Spindles dissas­emble, cytoki­nesis forms two hapl­oid cells." }
               ]
            },
            {
               "index": 0,
               title: 'Meiosis',
               type: "NORMAL",
               image: "MEIOSIS",
               data: [
                  { "index": 0, "name": null, "value": null }
               ]
            },
            {
               "index": 0,
               title: 'Meiosis II',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": "Prophase II", "value": "Chromo­somes condense and spindles form, kineto­chores attach to tubules.." },
                  { "index": 0, "name": "Metaphase II", "value": "Alignment on metaphase plate." },
                  { "index": 0, "name": "Anaphase II", "value": "Centro­meres separate, daughter chromo­somes (still haploid) pulled to opposite sides.." },
                  { "index": 0, "name": "Telophase II", "value": "Chromo­somes decond­ense, nuclear envelope forms, cytoki­nesis. Four haploid cells produced, each with one chromosome from each homologous pair." }
               ]
            },
            {
               "index": 0,
               title: 'Meiosis Results',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": "*", "value": " Generates haploid nuclei with half the number of chromo­somes found in diploid cell. (2N -> N) Diploid number restored in fertil­iza­tion." },
                  { "index": 0, "name": "*", "value": "Inde­pendent assortment of genes paternal and maternal chromo­somes have an equal chance of aligning on one side of metaphase plate." },
                  { "index": 0, "name": "*", "value": "Number of chromosome arrang­ements is 2n-1, n= # chromo­somes pairs (haploid number)." },
                  { "index": 0, "name": "*", "value": "Number of chromosome combin­ations resulting from indep­endent assort­ment is 2n (number of different gamet­es)." },
                  { "index": 0, "name": "*", "value": "Number of kinds of genotypes is 3n." }
               ]
            },
            {
               "index": 0,
               title: 'Ploidy',
               type: "TABLE_LIST",
               image: null,
               data: [
                  { "index": 0, "name": "Haploid", "value": "ONE copy of each chromo­some. (N)" },
                  { "index": 0, "name": "Diploid", "value": "TWO copies (homol­ogues) of each chromo­some. (2N)" },
                  { "index": 0, "name": "Homologous Pairs", "value": "Same gene loci, structure, and pair during meiosis." }
               ]
            },
            {
               "index": 0,
               title: 'Genes(Allele)',
               type: "NORMAL",
               image: null,
               data: [
                  { "index": 0, "name": null, "value": "Altern­ative forms of a single gene on the same locus that determine the same trait, but can produce different phenot­ypes." }
               ]
            }
         ]
      },
      {
         index: 13,
         itemName: "Gene Regulation",
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
         index: 9,
         itemName: "Global Environmental Change",
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
      }
   ]
};
export default biology_cheatlist_data;