import styled from 'styled-components'


export const GridContainer = styled.div`
*{
  border-radius: 0;
  font-size: 12px;
}
  display: grid;
  padding: 15px 20px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;

  .ant-select{
    margin-right: 10px; 
  }
  .ant-radio-group{
    margin-right: 10px;
  }
`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   //   //justify-content: space-around;
  //   //   //height: 300px;
`
export const LabelContainer = styled.h4`

  //text-align: center;
  align-content: center;
  color:grey;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 5px;
`