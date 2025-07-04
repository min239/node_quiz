const { error } = require('console')
const fs = require('fs')

function copyFileWithStreams(srcPath, destPath) {
   // 스트림(createReadStream과 createWriteStream)을 사용해 source.txt 파일을 destination.txt로 복사하는 프로그램을 작성
   //- 복사 진행 중 에러가 발생하면 해당 에러 메시지를 출력해야 합니다.
   //- 복사가 완료되면 "복사가 완료되었습니다!"를 출력하세요.
   const readStream = fs.createReadStream(srcPath)
   const writeStream = fs.createWriteStream(destPath)

   readStream.pipe(writeStream)

   readStream.on('error', (error) => {
      console.error(`Error reading file: ${err.message}`)
   })

   writeStream.on('error', (err) => {
      console.error(`Error writing file: ${err.message}`)
   })
   writeStream.on('finish', () => {
      console.log('복사가 완료되었습니다.')
   })
}
copyFileWithStreams('source.txt', 'destination.txt')
