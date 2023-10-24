import styled from "styled-components";
import { StyledButton } from "@/components/Button/Button.styled";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <main>
      <h1>Styled Components with Props</h1>
      <h2>Using Props: Ternary Operator</h2>
      <FlexContainer>
        <StyledButton>Button </StyledButton>
        <StyledButton $color="danger">Button Danger</StyledButton>
      </FlexContainer>
      <h2>Using Props: css Blocks</h2>
      <FlexContainer>
        <StyledButton $variant="text">Button - Text</StyledButton>
        <StyledButton $variant="contained">Button - Contained</StyledButton>
        <StyledButton $variant="outlined">Button - Outlined </StyledButton>
      </FlexContainer>
    </main>
  );
}
