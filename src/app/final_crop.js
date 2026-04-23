const { Jimp } = require('jimp');
const fs = require('fs');

async function robustCrop() {
  try {
    // 1. 임시 경로로 파일 복사 (인코딩 문제 방지)
    const logoFile = 'public/images/logo.png';
    const tempFile = 'public/images/temp_logo.png';
    fs.copyFileSync(logoFile, tempFile);

    console.log('Reading image...');
    const image = await Jimp.read(tempFile);
    console.log(`Original Dimensions: ${image.bitmap.width}x${image.bitmap.height}`);

    // 2. 자동 크로핑 (상하단 여백 제거, 허용 오차 10% 적용)
    console.log('Autocropping with tolerance...');
    image.autocrop({ tolerance: 0.1, leaveBorder: 0 });
    
    console.log(`Cropped Dimensions: ${image.bitmap.width}x${image.bitmap.height}`);

    if (image.bitmap.width > 0 && image.bitmap.height > 0) {
      await image.write(logoFile);
      console.log('Logo cropped and saved successfully.');
    } else {
      console.log('Autocrop resulted in empty image. Skipping save.');
    }
    
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  } catch (err) {
    console.error('Execution Error:', err);
  }
}

robustCrop();
