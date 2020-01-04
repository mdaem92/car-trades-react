import text from './text'
import moment from 'moment'



const formatAndFetch= ()=> {
    console.log('fetching makes and models')
    const textByLine = text.toString().split("\n")
    const makes = []
    const data = []

    textByLine.forEach((line)=>{
        const l = line.split(",")
        const lineModels = l.slice(1,l.length)
        const make = l[0]
        makes.push({value:make,label:make})
        const formattedModels = lineModels.map((model)=>{
            return {value:model.trim(), label:model}
        })
        data.push({make,models:formattedModels})
    })
    const formattedData = data.reduce((acc,item)=>{
        const {make:name,...rest}= item
        acc[name]=rest
        return acc
    },{})

    return {
        makes,
        formattedData
    }

}
const formatAndFetchForAntD = ()=>{
    console.log('fetching makes and models ANTD')
    const textByLine = text.toString().split("\n")

    return textByLine.map((line)=>{
        const l = line.split(",")
        const lineModels = l.slice(1,l.length)
        const value = l[0]
        const label = l[0]
        const children = lineModels.map(model=>{
            return {
                value:model,
                label:model
            }
        })
        console.log({
            value,
            label,
            children
        })
        return {
            value,
            label,
            children
        }

    })
}

export const antDCarData = formatAndFetchForAntD()
export const carData = formatAndFetch()

export const fetchMileage = (from,to)=>{
    const s =5000
    const mileages = new Array(((to-from)/s)).fill(0)
    return mileages.map((value,index)=>{
        // return (index+1)*step
        return {value:(index+1)*s+from, label:(index+1)*s+from}
    })

}

export const fetchYears = (yearFrom,yearTo)=>{
    const currentYear  = parseInt(moment().format('YYYY'))
    let years =[]
    if(yearTo){
        years = new Array(yearTo-yearFrom+1).fill(0)

    }else{
        years = new Array(currentYear-yearFrom+1).fill(0)
    }
    return years.map((year,index)=>{
        // return index+yearFrom
        return {value:index+yearFrom, label:index+yearFrom}
    })
    
}
export const conditionData = [
    {value:'new', label:'New'},
    {value:'used', label:'Used'}

]





