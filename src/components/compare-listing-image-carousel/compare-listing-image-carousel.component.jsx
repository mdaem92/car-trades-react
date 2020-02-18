import React from 'react';
import {CarouselContainer} from './compare-listing-image-carousel.styles'
import {Icon, Tooltip} from 'antd'
import{connect} from 'react-redux'
import { removeFromCompare } from '../../redux/compare/compare.actions';

const CompareListingImageCarousel = ({images,id,remove}) => {
    console.log('from carousel: ', images)

    const handleRemove = ()=>{
        console.log('removing listing with id:',id)
        remove(id)
    }
    return (
        <div>
            <Tooltip title={'Remove'}>
                <Icon className={'icon'} type="close" onClick={handleRemove} />
            </Tooltip>
            <CarouselContainer>
                {
                    images.map(({url,uid})=>
                    <div key={uid}>
                        <img className={'single-image'} alt={'image'} src={url}/>
                    </div>)
                }
            </CarouselContainer>
        </div>
        

    );
};

const mapDispatchToProps = (dispatch)=>({
    remove:(id)=>dispatch(removeFromCompare(id))
})

export default connect(undefined,mapDispatchToProps)(CompareListingImageCarousel);