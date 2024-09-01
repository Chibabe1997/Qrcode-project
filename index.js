
//1. Use the inquirer npm package to get user input.
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";


const prompt = inquirer.createPromptModule();
inquirer
.prompt([{
   message: "Type in Your URL: ",
   name: "URL",
}
    
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log("FILE URL: "+url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 
    //var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("This file has been saved");
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
//3. Create a txt file to save the user input using the native fs node module.

