import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

.brand{
  display: flex;
  gap: 1.2rem;

  img{
    width: 2.9rem;
    height: auto;
  }

  h1{
    font-size: 2rem;
    font-weight: 600;

    color: ${({theme}) => theme.COLORS.PURPLE};
  }
}
`;