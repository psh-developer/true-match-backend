require('dotenv').config();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const axios = require('axios');
const User = require('../model/UserModel');

const userController = {
    check: async (req,res) => {
        // return res.json(req.User)
    },

    signup: async () => {
        try{
            let {email, password, name} = req.body;
            let user = await User.signup(email, password, name);
        }catch(e){

        }
    },

    login: async () => {
        try{

        }catch(e){

        }

    },

    resetpassword: async() =>{
        try{

        }catch(e){

        }

    },

    logout: async () =>{
        try{

        }catch(e){

        }
    }
}
