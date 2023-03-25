import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import homeNormal from '../assests/homeNormal.png'
import homeActive from '../assests/homeActive.png'
import speakNormal from '../assests/speakNormal.png'
import speakActive from '../assests/speakActive.png'
import courseNormal from '../assests/courseNormal.png'
import courseActive from '../assests/courseActive.png'
import utilitiesNormal from '../assests/utilitiesNormal.png'
import utilitiesActive from '../assests/utilitiesActive.png'
import userNormal from '../assests/userNormal.png'
import userActive from '../assests/userActive.png'

import sun from '../assests/sun.png'
import bg from '../assests/bg.png'
import bg1 from '../assests/bg_1.png'
import bg2 from '../assests/bg_2.png'
import LinearGradient from 'react-native-linear-gradient'

const bottomStacks = [
  {
    title: 'Book',
    normal: homeNormal,
    active: homeActive
  },
  {
    title: 'Speak',
    normal: speakNormal,
    active: speakActive
  },
  {
    title: 'Course',
    normal: courseNormal,
    active: courseActive
  },
  {
    title: 'Utilities',
    normal: utilitiesNormal,
    active: utilitiesActive
  },
  {
    title: 'User',
    normal: userNormal,
    active: userActive
  },
]

const BottomStackItem = ({active = true, iconNormal, iconActive, setCheck=() => {}}) : JSX.Element => {

  return (
    <TouchableOpacity onPress={setCheck}>
      {
        active ?
        <Image source={iconActive} style={{width:64, height:44}}/>
        :
        <Image source={iconNormal} style={{width:64, height:44}}/> 
      }
    </TouchableOpacity>
  )
}

const bookList = [
  {
    title: 'Complete English',
    content: 'Chinh Phục Giao Tiếp Tiếng Anh Toàn Diện',
    image: bg,
    color: ['rgba(190, 138, 59, 0.9)'],
  },
  {
    title: 'Complete Grammar 1',
    content: 'Chinh Phục Ngữ Pháp Tiếng Anh Toàn Diện',
    image: bg1,
    color: ['rgba(85, 154, 0, 0.9)', 'rgba(93, 213, 134, 0.67)', 'rgba(93, 213, 134, 0.67)'],
  },
  {
    title: 'Complete Grammar 2',
    content: 'Chinh Phục Giao Tiếp Tiếng Anh Toàn Diện',
    image: bg2,
    color: ['rgba(119, 35, 1, 0.65)'],

  },
]

const BookItem = ({title='', content='', image, color}) : JSX.Element => {

  return (
    <View style={{width: '100%', height: 170, borderRadius: 20, position: 'relative'}}>
      <Image source={image} style={{width: '100%', height: '100%', borderRadius: 20}}/>
      {color.length > 2 ? <LinearGradient useAngle={true} angle={0}  locations={[0.01,0.7,1]} colors={color} style={{
          position: 'absolute', 
          borderTopLeftRadius: 8, 
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          opacity: 0.9,
          height: 66,
          bottom: 10,
          right: 10,
          left: 10,
          paddingVertical: 8,
          paddingHorizontal: 12
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: '700',
          color: 'white'
        }}>{title}</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: '600',
          color: 'white'
        }}>{content}</Text>
      </LinearGradient>
      :
      <View style={{
        position: 'absolute', 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: color[0],
        opacity: 0.9,
        height: 66,
        bottom: 10,
        right: 10,
        left: 10,
        paddingVertical: 8,
        paddingHorizontal: 12
    }}>
      <Text style={{
        fontSize: 22,
        fontWeight: '700',
        color: 'white'
      }}>{title}</Text>
      <Text style={{
        fontSize: 14,
        fontWeight: '600',
        color: 'white'
      }}>{content}</Text>
    </View>
    }
    </View>
  )
}

const ListBookScreen = () : JSX.Element => {
  const [checkItem, setCheckItem] = useState(0)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1, paddingHorizontal: 16, paddingTop: 30, flexDirection: 'column', gap: 20}}>
          <View style={{position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text style={{
              fontFamily: 'Inter',
              fontWeight: '700',
              fontSize: 30,
              color: '#2E3192'
            }}>
            Chào Linh,
            </Text>
            <Text style={{
              fontFamily: 'Inter',
              fontWeight: '600',
              fontSize: 18,
              color: '#2E3192'
            }}>
            Nothing is more important than practice!
            </Text>

            <Image source={sun} style={{position: 'absolute', right:0, top: 0, zIndex: -1, opacity: 0.7}}/>
          </View>

          {bookList.map((item,index) => (
            <BookItem key={index} title={item.title} content={item.content} image={item.image} color={item.color}/>
          ))}
      </SafeAreaView>

      <View style={styles.containerBottom}>
            {
              bottomStacks.map((item,index) => (
                <BottomStackItem key={index} setCheck={() => {setCheckItem(index)}} active={index===checkItem} iconActive={item.active} iconNormal={item.normal}/>
              ))
            }
      </View>
    </View>
  )
}

export default ListBookScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EBF0FF',
  },
  containerBottom: {
    backgroundColor: 'white',
    width: '100%',
    height: 84,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})