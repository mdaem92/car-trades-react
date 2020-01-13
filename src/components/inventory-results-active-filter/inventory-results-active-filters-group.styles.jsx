import styled from 'styled-components'

const blue = `#357ae8`
export const TagsGroupContainer = styled.div`
margin: 20px 10px;
.label{
    font-size: 12px;
  }
.tag{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color:  #357ae8;
  border: none;
  color: white;
  
  
  .anticon{
    //margin-bottom: 5px;
    height: max-content;
    margin-top: 5px;
    color: white;
  }
}
`