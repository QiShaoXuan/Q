const fs = require('fs')
const docDir = 'readme.md'
const title = `# Q\n`

fs.writeFile(docDir, title, function () {
  fs.readdir('./src/components', function (err, files) {
    if (err)  throw err
    files.forEach((fileName) => {
        writeDoc(fileName)
    })
  })
})

function writeDoc(fileName) {
  fs.readFile(`./src/components/${fileName}`, 'utf8', (err, data) => {
    let doc = ''
    let comments = getComment(data)
    let Fns = getFn(data)

    comments.forEach((v, i) => {
      doc += `${v}\n${Fns[i]}\n`
    })

    fs.appendFile(docDir, doc, 'utf8', function (err) {
      if (err) throw err
      console.log('write down')
    })
  })
}

function getComment(dataStr) {
  return dataStr.match(/\/\/.*\n/g).map(v => v.replace(/\/\/\s+/, '')).map((v) => `\n## ${v}`)
}

function getFn(dataStr) {
  return dataStr.replace(/\/\/.*\n/g, '').match(/{[\s\S]*}/)[0].replace(/^{/, '').replace(/}$/, '').split('},').filter(v => v.replace(/^\s+/, '')).map(v => {
    return `\`\`\`javascript\n${v.replace(/^\s+/,'')}}\n\`\`\``
  })
}
