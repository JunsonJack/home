//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()
//3.调用app.listen(端口号，启动成功后的回调函数)，启动服务器

app.listen(82,()=>{
    console.log('express server running at http:127.0.0.1')
})