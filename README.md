# MapKiosk
Interactive Map Kiosk
Made by Craig Nelstead 2023

******

How it works:

A device with a touch interface should run an account in single app kiosk mode
with the URL to load being the appropriate html file based on the kiosk 
location. 

The html file has a basic interface that will update the embedded iframe
to update the map.

To adjust the location of the kiosk, open the HTML page with a text editor and 
adjust #buildingLocation's data-location value to the desired option from the 
list.

The script works by building a custom URL for the HTML page's iframe with 
the concept3D map embedded. The script has coordinates for various locations 
and uses them as variables to build the URL for the iframe. It also factors in
whether an ADA route has been selected and the floor level of the destination.

******

How to set up the kiosk on a Windows 11 machine:

Log into the kiosk computer as an administrator.

Download all files in this repositorty and place them on the computer that is to
be used as a kiosk. A folder in the C: drive will work fine.

Create a local account to be used as the kiosk account. It must not have admin
privileges, otherwise it cannot be used in kiosk mode.

Log into the local account and adjust the following settings:

-Settings > Bluetooth & devices > Touch

    Set Three- and four-finger touch gestures to Off.

    *This will prevent the user from using the three finger minimize gesture

-Settings > System > Display

    Set Scale to 100%

    *The kiosk is only able to be locked down if the concept3d sidebar is
    offscreen in the iframe. This will only work with the scale set to 100%.

Log back into the administrator account.

Go to Settings > Accounts > Other Users

Under Set up a kiosk, click Get started

Select Choose an existing account and select the local non-admin account you 
just created.

When prompted to choose a kiosk app, scroll to Microsoft Edge and select it, 
then click Next.

When asked how this kiosk will be used, select As a digital sign or interactive
display and click Next.

Enter the file location of the appropriate HTML file in the URL. It should look
something like this:
    file:C:\Map%20Kiosk\rw_lobby.html

    *If the file is local, the URL must begin with file:

    *Any spaces in the URL path must be replaced with %20.

Keep the default setting of 5 minutes so that Edge restarts if no activity has
been detected. In case someone zooms the map way out or does something funny,
this will make sure the page resets to a more welcoming default map.

The kiosk is now set up, but you still need to make sure the account auto logins
when the computer restarts.

Run the registry (regeidt) editor as admin and go to the following address:

    Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device

Double click the DWORD named DevicePasswordLessBuildVersion and set the value
data to 0, then press OK.

Restart the machine and log back in with your admin account.

Run netplwiz.exe (Windows + R > netplwiz).

Select the local account that is being used as the kiosk and uncheck the box
for "Users must enter a user name and password to use this computer." then click
apply.

To configure the auto login, you must enter the local account's user name and
password. After you have done this, click OK.

Now when you reboot the computer, it should automatically log into the local 
account running kiosk mode.