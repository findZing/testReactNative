import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'

import image from '../assests/image.png'
import read from '../assests/read.png'
import speak from '../assests/speak.png'
import listen from '../assests/listen.png'
import write from '../assests/write.png'
import ButtonForm from '../components/ButtonForm'
import More from '../components/More'

const SplashScreen = ({navigation}): JSX.Element => {
  
  const handleLogin = () => {
    navigation.push('Login')
  }
  
  const handleSignup = () => {
    navigation.push('Signup')

  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo size={1.2}/>
      <Text style={styles.slogan}>
        Phát triển Tiếng Anh Toàn Diện 4 kỹ năng
      </Text>
      <Text style={styles.textHighlight}>
        NGHE - NÓI - ĐỌC - VIẾT
      </Text>

      <View style={{marginTop: 50}}>
      <View style={styles.containerImage}>
        <Image source={image} style={styles.image} />

        <View style={[styles.containerIcon, {
          top: 40,
          left: -40
        }]}>
          <Image style={styles.icon} source={listen} />
        </View>
        <View style={[styles.containerIcon, {
          top: -40,
          left: 40,
        }]}>
          
          <Image style={styles.icon} source={speak} />
        </View>
        <View style={[styles.containerIcon, {
          top: -40,
          right: 40,
        }]}>
          <Image style={styles.icon} source={read} />
        </View>
        <View style={[styles.containerIcon, {
          top: 40,
          right: -40
        }]}>
          <Image style={styles.icon} source={write} />
        </View>
        
      </View>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.textBtn}>Hãy bắt đầu</Text>
      </TouchableOpacity> */}
        <ButtonForm text='Hãy bắt đầu' handleFunc={handleSignup}/>
      
      <More textMore='Đã là người dùng Jaxtina rồi?' textBtnMore='Đăng nhập' handleFunc={handleLogin}/>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  slogan: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#212529'
  },
  textHighlight: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    color: '#CD2027'
  },
  button: {
    width: 343,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CD2027',
    borderRadius: 12,
  },
  textBtn: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  containerMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  textMore: {
    fontWeght: '400',
    fontSize: 15,
    color: '#212529'
  },
  btnMore: {

  },
  textBtnMore: {
    fontWeight: '600',
    fontSize: 18,
    color: '#2E3192'
  },
  image: {
    width: 296,
    height: 296,
    resizeMode: 'contain'
  },
  containerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#3C80D1',
    shadowOffset: {width: 40, height: 20},
    // shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    height: 35,
  },
  containerImage: {
    position: 'relative',

  }
})