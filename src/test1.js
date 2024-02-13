const request = require('request');
const wapp = (address,callback)=>{
const url =`https://api.weatherapi.com/v1/current.json?key=923db5dcaac1470cb36155736242501&q=${address}`;

request({url:url},(e,r)=>{
        if (e) {
            callback('error',undefined)
        }else{
            let data = JSON.parse(r.body)
            if (data.error) {
                callback(undefined,"we can not find that location tem")
            }else{
                callback(undefined,data.current.temp_c);
            }
        }
})
}
// wapp('kolkata',(error,request)=>{
//     if (error==='error') {
//         console.log('please connect internet');
//     }
//     if (request) {
//         console.log( `your corrent temp ${request}`);
//     }
// });
module.exports.wapp=wapp;

