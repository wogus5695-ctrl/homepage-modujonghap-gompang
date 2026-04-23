const Jimp = require('jimp');
const path = require('path');

const logoPath = path.join(process.cwd(), 'public/images/logo.png');

async function cropLogo() {
  try {
    console.log('Reading logo from:', logoPath);
    const image = await Jimp.read(logoPath);
    
    console.log('Original size:', image.bitmap.width, 'x', image.bitmap.height);
    
    // Autocrop removes whitespace/transparency from edges
    image.autocrop();
    
    console.log('New size:', image.bitmap.width, 'x', image.bitmap.height);
    
    await image.writeAsync(logoPath);
    console.log('Logo cropped and saved successfully.');
  } catch (err) {
    console.error('Error cropping logo:', err);
    process.exit(1);
  }
}

cropLogo();
