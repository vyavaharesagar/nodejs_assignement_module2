var fs = require('fs');
filename = process.argv[2];

try {
  if (fs.existsSync('./'+filename)) {
    console.log("file already exists. try with different name")
  }
  else{
        fs.writeFile(filename, "You are awesome!", err => {
            if (err) {
            console.error(err)
            return
            }
            else{
                console.log("file written successfully")
            }
        })
  }
} catch(err) {
  console.error(err)
}




