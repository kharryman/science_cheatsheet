set sources[0]=CELL_BIOLOGY
set sources[1]=DEVELOPEMNET
set sources[2]=EVOLUTION
set sources[3]=REGENERATIVE_BIOLOGY_AND_STEM_CELLS
set sources[4]=HOST-PATHOGEN_INTERACTIONS
set sources[5]=PLANT_BIOLOGY
set sources[6]=SYSTEMS_BIOLOGY
set sources[7]=BEHAVIORAL_ECOLOGY
set sources[8]=ECOLOGY
set sources[9]=GLOBAL_ENVIRONMENTAL_CHANGE
set sources[10]=ORGANISMAL_EVOLUTION
set sources[11]=MARINE_BIOLOGY
set sources[12]=CANCER_BIOLOGY
set sources[13]=GENE_REGULAION
set sources[14]=IMMUNOLOGY
set sources[15]=MICROBIOLOGY
set sources[16]=RNA_BIOLOGY
set sources[17]=QUANTITATIVE_BIOLOGY
set sources[18]=CELLULAR_-_MOLECULAR_BIOLOGY
set sources[19]=NEURAL_GENETICS
set sources[20]=DEVELOPMENTAL_NEUROBIOLOGY
set sources[21]=NEURAL_CIRCUITS
set sources[22]=COMPUTATIONAL_NEUROBIOLOGY
set sources[23]=SYSTEMS_NEUROBIOLOGY
set sources[24]=NEURAL_PLASTICITY
for /F "tokens=2 delims==" %%s in ('set sources[') do mkdir images\%%s