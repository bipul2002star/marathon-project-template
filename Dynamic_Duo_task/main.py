import time
from plyer import notification
if __name__ == '__main__':
    while True:
        notification.notify(
            title="**Health Alert",
             message=":Every 20 minutes, look at something 20 feet away for 20 seconds.\n:Do your squats, Drink Water", 
             app_icon="./icon.ico", timeout=10)
        time.sleep(20*60)
