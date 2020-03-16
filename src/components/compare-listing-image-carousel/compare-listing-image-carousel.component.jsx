import React from 'react';
import {CarouselContainer,CompareListingContainer} from './compare-listing-image-carousel.styles'
import { Tooltip} from 'antd'
import{connect} from 'react-redux'
import { removeFromCompare } from '../../redux/compare/compare.actions';
import Icon from 'antd/lib/icon';

const CompareListingImageCarousel = ({images,id,remove}) => {
    console.log('from carousel: ', images)

    const handleRemove = ()=>{
        console.log('removing listing with id:',id)
        remove(id)
    }
    return (
        <CompareListingContainer>
            <Tooltip title={'Remove'}>
                <Icon className={'icon'} type="close" onClick={handleRemove} />
            </Tooltip>
            <CarouselContainer>
                {
                    images.map(({url,uid})=>
                    <div key={uid}>
                        <img className={'single-image'} alt={''} src={url}/>
                    </div>)
                }
            </CarouselContainer>
        </CompareListingContainer>
        

    );
};

const mapDispatchToProps = (dispatch)=>({
    remove:(id)=>dispatch(removeFromCompare(id))
})

export default connect(undefined,mapDispatchToProps)(CompareListingImageCarousel);