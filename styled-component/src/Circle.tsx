import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>``;

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor} />;
}

export default Circle;
