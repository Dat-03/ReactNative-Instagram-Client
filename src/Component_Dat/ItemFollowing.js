import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemFollowing = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                <Image source={data.images} style={{ width: 64, height: 64 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', marginStart: 15, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', color: '#000000' }}>{data.name}</Text>
                        <Text style={{ color: 'blue', marginStart: 10 }}>Follow</Text>
                    </View>
                    <Text numberOfLines={1}
                        style={{ color: '#A3A3A3', width: '90%' }}>{data.title}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: 65, height: 36, backgroundColor: '#3797EF', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <Text style={{ color: '#ffffff', fontSize: 12 }}>Following</Text>
                </TouchableOpacity>
            </View>


        </TouchableOpacity>
    )
}

export default ItemFollowing

const styles = StyleSheet.create({})