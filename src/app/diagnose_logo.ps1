Add-Type -AssemblyName System.Drawing
$src = "c:\Users\wogus\OneDrive\Desktop\모두종합환경_곰팡이제거\public\images\logo.png"

$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap($img)

Write-Host "Image Size: $($bmp.Width) x $($bmp.Height)"
Write-Host "Checking center pixel color..."
$c = $bmp.GetPixel($bmp.Width / 2, $bmp.Height / 2)
Write-Host "Center Pixel - R:$($c.R) G:$($c.G) B:$($c.B) A:$($c.A)"

Write-Host "Checking corner pixel (background) color..."
$c2 = $bmp.GetPixel(5, 5)
Write-Host "Corner Pixel - R:$($c2.R) G:$($c2.G) B:$($c2.B) A:$($c2.A)"

$img.Dispose()
$bmp.Dispose()
