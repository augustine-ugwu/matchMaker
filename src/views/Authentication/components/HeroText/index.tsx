import React from "react";
import {
  Container,
  RotatedRectangle,
  Title,
  Line,
  UnderlineContainer,
} from "./styles";
import { block } from "react-native-reanimated";

export const Underline = ({ children }) => (
  <UnderlineContainer>
    <Line />
    {children}
  </UnderlineContainer>
);

export const RectangleHighlight = ({ children }) => (
  <UnderlineContainer>
    <RotatedRectangle />
    {children}
  </UnderlineContainer>
);

const HeroText: React.FC = () => {
  return (
    <Container>
      <Title>Halal</Title>
      <RectangleHighlight>
        <Title style={{ color: "white" }}>Match-making</Title>
      </RectangleHighlight>
    </Container>
  );
};

export default HeroText;
