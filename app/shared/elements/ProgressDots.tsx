import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LevelDotsEnum } from '../../models/LevelDotsEnum';
import { ProgressDotsModel } from '../../models/ProgressDotsModel';

const ProgressDots = (props: ProgressDotsModel) => {

  const { level } = props;

  const MAX_LEVELS_NUMBER = 3;

  return (
    <View style={styles.container}>
      {[...Array(MAX_LEVELS_NUMBER + 1).keys()]
        .slice(1)
        .map((currentLevel, index) => {
          return (
            <View 
             key={index} 
             style={[styles.progressDots,
               currentLevel <= level
                ? styles.backgroundBlueColor
                : styles.backgroundGreyColor,
             ]}/>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center',
    paddingTop: 3,
  },
  progressDots: {
    width: 13,
    height: 13,
    borderRadius: 15,
    margin: 2,
  },
  backgroundBlueColor: {
    backgroundColor: '#00A7A9',
  },
  backgroundGreyColor: {
    backgroundColor: '#E5E5E5',
  },
});

export default ProgressDots;
