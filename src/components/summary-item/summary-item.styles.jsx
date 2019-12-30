import styled,{css} from 'styled-components'


const ExtendedStyles = css`
  display: none;
`

export const IconContainer = styled.div`
  
`

export const SummaryItemContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  background-color: white;
  //margin-top: 2px;
  //margin-bottom: 2px;
  ${props=>props.isExtended && css`
    flex-direction: row;
    border-top: 1px solid #f7f7f7f7;
    
  `}
  .icon{
    width: 40%;
    display: flex;
    justify-content: center;
    margin: 10px 0 10px 30px;
    ${props=>props.isExtended && css`
      height: 40px;
      align-items: center;
      margin: 10px 0 10px 15px;
      width: 40px;
      justify-content: flex-start;
    `}

   
  }
`
export const TitleContainer = styled.h3`
   text-align: center;
   font-size: 12px;
   ${props=>props.isExtended && css`
       font-size: 16px;
       font-weight: bold;
       margin: 25px 10px 25px 50px;
       justify-content: flex-end;
       
   `}
   
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const DescriptionContainer = styled.h3`
  color: grey;
  font-size: 12px;
  text-align: center;
  margin:25px 10px ;
  justify-content: flex-start;
  
  
`