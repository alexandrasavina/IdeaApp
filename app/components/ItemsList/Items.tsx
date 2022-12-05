import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ItemsHeaderModel } from '../../models/ItemsHeaderModel';
import { LevelDotsEnum } from '../../models/LevelDotsEnum';
import ProgressDots from '../../shared/elements/ProgressDots';

export function Items(data: ItemsHeaderModel) {
  const items = [...data.items];
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <View style={styles.ItemHolder} key={index}>
            <View style={styles.ItemsBlock}>
              <Text style={styles.Label}>{item.label}</Text>
              <View>
                <ProgressDots level={item.level} />              
                {item.level ? <Text style={styles.LevelDotsText}>{LevelDotsEnum[item.level]}</Text> : <Text></Text>}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },  
  ItemHolder: {
    minHeight: 71,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  ItemsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 19,
  },
  Label: {
    flex: 0.9,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    lineHeight: 19.07,
    color: '#2A6076',
  },
  LevelDotsText: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    lineHeight: 16.34,
    color: '#CECECE',
    textAlign: 'right',
    paddingTop: 2,
  },
});
