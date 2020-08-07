const pythonShell = require('python-shell')

const pythonReader = (fileName, args) => {

  const options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: args
  };
  
  pythonShell.PythonShell.run(fileName, options, function(err, results){
    if(err) throw err;
    console.log('results: %j',results);  
    return results;
  });
}

module.exports = pythonReader;

