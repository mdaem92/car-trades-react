import React from 'react'
import {connect} from 'react-redux'
import { Tag} from 'antd';
import {TagsGroupContainer} from "./inventory-results-active-filters-group.styles";
import {createStructuredSelector} from "reselect";
import {setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";
import moment from 'moment'
import {
    inventoryActiveFiltersTagSelector,
    inventoryFiltersSelector
} from "../../redux/inventory-filters/inventory-filters.selectors";
import FlipMove from "react-flip-move";

const ActiveFiltersGroup =({tags,setFieldValue})=>{

    const handleClose = removedTag => {

        console.log(removedTag)
        console.log(typeof removedTag)
        const tagName= removedTag.toLowerCase()
        console.log(`tag name ${tagName} `,tagName.includes('year'))
        if(tagName.includes('year')){
            setFieldValue('year',[1950,parseInt(moment().format('YYYY'))])
            console.log('year ', tags )
        }else if(tagName.includes('mileage')){
            setFieldValue('mileage',[0,0])
            console.log('mileage ', tags )
        }else if (tagName.includes('price')){
            setFieldValue('price',[0,0])
            console.log('price ', tags )
        }else if (tagName.includes('condition')){
            setFieldValue('condition','')
        }else if (tagName.includes('colors')){
            setFieldValue('colors',[])
        }else if(tagName.includes('transmission')){
            setFieldValue('transmissions',[])
        }else if(tagName.includes('fuel')){
            setFieldValue('fuelTypes',[])
        }
        else{
            setFieldValue('make',undefined)
            setFieldValue('model',undefined)
        }

    };


        // const { tags } = state;
        return (
            <div>
                <TagsGroupContainer>
                    {!!tags.length ? <span className={'label'}>Active filters</span>:<span className={'label'}> No active filters</span>}
                    <FlipMove
                        className={'tag-group'}

                    >
                        {tags.map(tag=>
                            <div key={tag}>
                                <Tag
                                    // key={tag}
                                    className={'tag'}
                                    closable
                                    onClose={e => {
                                        e.preventDefault();
                                        handleClose(tag);
                                    }}
                                 >
                                    {tag}
                                </Tag>
                            </div>
                        )}
                    </FlipMove>
                </TagsGroupContainer>
            </div>
        );

}
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
const mapStateToProps = createStructuredSelector({
    tags:inventoryActiveFiltersTagSelector,
    inventoryFilters:inventoryFiltersSelector
})
export default connect(mapStateToProps,mapDispatchToProps)(ActiveFiltersGroup)
