//
// With credits to https://github.com/eugeneware/ffmpeg-static
//
var os = require('os');
var path = require('path');

var platform = os.platform();
if ((platform !== 'darwin' && platform !== 'linux' && platform !== 'win32') || platform === 'linux') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch();
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var mkvmergePath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'mkvmerge.exe' : 'mkvmerge'
);

exports.path = mkvmergePath;
