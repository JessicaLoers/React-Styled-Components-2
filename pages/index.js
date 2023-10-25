// Importing the necessary libraries for styling components.
import styled from "styled-components";
// Importing pre-styled button component.
import { StyledButton } from "@/components/Button";

/*
- Styled Component named `FlexContainer`.
- It is essentially a `section` HTML tag with additional styles.
 */
const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  /*
- Using a prop '$direction' to set the flex-direction.
- If '$direction' prop is 'row', it will set to 'row', else 'column'.
- The default value for $direction is 'row'.
  */
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
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
      <FlexContainer $direction="column">
        <StyledButton $variant="text">Button - Text</StyledButton>
        <StyledButton $variant="contained">Button - Contained</StyledButton>
        <StyledButton $variant="outlined">Button - Outlined </StyledButton>
      </FlexContainer>
    </main>
  );
}
