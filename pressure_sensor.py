import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)

prev_input = 0

try:
    while True:
        # read from sensor
        
        input = GPIO.input(4)
        
        # if last reading low, current one high, then alert
        
        if ((not prev_input) and input):
            print("Under pressure")
            
        # update previous input
        
        prev_input = input
        
        # pause a bit
        
        time.sleep(0.10)
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()