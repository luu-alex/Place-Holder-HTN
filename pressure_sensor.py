import RPi.GPIO as GPIO
import time

import requests

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)
GPIO.setup(14, GPIO.IN)

prev_input4 = 0
prev_input14 = 0

try:
    while True:
        # read from sensor
        
        input4 = GPIO.input(4)
        input14 = GPIO.input(14)
        
        # if last reading low, current one high, then alert
        
        if ((not prev_input4) and input4):
            print("Under pressure 4")
            
            r = requests.get('http://a7a37537.ngrok.io/under', params = {'seat': 'four'})
            print(r)
            
        if ((not prev_input14) and input14):
            print("Under pressure 14")
            
            r = requests.get('http://a7a37537.ngrok.io/under', params = {'seat': 'fourteen'})
            print(r)
        if ((prev_input4) and not input4):
            print("Over pressure 4")
            
            r = requests.get('http://a7a37537.ngrok.io/over', params = {'seat': 'four'})
            print(r)
            
        if ((prev_input14) and not input14):
            print("Over pressure 14")
            
            r = requests.get('http://a7a37537.ngrok.io/over', params = {'seat': 'fourteen'})
            print(r)

        # update previous input
        
        prev_input4 = input4
        prev_input14 = input14
        # pause a bit       
        time.sleep(0.10)
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()