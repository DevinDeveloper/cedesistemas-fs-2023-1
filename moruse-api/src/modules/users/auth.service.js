const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const {USER_PASS_WRONG, SERVER_ERROR, USER_ALREADY_EXIST} = require('./utils/dict.errors');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email,password) => {
  try {
    const user = await User.findOne({email, isRemoved: false});
    if(user){
      const match = await bcrypt.compare(password,user.password);
      if(match){
        const payload = {
          idUser: user._id
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET);
        return {
          token
        };
      }
    }
    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, {error});
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const info = async (idUser) => {
  try{
    const user = await User.findById(idUser);
    return user || errorHandler(USER_NOT_FOUND);
  }catch(error){
    throw error.handled ? error : errorHandler(SERVER_ERROR, {error});
  }
}

const signup = async (userData) => {
  try {
    const validateUser = await User.findOne({email: userData.email});
    if(validateUser) {
       throw errorHandler(USER_ALREADY_EXIST);
    }
    const passHashead = await bcrypt.hash(userData.password, 10);
    userData.password = passHashead;
    const user = User(userData);
    await user.save(); // -> insert_one({ ... })
    return {
      message: 'user created',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

module.exports = {
  login,
  logout,
  info,
  signup
}
