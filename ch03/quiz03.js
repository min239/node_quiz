const express = require('express')
const path = require('path')
const app = express()
//다음 코드는 Express에서 정적 파일을 제공하는 static 미들웨어를 설정하는 코드입니다. 올바르게 static 미들웨어를 사용하도록 빈칸을 채우세요.
// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public'))) 
//'/'생략가능하다
 

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
