import styled from 'styled-components';

const Cabecalho = styled.header`
  width: 100%;
  height: 80px;
  background-color: #3a415a;
  position: absolute;
`;

const Title = styled.h1`
    color: #cbdad5;
    text-align: center;
    margin-top: 20px;
`;

function Header() {

    return (
        <Cabecalho>
            <Title>
                Feliz Aniversário!
            </Title>
        </Cabecalho>
    )
}

export default Header