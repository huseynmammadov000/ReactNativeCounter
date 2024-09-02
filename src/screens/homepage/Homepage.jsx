import React, { useState } from 'react'
import { StyledText, StyledView, StyledTouchableOpacity } from '@common/StyledComponents'
import { TouchableOpacity, Text } from 'react-native'

const Homepage = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)

  return (
    <StyledView className='flex-1 bg-red-500 p-8'>
      <StyledText className='text-3xl m-4 text-white'>Homepage</StyledText>

      <StyledText className='text-2xl m-4 text-white'>{count}</StyledText>

      <StyledView className='flex-row space-x-7'>
        <TouchableOpacity onPress={decreaseCount} >
          <StyledText className='text-5xl text-white'>-</StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseCount}>
          <StyledText className='text-5xl text-white'>+</StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  )
}

export default Homepage


// const styles = StyleSheet.create({
//     container:{
// flex:1,backgroundColor:'red'
//     }
// })