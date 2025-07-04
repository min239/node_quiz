const express = require('express')
const app = express()



// 전역 미들웨어: 모든 요청에 대해 실행됩니다.
app.use((req, res, next) => {
   // req: 요청에 대한 정보가 들어있는 객체
   // res: 응답을 처리하는 객체
   // next: 다음 미들웨어로 넘어가기 위한 함수
   // 미들웨어에서 요청 정보를 처리할 수 있습니다.
   // 예를 들어, 요청의 메소드와 URL을 출력할 수 있습니다.
   // 요청 정보를 콘솔에 출력
   // req.method: HTTP 메소드 (GET, POST 등)
   console.log(`Request Method: ${req.method}, Request URL: ${req.url}`)
   next() 


})
//http://localhost:3000/
app.get('/', (req, res) => {
   // 홈 페이지 요청에 대한 응답
   res.send('Hello, World!')

})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
// 이 코드는 Express 서버를 설정하고, 전역 미들웨어를 사용하여 모든 요청의 메소드와 URL을 콘솔에 출력합니다.
// 클라이언트가 '/' 엔드포인트로 GET 요청을 보내면, 서버는 "Hello, World!"라는 응답을 반환합니다.
// 서버는 3000번 포트에서 실행되며, "Server running on http://localhost:3000" 메시지가 콘솔에 출력됩니다.

