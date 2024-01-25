---
title: Schduler
description: Easily Setup scheduler
keywords: [django_schedule, drf_schedule, celery]
---

## celery.py

```python title="{project}/celery.py"
from drf_friend.celery import configure_celery

# Call configure_celery to set up the Celery app
celery_app = configure_celery('project')

if __name__ == '__main__':
    celery_app.start()
```

:::note[replace `project` with your project name]
.
```python
celery_app = configure_celery('project')
:::

## scheduler.py 

```python title="{project}/friend_config/scheduler.py"
from drf_friend.scheduler.schedule import Schedule
from modules.{module_name}.tasks import my_task

schedules = [
  Schedule().task(my_task).name('my-task-one').everyFiveMinutes()
]
```

## Interval Scheduling
Configure tasks to run at specific intervals using various schedule frequencies, expanding beyond the examples provided.

| Method                   | Description                                       |
|--------------------------|---------------------------------------------------|
| `cron('* * * * *')`      | Run the task on a custom cron schedule.           |
| `everySecond()`          | Run the task every second.                        |
| `everyTwoSeconds()`      | Run the task every two seconds.                   |
| `everyFiveSeconds()`     | Run the task every five seconds.                  |
| `everyTenSeconds()`      | Run the task every ten seconds.                   |
| `everyFifteenSeconds()`  | Run the task every fifteen seconds.               |
| `everyTwentySeconds()`   | Run the task every twenty seconds.                |
| `everyThirtySeconds()`   | Run the task every thirty seconds.                |
| `everyMinute()`          | Run the task every minute.                        |
| `everyTwoMinutes()`      | Run the task every two minutes.                   |
| `everyThreeMinutes()`    | Run the task every three minutes.                 |
| `everyFourMinutes()`     | Run the task every four minutes.                  |
| `everyFiveMinutes()`     | Run the task every five minutes.                  |
| `everyTenMinutes()`      | Run the task every ten minutes.                   |
| `everyFifteenMinutes()`  | Run the task every fifteen minutes.               |
| `everyThirtyMinutes()`   | Run the task every thirty minutes.                |
| `hourly()`               | Run the task every hour.                          |
| `hourlyAt(17)`           | Run the task every hour at 17 minutes past the hour.|
| `everyOddHour(minutes=0)`| Run the task every odd hour.                      |
| `everyTwoHours(minutes=0)`| Run the task every two hours.                     |
| `everyThreeHours(minutes=0)`| Run the task every three hours.                   |
| `everyFourHours(minutes=0)` | Run the task every four hours.                    |
| `everySixHours(minutes=0)`  | Run the task every six hours.                     |
| `daily()`                | Run the task every day at midnight.               |
| `dailyAt('13:00')`       | Run the task every day at 13:00.                  |
| `twiceDaily(1, 13)`      | Run the task daily at 1:00 & 13:00.               |
| `twiceDailyAt(1, 13, 15)`| Run the task daily at 1:15 & 13:15.               |
| `weekly()`               | Run the task every Sunday at 00:00.               |
| `weeklyOn(1, '8:00')`    | Run the task every week on Monday at 8:00.       |
| `monthly()`              | Run the task on the first day of every month at 00:00.|
| `monthlyOn(4, '15:00')`  | Run the task every month on the 4th at 15:00.     |
| `twiceMonthly(1, 16, '13:00')`| Run the task monthly on the 1st and 16th at 13:00.|
| `lastDayOfMonth('15:00')`| Run the task on the last day of the month at 15:00.|
| `quarterly()`            | Run the task on the first day of every quarter at 00:00.|
| `quarterlyOn(4, '14:00')`| Run the task every quarter on the 4th at 14:00.   |
| `yearly()`               | Run the task on the first day of every year at 00:00.|
| `yearlyOn(6, 1, '17:00')`| Run the task every year on June 1st at 17:00.      |

