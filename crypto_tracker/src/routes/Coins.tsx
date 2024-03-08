import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinList>
        <Coin></Coin>
      </CoinList>
    </Container>
  );
}
export default Coins;
