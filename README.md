## 🚀 IoT on Esp32 development

This application is intended to use an Api, through which it will read and write fields. The fields are responsible for storing sensor and actuator attibutes. It is through them that the Esp32 microcontroller makes decisions, such as turning a led on or off.

## 🛠 Workspace

# /src
- <b>conection.py is the network connection setup.</b>
- <b>firebase-esp.py is the application manager that controls what is running on the esp32.</b>
- <b>house-esp.py that's controll the house and read data from cloud.</b>
- <b>startup.py is the Esp32 boot.</b>
- <b>ufirebase is the Firebase class that allows request/response from the cloud.</b>
- <b>usseclient provides a generator of SSE received through an existing HTTP response.</b>

## 📫 Contribuiting with Sunna

To contribue with Sunna(Esp32), follow the steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <name_branch>`.
3. Make the changes and confirm: `git commit -m '<message_commit>'`
4. Send to original repository: `git push origin <main_branch> / <local>`
5. Send the pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
___