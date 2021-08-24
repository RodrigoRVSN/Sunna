import wiotp.sdk.device
import random
import time

myConfig = { 
    "identity": {
        "orgId": "0mnobt",
        "typeId": "luz",
        "deviceId": "LUZ_ON_OFF"
    },
    "auth":{
        "token": "VWGRG9gfFQtmm1zjVu"
    }
}

client = wiotp.sdk.device.DeviceClient(config=myConfig)

def myCommandCallBack(cmd):
    print("Command received: %s" % cmd.data)


client.connect()

while(True):
    myData = {'pressão' : random.randint(20, 50),
                'pressao[mmHg]' : random.randint(760, 1050),
                'pressao[atm]' : random.randint(1, 10),
                'estado_luz' : False}

    client.publishEvent(eventId="pressao", msgFormat="json", data=myData, qos=0, onPublish=None)
    client.commandCallback = myCommandCallBack
    time.sleep(2)