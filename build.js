const fs = require('fs')
const reg = /{[\s\S]*}/



fs.readdir('./src/components',function (err,files) {
  if(err) return console.error(err)

  let doc = ''
  files.forEach((fileName) => {
    // doc += writeMd(fileName)
    console.log(writeMd(fileName))
  })
  fs.writeFile('read.md', doc, 'utf8', function (err) {
    if (err) throw err;
    console.log('down');
  })
})

function writeMd(fileName) {
  return fs.readFile(`./src/components/${fileName}`, 'utf8', (err, data) => {
    console.log(data)
    let doc = ''
    let comments = getComment(data)
    let Fns = getFn(data)

    comments.forEach((v, i) => {
      doc += `${v}\n${Fns[i]}\n`
    })
    return doc
  })
}

function getComment(dataStr) {
  return dataStr.match(/\/\/\s\S*/g).map(v => v.replace(/\/\//, ''))
}

function getFn(dataStr) {
  return dataStr.replace(/\/\/\s\S*/g, '').match(/{[\s\S]*}/)[0].replace(/^{/, '').replace(/}$/, '').split('},').map((v) => {
    let replaceS = v.replace(/^\s+/, '')
    return replaceS ? replaceS + '}' : ''
  })
}


