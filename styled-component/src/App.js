import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

function App() {
  return (
    <Father>
      <div style={{ background: "teal", width: 100, height: 100 }}></div>
      <div style={{ background: "tomato", width: 100, height: 100 }}></div>
    </Father>
  );
}

export default App;
