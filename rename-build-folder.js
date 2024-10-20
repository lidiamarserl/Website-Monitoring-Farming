const fs = require('fs-extra');
const path = require('path');

const oldFolder = './build';
const newFolder = './dist';
const htaccessFile = path.join(newFolder, '.htaccess');
const tempHtaccess = path.join(__dirname, '.htaccess_backup');

// Pindahkan .htaccess ke tempat sementara jika ada
fs.pathExists(htaccessFile)
  .then(exists => {
    if (exists) {
      return fs.move(htaccessFile, tempHtaccess);
    }
  })
  .then(() => {
    // Hapus folder `dist` jika sudah ada
    return fs.remove(newFolder);
  })
  .then(() => {
    // Ganti nama `build` menjadi `dist`
    return fs.rename(oldFolder, newFolder);
  })
  .then(() => {
    // Pindahkan kembali .htaccess ke folder dist jika sebelumnya ada
    return fs.pathExists(tempHtaccess).then(exists => {
      if (exists) {
        return fs.move(tempHtaccess, htaccessFile);
      }
    });
  })
  .then(() => {
    console.log('Build folder renamed and .htaccess preserved successfully!');
  })
  .catch(err => {
    console.error('Error during the process:', err);
  });
