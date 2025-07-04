//다음은 Express에서 express-session을 사용하는 코드입니다. 아래 결과 화면을 보고 세션 값을 설정하고 읽어오는 코드를 완성하세요. 완성 후 세션의 동작 과정에 대해 주석으로 설명하세요.

const express = require('express')
const session = require('express-session')
const app = express()

app.use(
   session({
      name: 'myname', // 세션 쿠키 이름 설정
      secret: 'your-secret-key', // 세션 암호화에 사용할 비밀 키 설정
      resave: false, // 세션이 수정되지 않아도 다시 저장할지 여부
      saveUninitialized: false, // 초기화되지 않은 세션을 저장할지 여부
      cookie: { 
         maxAge: 1000 * 60 * 60, // 쿠키의 유효 기간 설정 (1시간)
         secure: false, // HTTPS를 사용하는 경우 true로 설정
      },
   })
)
//1. localhost:3000/set-session 으로 request
//2. 서버에서 session 객체를 생성, 동시에 session id를 만들어줌
//3. session id를 암호화한 후 쿠키에 저장에 쿠키를 response
//4. 쿠키가 사용자 pc에 저장됨

app.get('/set-session', (req, res) => {
   // username: 지은 으로 세션 설정
   req.session.username = '지은' 
   res.send('세션이 설정되었습니다!') 
})


//5. localhost:3000/get-session 으로 request( session id가 저장된 쿠키를 같이 서버에 전달)
//6.서버에서는 쿠키안에 저장된 session id를 이용해 session을 찾음
//7. 해당 session에 저장된 username 값을 읽어와서 응답
//8. 응답으로 username 값이 있으면 'Hello, 지은'을 출력하고, 없으면 '세션이 없습니다.'를 출력
//9. 클라이언트는 응답을 받아서 화면에 출력
app.get('/get-session', (req, res) => {
   // username에 들어있는 값 출력
   const username = req.session.username
   res.send(username ? `Hello, ${username}` : '세션이 없습니다.')
}) //삼항 연산자를 사용하여 username이 존재하면 해당 값을 출력하고, 그렇지 않으면 '세션이 없습니다.'라는 메시지를 출력합니다.
//// 세션 설정 후 '/set-session' 경로로 GET 요청을 보내면 세션이 설정되고, '/get-session' 경로로 GET 요청을 보내면 세션에 저장된 username 값을 읽어와서 응답합니다.

// 세션의 동작 과정:
// 1. 클라이언트가 '/set-session' 경로로 GET 요청을 보내면, 서버는 세션에 username을 '지은'으로 설정합니다.
// 2. 세션이 설정되면 클라이언트는 세션 ID를 쿠키로 받게 됩니다.
// 3. 클라이언트가 '/get-session' 경로로 GET 요청을 보내면, 서버는 클라이언트의 세션 ID를 확인하고 세션에서 username 값을 읽어옵니다.
// 4. 서버는 username이 존재하면 해당 값을 응답으로 보내고, 그렇지 않으면 '세션이 없습니다.'라는 메시지를 응답으로 보냅니다.




app.listen(3000, () => console.log('Server running on http://localhost:3000'))

