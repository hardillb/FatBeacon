#Eddystone Fat Beacon 

A first pass at a Eddystone Fat Beacon

##Install

    git clone https://github.com/hardillb/FatBeacon.git

    npm install

##Running

    node index.js

Check the bleno [README.md](https://github.com/sandeepmistry/bleno) for how to run as none root user on Linux

Also make sure bluetoothd is stopped so it's built in GATT server 
doesn't get in the way, you will have to bring the hci device back
afterwards.