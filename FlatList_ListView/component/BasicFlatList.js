import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View ,Image} from 'react-native';
import flatListData from '../flatListData';


export default function BasicFlatList() {
    return (
      <View style={styles.container}>
        <FlatList
          data={flatListData}
          renderItem={
            ({ item, index }) => {
              return (
               <View style={{flex:1,backgroundColor:index%2 == 0 ?'white' :'tomato'}}>
                <Image source={{uri:item.photo}}></Image>
                 <Text>{item.name}</Text>
                 <Text>{item.email}</Text>
               </View>
              )
            }
          }
        >
  
        </FlatList>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem:{
      color:TouchableWithoutFeedback,
      padding: 10
    }
  });