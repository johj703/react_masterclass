import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<CircleProps>``;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
