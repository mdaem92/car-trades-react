import styled from 'styled-components'

const blue = `#357ae8`
export const TagsGroupContainer = styled.div`
 
//justify-content: space-between;
margin: 20px 10px;
.label{
    font-size: 12px;
  }
.tag{
  display: flex;
  margin: 2px;
  //flex-direction: row;
  justify-content: space-between;
  width: max-content;
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

.tag-group{
  //display: grid;
  //grid-template-columns: repeat(3, auto);
  //grid-gap: 5px 0;
  display: flex;
  flex-wrap: wrap;
  
}
`