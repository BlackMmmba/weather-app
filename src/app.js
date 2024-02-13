const express = require('express');

const fs = require('fs');

const port = process.env.PORT || 3000;

const path = require('path');

const hbs = require('hbs');

const test1 = require('./JSWAPP/test1')

const test2=require('./JSWAPP/test2')

const viewPath = path.join(__dirname,'../template/views') 

const partiPath = path.join(__dirname,'../template/Partials')

const pathData = path.join(__dirname,'../public')

const app = express()

app.set('views',viewPath)

app.set('view engine','hbs')

app.use(express.static(pathData));
// registertion for Partials
hbs.registerPartials(partiPath);

// creating routs for app 
app.get('/',(req,res)=>{
        res.render('index',
        {
            text:'world',
            title:'Buffer page',
            name:'Utsav Mitra'
        });
});
app.get('/about',(req,res)=>{
        res.render('about',{code:'Hello.jpg',title:'logs',name:'Utsav Mitra'})
})

app.post('/hope',(req,res)=>{
    res.render('hope')
})

app.get('/help',(req,res)=>{
        res.render('help',{title:'help page',name:'Utsav Mitra'});
})
app.get('/help/*',(req,res)=>{
        res.send('In this help page we can not find it')
});
app.get('/weather',(req,res)=>{
        if (! req.query.address) {
             return res.send({
                error:'you have to must provide your address'
             })   
        }
        test2.serve(req.query.address,(error,IPresponce)=>{
                if (!error) {
    
                        test1.wapp(IPresponce.city,(error,Wresponce)=>{
    
                                if (!error) {
    
                                        res.send({
    
                                                ip:req.query.address,
    
                                                location:IPresponce.city,
    
                                                Temp:Wresponce
    
                                        });
    
                                }else{
                                        res.send('there is no data')
                                }
                     })   
                }else{ 
                        res.send("can't get that data")
                }
        }
        )
                  
            

})
app.get('/products',(req,res)=>{
        // geting inpute through query strring
        const {subject,ratting}=req.query
        if (!subject) {
            return res.send({error:'you have to provide subject'})   
        }
        res.render('products',{sub:subject,rate:ratting});
})
app.get('*',(req,res)=>{
        res.render('404')
})
       
app.listen(port,()=>{
    console.log(`server is lissaning port 3000 ${port}`);
    })

//console.log(appdata);