import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return <Title>코인</Title>;
}
export default Coins;
