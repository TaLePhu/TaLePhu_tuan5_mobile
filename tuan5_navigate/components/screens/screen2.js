import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';

const data = [
      {width: 84, height: 84, backgroundColor: '#C5F1FB', id:1},
      {width: 84, height: 84, backgroundColor: '#F30D0D', id:2},
      {width: 84, height: 84, backgroundColor: '#000000', id:3},
      {width: 84, height: 84, backgroundColor: '#234896', id:4},
  ];



export default function Screen2({ route}) {
   const navigation = useNavigation();

  const listColor = data.map(item => (
  <TouchableOpacity
    key={item.id}
    style={{width: item.width, height: item.height, backgroundColor: item.backgroundColor, margin:5}}
  />
))


  return(
    <View style={{flex: 1, margin:5}}>
      <View style={{flex: 2, flexDirection: 'row', backgroundColor: 'white'}}>
        <Image
          source={require('../../assets/img/vs_black.png')}
          style={{width: 120, height: 120}}
          resizeMode="contain"

        />
        <Text>
          Điện Thoại Vsmart Joy 3 {'\n'}
          Hàng chính hãng
        </Text>
      </View>

      <View style={{flex: 5, backgroundColor: '#C4C4C4', alignItems: 'center'}}>
        <Text>Chọn một màu bên dưới:</Text>
          <View style={{ alignItems: 'center', justifyContent: 'space-between'}}>
          {listColor}
        </View>
          
        <TouchableOpacity
          style={{backgroundColor:'#1952E294', 
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300, height:45
                  }}
          onPress={() => {navigation.goBack()}}
        >
          Xong
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
})
