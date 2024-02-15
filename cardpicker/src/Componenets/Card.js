import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <Wrapper>
            <div className='card'>
                <div className='imgdiv'>
                    <img src={props.link}/>
                </div>
                <div className='txtdiv'>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`

.card{
    width: 260px;
    height: 400px;
    background-color: #202020;
    box-shadow: 4px 3px 9px -1px black;
    transform: perspective(800px) rotateY(20deg);
    transition: transform .5s;
}

.card:hover{
    cursor: pointer;
    transform: perspective(800px) rotateY(20deg) translatex(-180px);
}

.imgdiv{
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    
}


img{
    width: 100%;

}

.txtdiv{
    height:100px;
    padding: 30px 20px;
    text-overflow: ellipsis;
    overflow: hidden;
}

h2{
    margin-bottom: 10px;
    color: white;
}

p{
    font-size: 13px;
    color: #707070;
}


`

export default Card