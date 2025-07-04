/*4. EventEmitter를 이용하여 다음 동작을 구현하세요:

1. 이벤트 이름: `dataReceived`
2. 이벤트가 발생했을 때, dataReceived를 콘솔에 출력하세요.
3. 추가로, 이벤트가 발생할 때마다 "이벤트가 발생했습니다!"라는 메시지도 출력되도록 하세요. */
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('dataReceived', (data) => {
    console.log(`Received data: ${data}`)
})

myEmitter.on('dataReceived', () => {
    console.log('이벤트가 발생')
})
myEmitter.emit('dataReceived', '이벤트가 발생')

