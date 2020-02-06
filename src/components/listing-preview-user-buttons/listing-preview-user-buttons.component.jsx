import React from 'react';
import{connect}from 'react-redux'
import {ReactComponent as Compare} from "../../assets/car icons/compare.svg";
import {ReactComponent as Parking} from "../../assets/car icons/parking.svg";
import {ButtonsContainer} from "./listing-preview-user-buttons.styles";
import {Tooltip,message} from "antd";
import {addToCompare, removeFromCompare} from "../../redux/compare/compare.actions";
import {addToParking, removeFromParking} from "../../redux/parking/parking.actions";
import {isComparedListingSelector} from "../../redux/compare/compare.selectors";
import {isParkedListingSelector} from "../../redux/parking/parking.selectors";

const ListingPreviewUserButtons = (
    {
        addToCompare,
        removeFromCompare,
        addToParking,
        removeFromParking,
        isParked,
        isCompared,
        ...listingData
    }) => {

    const handleClick = (e)=>{
        if(e==='isParked'){
            if(!isParked){
                addToParking(listingData)
                message.success('Listing added to Parking')

            }else{
                removeFromParking(listingData.id)
                message.success('Listing removed from Parking')
            }

        }else{
            if(!isCompared){
                addToCompare(listingData)
                message.success('Listing added to Compare')
            }else{
                removeFromCompare(listingData.id)
                message.success('Listing removed from Compare')

            }

        }
    }
    return (
        <ButtonsContainer isCompared={isCompared} isParked={isParked}>
            <>
                <Tooltip placement="top" title={isCompared?"Remove from comparison":"Add to comparison"} arrowPointAtCenter>
                    <Compare
                        className={'compare-icon'}
                        name={'isCompared'}
                        // isCompared={isCompared}
                        onClick={()=>handleClick('isCompared')}
                    />
                </Tooltip>
            </>
            <>
                <Tooltip placement="top" title={isParked?"Un-park this listing":"Park this listing"} arrowPointAtCenter>
                    <Parking
                        className={'parking-icon'}
                        name={'isParked'}
                        // isParked={isParked}
                        onClick={()=>handleClick('isParked')}
                    />
                </Tooltip>
            </>
        </ButtonsContainer>
    );
};


const mapStateToProps = (state,{id})=>({
    isCompared:isComparedListingSelector(state,id),
    isParked:isParkedListingSelector(state,id)
})
const mapDispatchToProps = (dispatch)=>({
    addToCompare:(id)=>dispatch(addToCompare(id)),
    removeFromCompare:(id)=>dispatch(removeFromCompare(id)),
    addToParking:(id)=>dispatch(addToParking(id)),
    removeFromParking:(id)=>dispatch(removeFromParking(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListingPreviewUserButtons);
