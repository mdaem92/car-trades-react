import styled from 'styled-components'
export const SortOptionsContainer = styled.div`

display: flex;
flex-direction: column;
  margin: 20px 10px;
  
  .label{
    font-size: 12px;
    margin-right: 10px;
  }
  .options{
  display: flex;
  flex-direction: row;
    margin-top: 20px;
  }
  .select{
    margin-right: 10px;
  }

  @media screen and (max-width:800px){
    .affix-switch{
      display:none;
    }
    .options{
    margin-top: unset;
  }
  }

`