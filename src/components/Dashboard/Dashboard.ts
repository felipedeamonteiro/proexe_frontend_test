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


  .card-header-div {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .card {
    .card-body {
      table {
        thead {
          tr {
            th {
              padding: 15px;
              text-align: center;
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 15px;
              text-align: center;
            }
          }

          .spinner-div {
            margin: 10px 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
