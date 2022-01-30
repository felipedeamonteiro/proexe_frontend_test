import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container-title {
    margin: 20px 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  .card-body {
    padding: 30px 100px;

    .input-container {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .input-div {
        width: 70%;
        display: flex;
        flex-direction: column;

        span {
          margin-top: 10px;
          color: red;
        }
      }
    }
  }


  .buttons-div {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;

    button {
      padding: 6px 20px;
      margin-left: 20px;
    }
  }
`;
