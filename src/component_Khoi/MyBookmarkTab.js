import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyBookmarkTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Poppins',fontSize: 16,fontWeight: 'bold',color: '#262626'}}>You haven't saved any post yet</Text>
    </View>
  )
}

export default MyBookmarkTab

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})