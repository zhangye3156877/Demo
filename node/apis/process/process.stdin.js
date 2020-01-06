process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  let chunk
  // 使用循环确保我们读取所有的可用数据。
  while ((chunk = process.stdin.read()) !== null) {
    if (chunk === '\n') {
      process.stdin.emit('end')
      return
    }
    process.stdout.write(`收到数据: ${chunk}`)
  }
})

process.stdin.on('end', () => {
  process.stdout.write('结束监听')
})