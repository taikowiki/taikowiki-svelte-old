import mysql from 'mysql';
import dotenv from 'dotenv'
dotenv.config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

let db:mysql.Connection = mysql.createConnection(config);

function connect(){
    db = mysql.createConnection(config);
    db.connect();
    db.on('error', (err) => {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log(err);
            connect();
        }
        else{
            throw err;
        }
    })
}

connect();

let connectTest = setInterval(() => {
    db.query("SELECT * FROM `songs` LIMIT 1", (err, row) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('연결 테스트 완료.')
        }
    })
}, 3600000);//1시간마다 query 실행

export default db;