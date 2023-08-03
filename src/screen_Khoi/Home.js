import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ItemPost from '../component_Khoi/ItemPost'
import ItemStory from '../component_Khoi/ItemStory'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={require("../image_Khoi/InsLogo_mini.png")}></Image>
        <TouchableOpacity>
          <Image source={require("../image_Khoi/messenger.png")}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView style={styles.storyView} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
          {
            data.map((item) => <ItemStory key={item.id} data={item} />)
          }
        </ScrollView>
        <View style={{ flex: 1 }}>
          {
            data.map((item) => <ItemPost key={item.id} data={item} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  headerView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54
  },
  storyView: {
    height: 98,
    borderColor: '#00000030',
    backgroundColor: '#fff'
  }

})

const data = [
  {
    id: '1',
    images: require('../Image_Dat/quocdat.jpg'),
    username: 'Quocdat_03'
  },
  {
    id: '2',
    images: require('../Image_Dat/dung1.jpg'),
    username: 'dungo_provip'
  },
  {
    id: '3',
    images: require('../Image_Dat/huy.jpg'),

    username: 'Huy_lo~'
  },
  {
    id: '4',
    images: require('../Image_Dat/hoang.jpg'),

    username: 'hoangdz_vippro'
  },
  {
    id: '5',
    images: require('../Image_Dat/hoang.jpg'),

    username: 'hoangdz_vip'
  },
  {
    id: '6',
    images: require('../Image_Dat/huy1.jpg'),

    username: 'Huy_lo~'
  },
  {
    id: '7',
    images: require('../Image_Dat/lam.png'),

    username: 'Lam_xeben'
  },
  {
    id: '8',
    images: require('../Image_Dat/long.png'),

    username: 'Phi_dragon'
  },
  {
    id: '9',
    images: require('../Image_Dat/hoang.jpg'),

    username: 'hoangdz_vip'
  },
  {
    id: '10',
    images: require('../Image_Dat/thu.jpg'),

    username: 'thu_kute'
  },
  {
    id: '11',
    images: require('../Image_Dat/thanh.jpg'),

    username: 'thanh_gamer'
  },
  {
    id: '12',
    images: require('../Image_Dat/tuyen.jpg'),

    username: 'tuyen_fuckboy'
  },

];