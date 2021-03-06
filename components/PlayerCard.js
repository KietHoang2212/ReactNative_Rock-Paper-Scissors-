import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function PlayerCard(props) {
    return(
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>{props.playerName}</Text>
            <Image source={{uri: props.choice.uri}} resizeMode='contain' style={styles.choiceImage} />
            <Text style={styles.choiceCardTitle}>{props.choice.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    choiceContainer: { 
      flex: 1, 
      alignItems: 'center', 
    }, 

    choiceDescription: { 
      fontSize: 25, 
      color: '#250902', 
      fontWeight: 'bold', 
      textDecorationLine: 'underline',
    }, 

    choiceCardTitle: { 
      fontSize: 30, 
      color: '#250902' 
    },
     
    choiceImage: { 
      width: 150, 
      height: 150, 
      padding: 10, 
    },
  });
