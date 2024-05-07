// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// // const myPlaintextPassword = 's0/\/\P4$$w0rD';
// // const someOtherPlaintextPassword = 'not_bacon';

// const Hashpassword = async(password,saltRounds)=>{
//     try{
//         const hash = await hashedpassword(password, saltRounds);
//         return hash;
//     }catch(e){
//         console.log(e);
//     }
// };

// // this is for compare password
// const Comparepassword = async(password, hash)=>{
//     try{
//         return await bcrypt.compare(password, hash);

//     }catch(e){
//         console.log(e)
//     }
// }

module.exports = {Comparepassword, Hashpassword};