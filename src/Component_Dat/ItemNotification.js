import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'

const ItemNotification = (props) => {
    const { data } = props;
    console.log(data);
    const textWidth = Dimensions.get('window').width - 174;

    return (

        <TouchableOpacity style={{ borderBottomWidth: 1,borderColor:'#00000030', height: 80, justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center',paddingVertical:5 }}>
            <Image source={data.images} style={{ width: 64, height: 64, borderRadius: 99 }} />
            <View style={{
                flexDirection: 'row',
                marginStart: 10,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <View style={{ flexDirection: 'row', width: textWidth }}>
                    <Text style={{ fontWeight: 'bold', color: '#000000',fontSize:16 }}>{data.username}
                        <Text style={{ color: '#A3A3A3',fontSize:14 }}> {data.title}</Text>
                    </Text>

                </View>

                <Image source={data.images} style={{ width: 60, height: 60 }} />

            </View>

        </TouchableOpacity>

    )
}

export default ItemNotification

const styles = StyleSheet.create({})