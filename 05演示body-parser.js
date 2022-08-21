//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()
//3.调用app.listen(端口号，启动成功后的回调函数)，启动服务器

//导入解析表单数据的中间件 body-parser
//express内置中间件是基于body-parser这个第三方中间件进一步封装出来的
const parser = require('body-parser')

//注册中间件
app.use(parser.urlencoded({extended:false}))

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok')
    
})


app.listen(82,()=>{
    console.log('express server running at http:127.0.0.1')
})