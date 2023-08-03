import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const ItemStory = (props) => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Image style={{ width: 62, height: 62, borderRadius: 99 }}
                    source={require('../Image_Dat/story1.png')} />
                <Text style={{ fontSize: 12, fontWeight:'400'}}>Your Story</Text>
            </View>

        </View>
    )
}

export default ItemStory

const styles = StyleSheet.create({
    container:{
        width: 62,
        height:85

    }
})