
let weather=document.querySelector('form');
let seartch = document.querySelector('input');
let result = document.getElementById('result')
weather.addEventListener('submit',(e)=>{
    e.preventDefault();

    fetch(`/weather?address=${seartch.value}`).then((responce)=>{
    responce.json().then((data)=>{
        if(!data.error){
        console.log('data must be send');
        console.log(data);
        console.log(data.Temp);
        result.textContent=` your currnt location temp ${data.Temp}`}
        else{
            console.log(data.error);
        }
    })
})
})