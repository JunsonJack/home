//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

//3.挂载路由

//监听客户端的get，post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    res.send({
        name:'张三',
        age:18,
        gender:'男'
    })
})

app.post('/user',(req,res)=>{
    res.send('请求成功')        
})

//打开body发送json数据
app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok')
    
})


app.get('/',(req,res)=>{
    //通过req.query 可以获取到客户端发送过来的查询参数
    //注意 默认情况下 req.query 是一个空对象
    console.log(req.query)

    //http://localhost:82/?name=zhangan&sex='男'

    res.send(req.query)
    
})

//:xx 是一个动态参数
app.get('/user/:id/:name',(req,res)=>{
    //req.params 是动态匹配到的URL参数，默认也是一个空对象
    console.log('params',req.params)
    res.send(req.params)
    //http://localhost:82/user/222/zhangsan
})

//4.启动服务器，端口监听
app.listen(82,()=>{
    console.log('express server running at http:127.0.0.1')
})