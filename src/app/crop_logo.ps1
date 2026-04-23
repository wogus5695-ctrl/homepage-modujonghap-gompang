Add-Type -AssemblyName System.Drawing
$src = "C:\Users\wogus\OneDrive\Desktop\모두종합환경_곰팡이제거\public\images\logo.png"
$dest = "C:\Users\wogus\OneDrive\Desktop\모두종합환경_곰팡이제거\public\images\logo.png"

$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap($img)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

Write-Host "Analyzing image: $($bmp.Width)x$($bmp.Height)..."

# Find the bounding box of non-transparent pixels
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check for non-transparent OR non-white pixels (in case background is white)
        if ($c.A -gt 10 -and ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

if ($maxX -gt $minX -and $maxY -gt $minY) {
    Write-Host "Cropping to: x=$minX, y=$minY, w=$($maxX-$minX+1), h=$($maxY-$minY+1)"
    $rect = New-Object System.Drawing.Rectangle($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
    
    # Use a standard 32bppArgb pixel format to avoid cloning issues
    $cropped = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $img.Dispose()
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Success: Logo cropped and saved."
} else {
    $img.Dispose()
    Write-Host "Error: Could not determine bounding box. All pixels seem to be background."
}
$bmp.Dispose()
