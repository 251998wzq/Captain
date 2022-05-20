// const express = require('express');
//
// const bodyParser = require('body-parser');
//
// const app = express();
//
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(require('cors')());
// app.use(express.json());
//
// const port = 3000;
//
// const mongoose = require('mongoose');

// 连接数据库
// mongoose.connect('mongodb://localhost:27017/element-admin', {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useCreateIndex: true,
// }, ()=>{})

// 创建数据表结构
// const Article = mongoose.model('Article', new mongoose.Schema({
//     title: {type: String},
//     body: {type: String},
// }))
// const data = 'hello'
// app.get('/api/test', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(res.data)
//     // res.send('index');
// })

// 新增文章
// 捕获接口请求
// 创建一个Article
// 键名&类型相同则会将数据push进去
// 再将article返回给前端

// app.post('/api/articles', async (req, res) =>{
//     // req前端请求的form对象的属性body
//     const article = await Article.create(req.body)
//     const value = 'hello'
//     res.send(value)
// })


// app.listen(port, () => {
//     console.log(`http://localhost:${port}`)
// })




var express = require("express")

var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/data/test', (req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');  //用于处理跨域
//     res.json({user: {userName: `小陈同学·，userAge: 23`}})
//     console.log('test')
// })

app.post('/data', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    res.json({
        body: {
            msg: 'post请求'
        },
        title: {
            msg: 'title'
        }
    })
    console.log(req.body)
})

//监听30oo端口
app.listen(3000, () => {
        console.log("server is running  http://localhost:3000/data")
    }
)
