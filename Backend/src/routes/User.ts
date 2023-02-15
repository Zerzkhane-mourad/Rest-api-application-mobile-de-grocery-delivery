import express from "express";
import UserAuthentication from '../controllers/Usercontroller';
import { UserSigninValidator } from "../middlewares/userValidator";

const route : any = express.Router();    

route.post('/signup', UserAuthentication.signUp);
route.get('/signin', UserAuthentication.login)



export default route