import React from 'react'
import styled from 'styled-components';

const ReverseCard = () => {
  return (
    <Wrapper>
    <div className='main'>
      <div className='card'>
        <div className='front'>Hi,<br/>Developers</div>
        <div className='back'>Like<br/>Comment<br/>Share</div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

body{
  margin: 0px;
  padding: 0px;
}

*{
  margin: 0px;
  padding: 0px;
}

.main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  perspective: 500px;
  background-color: #202020;
}


.card{
  width: 200px;
  height: 200px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card:hover{
  cursor: pointer;
  transform: rotateY(180deg);
}

.front, .back{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  backface-visibility: hidden;
  border-radius: 20px;
  background-color: #ea5656;
  color: #202020;
  box-shadow: 5px 5px 15px -5px black inset;
}

.back{
  background-color: #81b781;
  transform: rotateY(180deg);
}



`

export default ReverseCard