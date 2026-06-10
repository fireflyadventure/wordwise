$port = 3001
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port"

$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png'  = 'image/png'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
    '.woff2'= 'font/woff2'
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath
    if ($localPath -eq '/') { $localPath = '/index.html' }

    $filePath = Join-Path $root ($localPath -replace '/', '\')

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath)
        $mime = $mimeTypes[$ext]
        if (-not $mime) { $mime = 'application/octet-stream' }

        $response.ContentType = $mime
        $response.StatusCode = 200
        $response.AddHeader('Access-Control-Allow-Origin', '*')
        $response.AddHeader('Cache-Control', 'no-cache')

        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
        $response.ContentLength64 = $msg.Length
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.OutputStream.Close()
}
