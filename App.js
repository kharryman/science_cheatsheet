import React from 'react';
import { Container, Header, GoButton, Input, Processing, Prompt } from './components';
//import { Content, Form, Label, Item } from 'react-native-base';
//import Dropdown from './components/Dropdown';
import Selector from './components/Selector';
import Cheatlist from './components/Cheatlist';
import { Button, Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import styled from 'styled-components/native';


class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         processing: false,
         headerTitle: this.props.title,
         cheatList: "Biology",
         listOpen: false
      };
      //this.press = this.press.bind(this);
   }

   setSubject(subject) {
      console.log("setSubject called, subject = " + subject);
      this.state.cheatList = subject;
      this.setState({ cheatList: subject });
   }

   render() {
      const listOpen = this.state.listOpen;
      return (
         <Container>
            <Image source={require('./images/beaker.jpg')} style={styles.backgroundImage} />
            {!listOpen && (
               <View style={{ flex: 1.0 }}>
                  <Header>Science Cheatsheet</Header>
                  <Prompt>Please select a subject:</Prompt>
                  <Selector callback={this.setSubject.bind(this)} />
                  <GoButton text="Go" callback={() => { this.press() }}>
                  </GoButton>
               </View >
            )}
            {
               listOpen && (
                  <View style={{ flex: 1 }}>
                     <Button onPress={() => { this.backUp() }} title="Back Up"></Button>
                     <Prompt>{this.state.cheatList}</Prompt>
                     <Cheatlist cheatList={this.state.cheatList}></Cheatlist>
                  </View>
               )
            }
         </Container >
      );
   }

   onChangeHandler(value) {
      console.log(`Selected value: ${value}`);
      //this.state.cheatList = value;
      //this.setState({cheatList: this.state.cheatList});
   }

   backUp() {
      this.state.listOpen = false;
      this.state.cheatList = 'Biology';
      //alert("Hello?");
      this.setState({ listOpen: false, cheatList: 'Biology' });
   }

   press() {
      console.log("press called, this.state.listOpen = " + this.state.listOpen);
      this.state.listOpen = true;
      //alert("Hello?");
      this.setState({ listOpen: true });
      /*this.setState(
         {
            processing: false,
            listOpen: !this.state.listOpen,
            headerTitle: this.props.title,
            cheatList: this.state.cheatList
   
         }
      );    
      */

   };
}

const styles = StyleSheet.create({
   backgroundImage: {
      flex: 1,
      resizeMode: "cover", // or 'stretch'
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left:-75,
      opacity: 0.1
   }
});

export default App;