const express = require('express')
const app = express()

app.use((req, res, next) => {
   // 첫 번째 미들웨어: 요청에 따라 다른 미들웨어 호출
   if (req.query.role === 'admin') {
      adminMiddleware(req, res, next) // 관리자 역할인 경우 adminMiddleware 호출
   } else {
      userMiddleware(req, res, next) // 사용자 역할인 경우 userMiddleware 호출
   }
})

function adminMiddleware(req, res, next) {
   console.log('Admin middleware executed') // 관리자 미들웨어 실행
   // res.locals.username = '관리자' // 관리자 이름을 저장할 수도 있습니다.
  
   res.send('Welcome, Admin!') // 관리자에게 응답
   // next() // 이 줄을 주석 처리하면 다음 미들웨어로 넘어가지 않습니다.
}

function userMiddleware(req, res, next) {
   console.log('User middleware executed') // 사용자 미들웨어 실행
   // res.locals.username = '사용자' // 사용자 이름을 저장할 수도 있습니다.
  
   res.send('Welcome, User!') // 사용자에게 응답
   // next() // 이 줄을 주석 처리하면 다음 미들웨어로 넘어가지 않습니다.
}

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
