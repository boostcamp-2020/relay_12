const pythonShell = require('python-shell')
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const pythonReader = (fileName, args, postId) => {

  const options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: ['-u'],
    scriptPath: './nlp/',
    args: args
  };
  
  pythonShell.PythonShell.run(fileName, options, function(err, results){
    if(err) throw err;
    let sql ="";
    if (results.indexOf("True") != -1) sql = "UPDATE board SET isChat=false WHERE id=?"
    else sql = "UPDATE board SET isChat=true WHERE id=?"
      
    connection.query(sql, postId, (error, rows) => {
      if (error) {
        throw error;
      }
    })
  });
}


module.exports = pythonReader;

