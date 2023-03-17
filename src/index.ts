import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import './config/database'
import AuthRoute from './routes/AuthRoute'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

app.use('/api/auth', AuthRoute)


app.listen(process.env.PORT, () => { console.log(`Server running on port ${process.env.PORT}`) })