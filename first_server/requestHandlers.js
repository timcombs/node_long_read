var exec = require('child_process').exec;

function start(response) {
  console.log('Request handler START was called');

  exec('ls -lah', function(error, stdout, stderr) {
    if (error) {
      console.log(error);
      return;
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log('Request handler UPLOAD was called');

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload');
  response.end();
}

exports.start = start;
exports.upload = upload;