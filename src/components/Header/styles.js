import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

.brand{
  display: flex;
  gap: 1.2rem;
  align-items: center;

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

.btn-actions-user{
  border: 1px solid ${({ theme}) => theme.COLORS.LIGHT_GRAY};
  border-radius: 4rem;
  padding: 0.5rem;

  display: flex;
  gap: 2rem;
}
`;