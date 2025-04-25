# Ensure you are logged in to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "MyResourceGroup"
$location = "EastUS"
$vmName = "MyVM"
$vmSize = "Standard_DS1_v2"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Replace with a secure password
$networkName = "MyVNet"
$subnetName = "MySubnet"
$ipName = "MyPublicIP"
$nicName = "MyNIC"
$imagePublisher = "Canonical"
$imageOffer = "UbuntuServer"
$imageSku = "18.04-LTS"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network and subnet
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location `
  -Name $networkName -AddressPrefix "10.0.0.0/16"
Add-AzVirtualNetworkSubnetConfig -Name $subnetName -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location `
  -Name $ipName -AllocationMethod Dynamic

# Create a network interface
$subnet = Get-AzVirtualNetworkSubnetConfig -Name $subnetName -VirtualNetwork $vnet
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location `
  -Name $nicName -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id

# Create the virtual machine
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize
$vmConfig = Set-AzVMOperatingSystem -VM $vmConfig -Linux -ComputerName $vmName `
  -Credential (New-Object PSCredential ($adminUsername, (ConvertTo-SecureString $adminPassword -AsPlainText -Force)))
$vmConfig = Set-AzVMSourceImage -VM $vmConfig -PublisherName $imagePublisher `
  -Offer $imageOffer -Skus $imageSku -Version "latest"
$vmConfig = Add-AzVMNetworkInterface -VM $vmConfig -Id $nic.Id

New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig