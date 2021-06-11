const request= require('request')
const geocoding=require('./utils/geocode')
const forecast=require('./utils/forecast')
const address=process.argv[2]
if(!address){
    return console.log("write location")
}
geocoding(address,(error,{location})=>{
    if(error){
        return console.log("error ")
    }
    forecast(location,(error,Fdata)=>{
        if(error){
            return console.log("forecast error")
        }
        console.log("Location",location)
        console.log("Dear Data", Fdata)
        
    })

})



