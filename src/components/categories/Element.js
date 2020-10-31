import styled from 'styled-components';
export const Navg = styled.ul`
  display: flex;
  flex-direction: row;
  //  width: 100%;
  //  height: 90vh;
  //  position: absolute;
  //  top: 80px;
  //  left: ${({ click }) => (click ? 0 : '-100%')};
  //  opacity: 1;
  //  transition: all 0.5s ease;
  //  background: #101522;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    padding-top: 10em;
    z-index: 49;
  }
`;
