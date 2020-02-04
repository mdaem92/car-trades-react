import React,{useState} from 'react';
import {ReactComponent as Compare} from "../../assets/car icons/compare.svg";
import {ReactComponent as Parking} from "../../assets/car icons/parking.svg";
import {ButtonsContainer} from "./listing-preview-user-buttons.styles";
import {Tooltip,message} from "antd";
import {createStructuredSelector} from "reselect";
import {toggleCompare, toggleParking} from "../../redux/listing/listing.actions";

const ListingPreviewUserButtons = ({listingId}) => {
    const [state, setState] = useState({
        isParked:false,
        isCompared:false
    });
    const{isParked,isCompared}=state

    const handleClick = (e)=>{
        (e==='isParked')?
            !state[e]?
                message.success('Listing added to Parking')
                :
                message.success('Listing removed from Parking')
            :
            !state[e]?
                message.success('Listing added to Compare')
                :
                message.success('Listing removed from Compare')

        setState({
            ...state,
            [e]:!state[e]
        })
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


const mapDispatchToProps = (dispatch)=>({
    toggleParking:(id)=>dispatch(toggleParking(id)),
    toggleComparing:(id)=>dispatch(toggleCompare(id))
})
export default ListingPreviewUserButtons;
