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
  .ant-calendar-picker{
    margin-right:10px;
  }
  .ant-input-number{
    margin-right: 10px;
  }
  @media screen and (max-width:800px){
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width:800px){
    flex-wrap:wrap;
    margin-bottom:10px;
  }
`
export const LabelContainer = styled.h4`

  //text-align: center;
  align-content: center;
  color:grey;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 5px;
  @media screen and (max-width:800px){
   display:none;
  }
`