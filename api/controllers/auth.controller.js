import User from '../models/user.model.js';

import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup =  async (req, res,next) => {
    const {username, email, password} = req.body;

    // Validate request
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    //hashing the password to make it secure
    const hashedPassword =bcryptjs.hashSync(password, 10);

    const newUser = new User({ 
      username, 
      email, 
      //using the hashed password that we have created
      password: hashedPassword 
    });  

    try {

      await newUser.save();
      res.json('Signup successful' );

    } catch (error) {
      next(error);
    }
    
}
