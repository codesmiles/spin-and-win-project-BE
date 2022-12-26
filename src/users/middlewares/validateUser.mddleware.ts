import { NestMiddleware } from '@nestjs/common/interfaces/middleware/nest-middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class ValidateUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log(`This is a valid user middleware`);
    const {authorization} = req.headers;
    if (!authorization) {
      res.status(400).json({
        succesful: false,
        message: `No authorization given`,
      });
    }
    if(authorization === "123" ){
        next();
    }else{
        res.status(403).json({message:`invalid authorization`})
    }
  }
}
