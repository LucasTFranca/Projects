// Referencia: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function createToken(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

module.exports = createToken;
