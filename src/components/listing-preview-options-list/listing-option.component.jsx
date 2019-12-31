import React from 'react'
import {ReactComponent as Check} from "../../assets/check.svg";
import {ListingOptionContainer,ListingOptionText} from "./listing-preview-options-list.styles";

const ListingOption = ({description})=>(
    <ListingOptionContainer>
        <Check className={'check-icon'}/>
        <ListingOptionText>{description}</ListingOptionText>
    </ListingOptionContainer>


)
export default ListingOption