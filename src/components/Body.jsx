import styled from 'styled-components';
import Parabens from '../assets/parabens.png';
import Playlist from '../assets/playlist.jpg';
import { FaHeadphones } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Text = styled.p`
    margin-top: 120px;
    font-size: 1.5em;
    color: #34344e;
`;

const Img = styled.img`
    margin-top: 50px;
    width: 300px;
`;

const Musics = styled.div`
    margin-top: 50px;
`;

const Title = styled.h1`
    color: #566981;
`;

const List = styled.li`
    margin-top: 20px;
    color: #566981;
`;


function Body() {
   return (
    <Container>
        <Text>
            Eu te escolheria em todas as minhas vidas.
            <br/>
            Em cem mundos diferentes.
            <br/>
            Em todas as versões de realidades existentes.
            <br/>
            Eu te escolheria, de novo e de novo.
        </Text>
        <Img src={Parabens}></Img>
        <Musics>
            <Title>Músicas que fazem eu me lembrar de ti <FaHeadphones /><IoIosHeart /></Title>
            <Text style={{marginTop: '50px'}}>Pela letra: </Text>
            <ul>
                <List>I Was Born To Love You - Queen</List>
                <List>VALENTINE - Maneskin</List>
                <List>Home - Edith Whisker</List>
                <List>You Are The Reason - Calum Scott</List>
                <List>Da Primeira Vez - Bryan Behr, Calum Scott</List>
                <List>All Of Me - John Legend</List>
                <List>I Wanna Be Yours - Arctic Monkeys</List>
                <List>Porque Eu Te Amo - Anavitória</List>
                <List>Partilhar - Rubel, Anavitória</List>
                <List>Deixa - Lagum, Ana Gabriela</List>
            </ul>
            <Text style={{marginTop: '50px'}}>Por ter sido um dos nossos primeiros assuntos: </Text>
            <ul>
                <List>Take Me To Church - Hozier</List>
            </ul>
            <Text style={{marginTop: '50px'}}>Por tu ter me apresentado e eu ter amado: </Text>
            <ul>
                <List>Sleep On The Floor - The Lumineers</List>
                <List>Through The Valley - Shawn James</List>
                <List>Legends Never Die - League of Legends</List>
            </ul>
            <Text style={{marginTop: '50px'}}>Pelo all star branco (sim <RiEmotionLaughLine />): </Text>
            <ul>
                <List>Bad Liar - Imagine Dragons</List>
            </ul>
            <Title style={{marginTop: '50px'}}>Escaneia o código pra ver a playlist <IoIosHeart /></Title>
            <Img src={Playlist}/>
        </Musics>
        <Text style={{marginTop: '50px'}}>Eu amo nós e tudo que a gente vem construindo, obrigada por existir na minha vida e por tornar ela muito melhor!</Text>
        <Title>Eu te amo mais que tudo <IoIosHeart /></Title>
        <Title>Feliz Aniversário meu amor <LiaBirthdayCakeSolid /></Title>
    </Container>
   )
}

export default Body