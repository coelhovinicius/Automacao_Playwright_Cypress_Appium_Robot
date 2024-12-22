* Settings *
Library  AppiumLibrary

*** Variables ***
...   

* Keywords *
Abrir QAZANDOFOOD dahora
Open Application  http://localhost:4723
...                 automationName=UiAutomator2
...                 platformName=Android
...                 deviceName=vinicius
...                 app=${EXECDIR}/app/qazandofood.apk
...                 udid=emulator-5554



* Test Cases *
