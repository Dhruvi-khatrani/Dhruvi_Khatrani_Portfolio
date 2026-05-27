$lockPath = Join-Path $PSScriptRoot "..\.next\dev\lock"
$stopped = $false

if (Test-Path $lockPath) {
  try {
    $lock = Get-Content $lockPath -Raw -ErrorAction Stop | ConvertFrom-Json
    if ($lock.pid) {
      taskkill /PID $lock.pid /F 2>$null
      if ($LASTEXITCODE -eq 0) {
        Write-Host "Stopped dev server (PID $($lock.pid), port $($lock.port))"
        $stopped = $true
      }
    }
  } catch {
    Write-Host "Lock file busy. Stopping processes on dev ports..."
  }
}

if (-not $stopped) {
  foreach ($port in 3000, 3001, 3002, 3003, 3004, 3005) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    foreach ($conn in $connections) {
      $proc = Get-Process -Id $conn.OwningProcess -ErrorAction SilentlyContinue
      if ($proc -and $proc.ProcessName -eq "node") {
        taskkill /PID $conn.OwningProcess /F 2>$null
        Write-Host "Stopped node on port $port (PID $($conn.OwningProcess))"
        $stopped = $true
      }
    }
  }
}

Start-Sleep -Milliseconds 500
Remove-Item $lockPath -Force -ErrorAction SilentlyContinue

if (-not $stopped) {
  Write-Host "No dev server found. Run npm run dev to start."
}
