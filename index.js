const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const bodyparser = require('body-parser');

let posts = []; //글(임시적으로 사용하는 변수) 데이터

//파일을 불러오기(읽기)
const readfile = fs.readFileSync('postDB.json', 'utf-8');

//오브젝트 코드로 변환
const jsonData = JSON.parse(readfile);

//post에 배열값을 추가(복사)
posts = [...jsonData];

//ejs 를  view엔진으로 설정하기
app.set('view engine', 'ejs');

//정적파일 경로 지정(외부css파일 불러오기)
app.use(express.static("public"));

//post방식으로 라우팅하기 위해 모듈 추가
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//home 라우팅
app.get('/', function(req, res){
    res.render('pages/index.ejs', {posts})
})

//create라우팅
app.post('/create', function(req, res){
    const value = req.body;
    value.name = req.body.name;
    value.desc = req.body.desc;
    value.tdate = req.body.tdate;
    
    //posts 배열 에 글 추가
    posts.push(value);
    //DB 파일에 글 저장
    fs.writeFileSync('postDB.json', JSON.stringify(posts));
    //console.log(posts)
    //홈게시판으로이동(화면에 보이기)
    res.redirect('/');
});

//delete 라우팅(글 삭제요청)
app.post('/delete/:id', function(req, res){
    const id = req.params.id;
    console.log(id);
    //post배열의 값을 삭제(id값에 해당하는 posts 삭제)
    posts.splice(id, 1);
    console.log(posts);
    //db파일에 저장
    fs.writeFileSync('postDB.json', JSON.stringify(posts));
    res.redirect('/');
})

const port = 3001;
app.listen(port,() =>{
    console.log(`sever running at ${port}`);
});