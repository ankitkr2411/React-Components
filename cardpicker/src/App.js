import styled from "styled-components";
import Card from "./Componenets/Card";
import { GlobalStyle } from "./Styles/GlobalStyle";


function App() {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
    <div className="App">
    <Card id='1' name='Ladakh' link='https://www.holidify.com/images/bgImages/LADAKH.jpg' desc='Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic land...'/>
    <Card id='2' name='Srinagar' link='https://www.holidify.com/images/bgImages/SRINAGAR.jpg' desc='Famously known as Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar i...'/>
    <Card id='3' name='Manali' link='https://www.holidify.com/images/bgImages/MANALI.jpg' desc='With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations...'/>
    <Card id='4' name='Coorg' link='https://www.holidify.com/images/bgImages/COORG.jpg' desc='Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people....'/>
    <Card id='5' name='Udaipur' link='https://www.holidify.com/images/bgImages/UDAIPUR.jpg' desc='Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan. Located around stunning water lakes and enveloped by the Aravalli Hills in all directions, Udaipur is known for its azure lakes, magnificent palaces, vibrant culture and delectable food. Along with bein...'/>
    <Card id='6' name='Gangtok' link='https://www.holidify.com/images/bgImages/GANGTOK.jpg' desc='Incredibly alluring, pleasantly boisterous and wreathed in clouds - Gangtok, the capital of Sikkim, is one of the most popular hill stations in India. Lying at the height of 1650 m above sea level, the town during its bright sunny days offers spectacular views of Mt. Kanchenjunga. Gangtok is a base ...'/>
    <Card id='7' name='Munar' link='https://www.holidify.com/images/bgImages/MUNNAR.jpg' desc='Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst...'/>
    <Card id='8' name='Goa' link='https://www.holidify.com/images/bgImages/GOA.jpg' desc='Lying on the western coast, Goa is Indias smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or ...'/>
    </div>
    </Wrapper>
    </>
  );
}


const Wrapper = styled.section`

.App{
  height: 100vh;
    display: grid;
    background-color: #202020;
    grid-template-columns: repeat(8,78px);
    align-content: center;
    justify-content: center;
    padding: 0px 100px;
}

`

export default App;
