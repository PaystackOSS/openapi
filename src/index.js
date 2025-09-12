import express from 'express'
import fs from 'fs'
import YAML from 'yaml'
import path from 'path'
import open from 'open';

const app = express()
const port = 7070

const __dirname = new URL('.', import.meta.url).pathname;
const file = fs.readFileSync(path.join(__dirname, '../dist/paystack.yaml'), 'utf8')
const oas = YAML.parse(file)

app.use(express.static(path.join(__dirname, '/views')));

app.get('/health', (_, res) => {
    res.send('Server running fine...')
})

app.get('/spec', (_, res) => {
    res.json(oas)
})

app.listen(port, () => {
    console.log(`OAS spec is listening on port ${port}`)
    open(`http://localhost:${port}`);
})
