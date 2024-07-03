
const express = require('express');
const morgan = require('morgan');
const { Next } = require('react-bootstrap/esm/PageItem');

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:false}))

app.get('/hello/:username',(req,res)=>{
    console.log(req.params.username)
    res.send(`hello ${req.params.username.toUpperCase()}`)
})

app.use((req,res,next)=>{
    if(req.query.login === 'Luis@gmail.com'){
        res.send('bienvenido')
        next()
    }else{
      res.send('no autorizado')
    }
})

app.get('/suma/:x/:y',(req,res)=>{
    console.log(req.params.x)
    console.log(req.params.y)
    const resultado = parseInt(req.params.x) + parseInt(req.params.y)
    res.send(`El resultado es :${resultado}`)
})
app.get('/user/:username/photo',(req,res)=>{
    if(req.params.username === 'Luis'){
        res.send(`aqui va una foto de ${req.params.username}`)
    }
})

app.get('/nombre/:nombre/edad/:edad',(req,res)=>{
    res.send(`el usuario ${req.params.nombre} tiene ${req.params.edad} años`)
    console.log(req.params)
})
 app.listen(3000)
 console.log(`hola puerto: ${3000}`)