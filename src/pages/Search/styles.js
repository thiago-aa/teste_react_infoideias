import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  // border: solid 1px red;

  a {
    text-decoration: none;
  }

`;

export const Content = styled.div`
  width: calc(100vw - 500px);
  margin-top: 50px;


  h2 {
    margin: 20px 0 40px;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary.background};
  }

  @media(max-width: 425px) {
    width: calc(100vw - 50px);
    // border: solid 2px magenta;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;

  label {
    height: 70px;
    width: 100%;
    max-width: calc(100vw - 500px);
    border: 2px solid #3F3D5660;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 30px;

    input {
      border: none;
      outline: none;
      background-color: transparent;
      height: 70px;
      width: 100%;
      color: #3F3D5680;
      font-size: 22px;
      padding-left: 30px;
      font-weight: 500;

      ::placeholder {
          color: #3F3D5680;
        }
    }

    > button {
      width: 65px;
      height: 65px;
      border: none;
      background-color: transparent;
    }
  }

  div{
    width: 300px;
  }

  @media(max-width: 425px) {
    label {
      max-width: calc(100vw - 50px);
      width: 50%;
      height: 50px;

      input {
        padding-left: 15px;
        font-size: 14px;
      }
    }

    

    div {
      width: 40%;
      height: 50px;
    }

    div button {
      height: 50px;
      font-size: 18px;
    }
  }
  
`;

export const CardList = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
