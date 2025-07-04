const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

//1 localhost:3000/setId로 첫 request를 보내면
//2 서버에서 쿠키생성(key: id value: user1)
//생성한 쿠키를 클라이언트에 응답
//3 쿠키가 설정되고,쿠키생성(key: id value: user1) 이후에 localhost:3000/getId로 요청을 보내면
//4 쿠키에 저장된 id 값을 읽어서 환영 메시지를 출력하는 서버를 구현

app.get('/setId', (req, res) => {
   // 1시간 동안 유효하고 name: id, value: user1인 쿠키를 만든다
   res.cookie('id', 'user1', { maxAge: 1000 * 60 * 60 })
   res.send('쿠키가 설정되었습니다.')
})

//5 localhost:3000/getId로 request(쿠키와 같이)

//6 쿠키 값으로 response로 환영 메시지를 출력 

app.get('/getId', (req, res) => {
   // 쿠키 value값 읽어서 화면에 출력하기
   const id = req.cookies.id
   res.send(`환영합니다, ${id}님.`)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
