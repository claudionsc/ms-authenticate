import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route';

const app = express()

app.use(express.json())//middleware para interpretar json
app.use(express.urlencoded({ extended: true}))

app.use(usersRoute)

app.get('/status', (req:Request , res:Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso!' })
});

app.listen(3000, () => {
    console.log('Executando na porta 3000')
})