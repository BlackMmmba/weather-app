//0b260ee9-f58b-4328-b303-1ba0d29b3993
const request = require('request');
const serve=(IP,callback)=>{
const YOUR_ACCESS_KEY='0b260ee9-f58b-4328-b303-1ba0d29b3993';

const url = `https://apiip.net/api/check?ip=${IP}&accessKey=${YOUR_ACCESS_KEY}`;

request({url:url},(error,responce)=>{
        if (!error) {
            callback(undefined,JSON.parse(responce.body))
        }else{
            console.log('please connect internet',undefined);
        }
}) }

module.exports.serve=serve;