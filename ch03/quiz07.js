const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

try {
   fs.readdirSync('uploads')
} catch (error) {
   console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
   fs.mkdirSync('uploads')
}

const upload = multer({
   //uploads 폴더에 파일을 올리고
   // 현재시간-파일명.png 형태로 이미지 파일을 저장
   // 파일 크기 제한은 7MB
   storage: multer.diskStorage({
   destination(req, file, done) {
      done(null, 'uploads/') // uploads 폴더에 저장
   },
   filename(req, file, done) {
      const ext = path.extname(file.originalname) // 파일 확장자 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext) // 파일명 설정
   },
}),
limits: { fileSize: 7 * 1024 * 1024 }, // 파일 크기 제한 (7MB)
})

app.get('/uploadFile', (req, res) => {
   res.sendFile(path.join(__dirname, 'multipart.html')) // multipart.html 파일 응답
})

//업로드된 파일 정보를 출력하고 클라이언트 화면에 'ok'를 보여줌
app.post('./uploadFile', upload.single('image'), (req, res) => {
   console.log(req.file) // 업로드된 파일 정보 출력
   res.send('ok') // 클라이언트에게 'ok' 응답
})


app.get(
   '/',
   (req, res, next) => {
      console.log('GET / 요청에서만 실행됩니다.')
      next()
   },
   (req, res) => {
      throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
   }
)

app.use((err, req, res, next) => {
   console.error(err)
   res.status(500).send(err.message)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
