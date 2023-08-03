import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

const Wellcome = props => {
  const { navigation } = props;
  const goto = () => {
    navigation.navigate('Login');
  };
  const goto2 = () => {
    navigation.navigate('Signtup');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}></StatusBar>
      <View style={styles.viewlogo}>
        <Image source={require('../Image_Dat/Text_Instagram.png')} />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginLabel}
          onPress={goto}>Login</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={{ color: '#676060', fontSize: 15, marginTop: 10, fontWeight: 'bold', }}>Don't have an account?</Text>
        <Text style={{ color: '#3797EF', fontSize: 15, marginTop: 10, marginStart: 5, fontWeight: 'bold', }}
          onPress={goto2}>Signt up.</Text>
      </View>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewlogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 240,
  },
  btnLogin: {
    marginStart: 34,
    marginTop: 179,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    height: 50,
    width: '85%',
    backgroundColor: '#1877f2',
    borderRadius: 6,
  },
  btnLoginLabel: {
    fontWeight: '900',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.12,

    color: '#fff',
  },
  bottomText: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    backgroundColor: '#fffff',
  },
});
