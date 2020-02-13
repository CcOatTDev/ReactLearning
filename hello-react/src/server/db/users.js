//import { Connection } from '.';
const { CreateConn } =  require('.');


const Connection = CreateConn;
const all = async() =>{
    return new Promise((resolve,reject) => {
        Connection.query('SELECT * FROM test.user' ,(err,results) =>{
            if(err){
                return reject(err);
            }

            resolve(results);
        });
    });
}

//export default {
//    all
//}

module.exports = {
    all
}