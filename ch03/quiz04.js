const express = require('express')
const app = express()

app.get('/', (req, res) => {
   throw new Error('Something went wrong!')
})
//다음 코드는 오류 처리 미들웨어를 정의하는 코드입니다. HTTP 상태 코드 500과 오류 메시지를 응답하도록 코드를 완성하세요.


// 오류 처리 미들웨어 오류가발생하면 바로 여기로 온다!!
app.use((err, req, res, next) => {
   // 에러 메시지를 콘솔에 출력
   console.error(err.stack)
   // HTTP 상태 코드 500과 에러 메시지를 JSON 형식으로 응답
   res.status(500).send({ error: err.message })
   // res.status(500).json({ error: err.message })
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
// 이 코드는 Express 서버를 설정하고, 오류 처리 미들웨어를 사용하여 발생한 오류를 처리합니다.
// 클라이언트가 '/' 엔드포인트로 요청을 보내면, 의도적으로 오류를 발생시키고, 오류 처리 미들웨어가 이를 처리하여 HTTP 상태 코드 500과 오류 메시지를 JSON 형식으로 응답합니다.

