import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import InputForm from '../components/InputForm'

import email from '../assests/email.png'
import lock from '../assests/lock.png'
import profile from '../assests/profile.png'
import phone from '../assests/phone.png'
import celendar from '../assests/celendar.png'
import facebook from '../assests/facebook.png'

import ButtonForm from '../components/ButtonForm'
import More from '../components/More'
import NavigationHeader from '../components/NavigationHeader'
import Or from '../components/Or'

const SignupScreen = ({navigation}): JSX.Element => {

  const handleToSignup = () => {
    navigation.push('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title='Tạo tài khoản' navigation={navigation}/>
      <Logo size={1.2}/>
      <Text style={styles.text}>
      Sắp xong rồi. Bạn hãy tạo tài khoản để được hỗ trợ trong suốt quá trình nhé!
      </Text>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        <InputForm placeholder='Họ và tên' icon={profile}/>
        <InputForm placeholder='Email' icon={email}/>
        <InputForm placeholder='Số điện thoại' icon={phone}/>
        <InputForm placeholder='Mật khẩu' icon={lock}/>
        <InputForm placeholder='Ngày, tháng, năm sinh' icon={celendar}/>
      </View>


      <ButtonForm text='Hãy bắt đầu'/>

      <Or />
      <ButtonForm text='Đăng nhập bằng facebook' color='#1877F2' icon={facebook}/>
      <More textMore='Đã là người dùng Jaxtina rồi?' textBtnMore='Đăng nhập' handleFunc={handleToSignup}/>
    </SafeAreaView>
  )
}

export default SignupScreen

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
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#212529'
  }
})