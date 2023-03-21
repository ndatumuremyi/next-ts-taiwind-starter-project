import process from 'process';

const Keys = {
  HOST: process.env.HOST || 'example.com',
  DEFAULT_API: process.env.DEFAULT_API || 'example.com',
  REACT_APP_ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN || 'sc',
  ISSERVER: typeof window === 'undefined',
  TOKEN_DATA: process.env.TOKEN_DATA || 'TOKENdATA',
  REDIRECT_LINK: process.env.REDIRECT_LINK || 'kllskdlUioioN82983&&&8923',
};

export default Keys;
