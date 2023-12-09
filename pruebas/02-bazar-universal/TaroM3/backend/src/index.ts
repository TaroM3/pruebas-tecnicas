import express from 'express'
import cors from 'cors'
import itemsRouter from './routes/items.router'

// const ACCEPTED_ORIGINS = ['http://127.0.0.1:5173', 'http://127.0.0.1:3001']

// const corsOptions: object = {
//   origin: function (origin: string, callback: (err: Error | null, allow?: boolean) => void) {
//     if (ACCEPTED_ORIGINS.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }))
app.disable('x-powered-by')
// app.options('*', cors(corsOptions))
// app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here !!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/items', itemsRouter)
app.use('*', (_req, res) => {
  res.status(404).send({ status: 'error', message: 'Endpoint not found' })
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
