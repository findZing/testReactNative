import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import InputForm from '../components/InputForm'

import email from '../assests/email.png'
import lock from '../assests/lock.png'
import facebook from '../assests/facebook.png'

import ButtonForm from '../components/ButtonForm'
import More from '../components/More'
import NavigationHeader from '../components/NavigationHeader'
import Or from '../components/Or'

const LoginScreen = ({navigation}): JSX.Element => {

  const handleToSignup = () => {
    navigation.push('Signup')
  }

  const handleStart = () => {
    navigation.push('Listbook')
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader navigation={navigation}/>
      <Logo size={1.75} />
      <Text style={styles.text}>
        The Pioneer in Coaching 4 English Skills
      </Text>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        <InputForm placeholder='Email' icon={email}/>
        <InputForm placeholder='Mật khẩu' icon={lock}/>
      </View>

      <View style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}>
        <TouchableOpacity>
          <Text style={{
            fontSize: 15,
            fontWeight: '400',
            textDecorationLine: 'underline',
            color: '#2E3192'
          }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonForm text='Đăng nhập' handleFunc={handleStart}/>

      <Or />
      <ButtonForm text='Đăng nhập bằng facebook' color='#1877F2' icon={facebook}/>
      <More textMore='Chưa có tài khoản Jaxtina ?' textBtnMore='Đăng ký ngay' handleFunc={handleToSignup}/>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    flex: 1,
    paddingHorizontal: 16,
    gap: 25
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#2E3192'
  }
})