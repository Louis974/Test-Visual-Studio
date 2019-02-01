// JavaScript source code
Start-Transcript -OutputDirectory "C:\Users\louis\Desktop\PowerShell\Logs"
If ((Test-Path "C:\Users\louis\Desktop\PowerShell\LIVRAISON.csv") -eq $True) {Write-Host "Present"}
Else {Write-Host 'Absent'}
Stop-Transcript

$date = (Get-Date).AddDays(-1).ToString("dd-MM-yyyy")
Set-Location "C:\Users\louis\Desktop\PowerShell\SAUVEGARDES\"
New-Item -Name "$date" -ItemType directory 

Copy-Item "C:\Users\louis\Desktop\PowerShell\LIVRAISON.csv" -Destination "C:\Users\louis\Desktop\PowerShell\SAUVEGARDES\$date"


Set-location "C:\Users\louis\Desktop\TP PowerShell"

$P = Import-Csv "LIVRAISON.csv"

ForEach ($item in $P)

{

$Nom = $item.Nom
$CSV_NAME = $item.Commande+".csv"
$path = "C:\Users\louis\Desktop\TP PowerShell\Livreur\" + $item.Nom
$CSV_PATH = $path + "\" + $CSV_NAME

If(!(test-path $path))
    {
	New-Item -ItemType Directory -Force -Path $path
    }
    New-Item -ItemType file -Force -Path $CSV_PATH
}

0Set-location "C:\Users\louis\Desktop\TP PowerShell"

$P = Import-Csv "Livraison.csv"

ForEach ($item in $P)

{

$Nom = $item.Nom
$Prenom = $item.Prenom
$path = "C:\Users\louis\Desktop\TP PowerShell\Livreur\" + $item.Nom
If(!(test-path $path))
    {
	New-Item -ItemType Directory -Force -Path $path
    }
