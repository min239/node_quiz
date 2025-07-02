// 조건:
// 1. 총 메모리 용량 (GB 단위)과 사용 가능한 메모리 용량 (GB 단위)을 출력하세요.
// 2. Node.js의 `os` 모듈을 사용하세요.

const os = require('os')

// 여기에 코드를 작성하세요.
const totalMemory = (os.totalmem() / 1e9).toFixed(2) // gb
const freeMemory = (os.freemem() / 1e9).toFixed(2) // gb    

console.log(`Total Memory: ${totalMemory} GB`)
console.log(`Free Memory: ${freeMemory} GB`)