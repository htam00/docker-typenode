import { Request, Response, NextFunction } from 'express'

export const register = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Register')
}

export const login = async (req: Request, res: Response) => {
    res.send('Login')
}