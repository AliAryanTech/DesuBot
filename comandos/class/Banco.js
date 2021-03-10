const mysql = require('mysql');

module.exports =  class Banco {

    static async execSQLQuery(sqlQry, callback){
        
        const connection = mysql.createConnection({
            host     : 'bncxuv7b73j0652lzcaa-mysql.services.clever-cloud.com',
            port     : 3306,
            user     : 'ueobfsizlj8sxjs6',
            password : 'zRMq2s2B8YQuGrlZx1Ns',
            database : 'bncxuv7b73j0652lzcaa'
        });

        var result;

        await connection.query(sqlQry, await function(error, results, fields){
            if(error) {
                connection.end();
                callback("error", error, results);

            }
            else{
                connection.end();
                callback("ok", error, results);
            }  
        });
      }


      static async execSQLQuery2(sqlQry, res){
        const connection = mysql.createConnection({
            host     : 'bncxuv7b73j0652lzcaa-mysql.services.clever-cloud.com',
            port     : 3306,
            user     : 'ueobfsizlj8sxjs6',
            password : 'zRMq2s2B8YQuGrlZx1Ns',
            database : 'bncxuv7b73j0652lzcaa'
        });
       
        connection.query(sqlQry, function(error, results, fields){
            if(error) {
              console.log(error);
              res.json(error);
            }
            else{
              console.log(results);
              res.json(results);
            }  
            connection.end();
            
        });
      }


}

