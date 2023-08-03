import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const ItemStory = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 65, height: 65, borderRadius: 99 }}
                    source={data?.images} />
                <Text numberOfLines={1} style={{fontFamily: 'Poppins',fontSize: 12,fontWeight: '400', color: '#262626',width:70}}>{data.username}</Text>
            </View>

        </View>
    )
}

export default ItemStory

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 3,
        alignSelf: 'center'
    }
})