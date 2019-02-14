import express from 'express';
import jwt from 'jsonwebtoken';
import * as appConfig from '../../config';
import * as utils from '../../services/utils';
    
export default class SessionRoutes{

    constructor(UserModel){
        this.UserModel = UserModel;
    }

    routes(){
        const sessionRouter = express.Router();

         /**
         * @swagger
         * /sessions:
         *   get:
         *     tags:
         *     - "sessions"
         *     produces:
         *       - application/json
         *     description: Generate a token
         *     summary: Generate a session
         *     parameters:
         *       - in: query
         *         name: email
         *         required: true
         *         description: email of the user
         *         schema:
         *           type: string
         *           example: admin@healthera.com
         *       - in: query
         *         name: password
         *         required: true
         *         description: The password of the user
         *         schema:
         *           type: string
         *           example: foozle
         *     responses:
         *       200:
         *         description: Success
         */
        sessionRouter.route('/')
            .get((req, res)=>{
                const {email, password} = req.query;
                
                try{

                    if(!email){
                        throw new Error('email is required');
                    }

                    if(!password){
                        throw new Error('password is required');
                    }

                    this.generateSession(res, email, password);
                }catch(error){
                    res.status(400)
                    .json({
                        success: false,
                        message: error.message
                    })
                }
            });

        return sessionRouter;
    }

    async generateSession(res, email, password){
        
        const user = await this.UserModel.findOne({where: {email, password: utils.getHash(password), status: 'A'}});

        if(user){
            const token = jwt.sign({user}, appConfig.config.secret, {expiresIn: '10d'});

            res.status(200)
            .json({
                success: true,
                results: {userId: user.id, 
                          username: user.name, 
                          token}
            })
        }else{
            res.status(400)
            .json({
                success: false,
                message: 'invalid user'
            })
        }
    }
}