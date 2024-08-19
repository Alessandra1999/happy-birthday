import styled from 'styled-components';
import { IoIosHeart } from "react-icons/io";

const Rodape = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #3a415a;
    margin-top: 30px;
    position: absolute;
`;

const TextLeft = styled.p`
    display: block;
    float: left;
    font-size: 1.5em;
    color: #cbdad5;
    margin-top: 25px;
    margin-left: 20px;
`;

const TextRight = styled.p`
    display: block;
    float: right;
    font-size: 1.5em;
    color: #cbdad5;
    margin-top: 25px;
    margin-right: 20px;
`;

function Footer() {
    return (
        <Rodape>
            <TextLeft>"A vida é boa com você..."<IoIosHeart /></TextLeft>
            <TextRight>"Home is wherever I'm with You..."<IoIosHeart /></TextRight>
        </Rodape>
    )
}

export default Footer