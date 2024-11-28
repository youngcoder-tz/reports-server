import * as dotenv from 'dotenv';
dotenv.config();

export const JwtConfig = {
  secret: process.env.JWT_SECRET || '=adc426811a4aef57a9d237c95cff2cc41b39e8126b4385f529c08e75d395656176e8f7d556a9bb5d58271fec95eab25891c156a8a5e1d41e13e3a6be9a477d7f', 
  expiresIn: '1h', // Token expiration time
  refreshExpiresIn: '7d', // Refresh token expiration time
};
