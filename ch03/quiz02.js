const express = require('express')
const app = express()
const bodyParser = require('body-parser')// body-parser 모듈을 가져옵니다.
//다음 코드는 Express에서 body-parser 미들웨어를 사용하는 코드입니다. JSON 요청 본문을 처리할 수 있도록 코드를 완성하세요.
// JSON 요청 본문 처리를 위한 body-parser 미들웨어 설정
app.use(bodyParser.json()) // body-parser 모듈을 사용하여 JSON 요청 본문을 파싱한다.


app.post('/data', (req, res) => {

   res.send(`Received data: ${JSON.stringify(req.body)}`)

})
// 서버를 3000번 포트에서 실행

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
// 이 코드는 Express 서버를 설정하고, JSON 요청 본문을 처리하는 body-parser 미들웨어를 사용하여 POST 요청을 처리합니다.
// 클라이언트가 '/data' 엔드포인트로 JSON 데이터를 POST하면, 서버는 해당 데이터를 JSON 문자열로 변환하여 응답합니다.

