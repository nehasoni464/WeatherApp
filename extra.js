// const url =
// "http://api.weatherstack.com/current?access_key=d69a734e06c051b6c8f8e5beb04450c3&query=New York";


//  request({url:url,json:true},(error, response)=>{
    //  const data=JSON.parse(response.body)
    //  console.log(data.body)
  
//      if(error){
//     console.log("oops no internet connection")

//       }
//       else if(response.body.error){
//     console.log("something went wrong")
//       }
//      else{
//     console.log("The temperature is "+response.body.current.temperature)
//        }
//    })


// direct Code geocoding
// const geocodingURL='https://api.mapbox.com/geocoding/v5/mapbox.places/njgvhvg.json?access_token=pk.eyJ1IjoibmVoYXNvbmkxMCIsImEiOiJja20waGgyNm8ybW5kMndwM3FzenAxM3MxIn0.y2e8qiwx8sDhj_4JqjA41Q'

// request({url:geocodingURL,json:true},(error, response)=>{
//     if(error){
//         console.log("oops something went wrong")
//     }
//     else if(response.body.error===undefined)
//     {
//         console.log('not found Location')
//     }
//     else
//     {
//         console.log(response.body.error)
//         console.log(`Longitude `,response.body.features[0].center)}
// })

