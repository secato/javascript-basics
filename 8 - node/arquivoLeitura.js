const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (!err) {
        conteudo = JSON.parse(conteudo)
        console.log(conteudo.db.host, ':', conteudo.db.port)
    }
})


// le um arquivo json e ja converte para um objeto
const config = require('./arquivo.json')
console.log(config.db.user)  

// __dirname constante qu representa o diretorio atual
fs.readdir(__dirname, (err, arquivos) => {
    arquivos.forEach(arquivo => {
        console.log(__dirname + `\\${arquivo}`)
    });
})


