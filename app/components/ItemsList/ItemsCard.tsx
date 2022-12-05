import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Items} from './Items';
import {ItemsHeader} from './ItemsHeader';
import {ItemsHeaderModel} from '../../models/ItemsHeaderModel';

export function ItemsCard(props: ItemsHeaderModel) {
  const itemData = props;

  const [open, setOpen] = useState(false);

  const itemsHeaderData = {...itemData, open};

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <ItemsHeader {...itemsHeaderData} />
      </TouchableOpacity>
      {open ? <Items {...itemData} /> : <></>}
    </View>
  );
}
