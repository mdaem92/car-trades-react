import React, {useState} from 'react';
import {Row,Col,Radio,Select,Slider} from 'antd'
const {Option} = Select

const AddListingFormSpecs = () => {
    const [state,setState] = useState({
        condition:'new',
        bodyType:undefined,
        seatCount:0,
        prevOwners:'',
        fuelEconomy:undefined,
        fuelType:undefined,
        engineCapacity:undefined,
        enginePower:undefined
    })

    const onChange = (e,selectData)=>{

        if(e.target){
            const{name,value} = e.target
            console.log(`{${name},${value}} = ${e.target}`)
            setState({
                ...state,
                [name]:value,
            })
        }else{
            const {name} = selectData.props
            console.log(`{${selectData.props.name}} = ${e}`)
            setState({
                ...state,
                [name]:e,
            })
        }
    }

    return (
        <>
            <Row>
                <Col span={8} >
                    Condition:
                    <Radio.Group name={'condition'} onChange={onChange} defaultValue={state.condition}>
                        <Radio.Button value="new">New</Radio.Button>
                        <Radio.Button value="used">Used</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    Body type:
                    <Select
                        name={'bodyType'}
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            ['Coupe','Limo','Sedan','Suv','Truck','Other']
                                .map((i)=><Option key={i} name={'bodyType'} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    Seat Count:
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    prev owners:
                    <Radio.Group name={'prevOwners'} onChange={onChange} defaultValue={state.condition}>
                        <Radio.Button value={'1'}>1</Radio.Button>
                        <Radio.Button value={'2'}>2</Radio.Button>
                        <Radio.Button value={'3'}>3</Radio.Button>
                        <Radio.Button value={'more'}>More</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    fuel economy:
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    fuel type:
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    engine capacity
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    Engine power
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>
                <Col span={8}>
                    transmission
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select body"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            [1,2,3,4,5,6,7]
                                .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                        }
                    </Select>
                </Col>

            </Row>

        </>
    );
};

export default AddListingFormSpecs;