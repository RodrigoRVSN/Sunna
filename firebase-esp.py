import _thread
import gc
import conection
import house

gc.collect()

# Wifi SetUp
conection.wifi("VITORINO 2.4 G", "33435337")

try:
    _thread.start_new_thread(house.houseLamps(), ())
except:
    print("Error: unable to start thread")