import styled,{keyframes} from 'styled-components'
import NavItem from 'reactstrap/lib/NavItem'
import {NavLink} from 'reactstrap'

const blue = '#357ae8'

const tabAnimationKeyFrame = keyframes`
  0%{
     opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const TabContainer = styled.div`

  .nav{
    border-bottom: 1px solid #f7f7f7f7;
    margin-top: 20px;
    
  }

  .tab-pane{
    animation: ${tabAnimationKeyFrame} 200ms ease-in;
  }
  

`
export const NavItemContainer = styled(NavItem)`
  //border-bottom: 2px solid grey;
  .active{
      color: ${blue};
      font-weight: bold;
      border-bottom: 2px solid ${blue};
    }
    &:hover{
      color: ${blue};
    }
`
export const NavLinkContainer = styled(NavLink)`
  cursor: pointer;
  &:hover{
      color: blue;
      border-bottom: 2px solid ${blue};
  }
  
`
