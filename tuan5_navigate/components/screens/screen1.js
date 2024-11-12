import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen({navigation, route}) {
  return (
    <View style = {styles.container}>
      <View style = {styles.view1}>
        <Image
          source={require('../../assets/img/vs_blue.png')}
          style={{width: 300, height:360}}
        />
      </View>
      <Text style={{fontSize: 16, }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
        
          <Image
            source={require('../../assets/img/star.png')}
            style={{fontSize: 24}}
          />
          <Image
            source={require('../../assets/img/star.png')}
            style={{fontSize: 24}}
          />
          <Image
            source={require('../../assets/img/star.png')}
            style={{fontSize: 24}}
          />
          <Image
            source={require('../../assets/img/star.png')}
            style={{fontSize: 24}}
          />
          <Image
            source={require('../../assets/img/star.png')}
            style={{fontSize: 24}}
          />
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>1.790.000 đ</Text>
        <Text style={{fontSize: 15, color: 'grey', textDecorationLine: 'line-through'}}>1.790.000 đ</Text>

      </View>

      <View style={styles.view5}>
        <Text >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
         source={require('../../assets/img/Group 1.png')}
        />
      </View>

      <View style={styles.view6}>
        <TouchableOpacity style={styles.chooseBtn}
          onPress={()=> {navigation.navigate("Screen2", {
              colors: ['#C5F1FB', '#F30D0D', '#000000', '#234896'],
            });
          }}
        >
          <Text>4 MÀU-CHỌN MÀU</Text>
          <Image
            source={require('../../assets/img/Vector.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.view7}>
        <Button
          title="CHON MUA"
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20,
  },
  view5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  view6: {
    marginTop: 5,
    marginBottom: 5
  },
  chooseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  }
})


