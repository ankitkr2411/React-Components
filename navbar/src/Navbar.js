
import { useState } from 'react'
import styled from 'styled-components'



const Navbar = () => {


    let m = {
        maintxt: "Dark Mode",
        position: "5",
        mainBack: "#545454",
        background: "#222222",
        text: "#f7a3a3",
        darkColor: "#8a8a8a",
        darkSwitch: "#b1a9a9"
    }

    const [metrics,setmetrics] = useState(m);

    const clicked = ()=>{

        let sm;

        if(metrics.position == "5")
        {
            sm = {
                maintxt: "Light Mode",
                position: "45",
                mainBack: "#f3feff",
        background: "#2a6592",
        text: "#b7e0ff",
        darkColor: "#007bc9",
        darkSwitch: "#acebff"

            }
            setmetrics(sm);
        }
        else{
            sm = {
                maintxt: "Dark Mode",
                position: "5",
                mainBack: "#545454",
                background: "#222222",
                text: "#f7a3a3",
                darkColor: "#8a8a8a",
                darkSwitch: "#b1a9a9"
            }
            setmetrics(sm);
        }
    
    
    }


    


    return (
        <>
            <Wrapper metrics={metrics}>
                <div className="main">
                        <navbar className="nav">
                            <div className='name'>NavBar</div>
                            <ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>About Us</li>
                                <li>Gallery</li>
                            </ul>
                            <div className='darkcont'>
                                <span className='darktxt'>Dark Mode</span>
                                <div className='darkbox' onClick={()=>clicked()}>
                                    <div className='switch'></div>
                                </div>
                            </div>
                        </navbar>

                        <div className='maintxt'>{metrics.maintxt}</div>

                </div>
            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`

.main{
    height: 100vh;
    background-color: ${(props)=>props.metrics.mainBack};
    display: flex;
    align-items: center;
    justify-content: center;
    
}

@keyframes opac{
    0%{
        opacity: 0%;
    }

    25%{
        opacity: 25%;
    }

    50%{
        opacity: 50%;
    }

    75%{
        opacity: 75%;
    }

    100%{
        opacity: 100%;
    }
}

.maintxt{
    font-size: 56px;
    font-weight: bold;
    color: ${(props)=> props.metrics.text};
    animation: opac 1s infinite alternate;

}

.nav{
    position: fixed;
    top: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=> props.metrics.background};
    color: ${(props)=> props.metrics.text};
    box-shadow: #505050 0px 2px 12px 0px;
    height: 74px;
}

.name{
    position: absolute;
    left: 40px;
    font-size: 19px;
}

ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 29%;
    font-size: 20px;
}

li{
    list-style: none;
    padding: 7px 14px;
}

li:hover{
    cursor: pointer;
    background-color: #303030;
    border-radius: 20px;
}

li:active{
    background-color: #0b0b0b;
}


.darkcont{
    display: flex;
    position: absolute;
    right: 69px;
    width: 186px;
    align-items: center;
    justify-content: space-around;

}

.darktxt{
    font-size: 20px;
}

.darkbox{
    height: 31px;
    width: 75px;
    background-color: ${(props)=>props.metrics.darkColor};
    /* border: solid #474343 2px; */
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: #303030 3px 3px 4px 0px inset;
}

.darkbox:hover{
    cursor: pointer;
}

.switch{
    background-color: ${(props)=>props.metrics.darkSwitch};
    width: 25px;
    height: 25px;
    border-radius: 15px;
    position: absolute;
    right : ${(props)=> props.metrics.position}px;
    box-shadow: #555151 3px 3px 4px 0px;
    transition: all 0.1s;

}



`

export default Navbar;