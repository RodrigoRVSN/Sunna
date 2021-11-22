import network 

sta_if = network.WLAN(network.STA_IF) 

def wifi(ssid, password):
    """ 
    Wifi Settings
    :parameter ssid that's the wifi's name  
    :parameter password that's the wifi's password 

    """
    if(sta_if.isconnected() == False):
        print("Not conected")
        sta_if.active(True)                                               # Activating the station mode 
        sta_if.connect(ssid, password)                                    # Conect to your wifi router
    
    verify()

def verify():
    """ 
    Verify wifi settings
    """
    if(sta_if.isconnected() == True):
        print("Conected")
        print(sta_if.ifconfig())