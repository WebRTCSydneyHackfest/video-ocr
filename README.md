rtcio-demo-glue
===============

An example app for setting up a video conference using [rtc-glue](https://github.com/rtc-io/rtc-glue) and [rtc-switchboard](https://github.com/rtc-io/rtc-switchboard).

The "app" is found in public/index.html and demonstrates:
* how to get access to the local video camera in a video element; the rtc-capture attribute provides constraints on what to capture, e.g. camera:0 us the first camera or min:1280x720 to set the resolution
* how to declare the remote video element; make sure rthe tc-stream attribute points to the id of a local video camera element
* how to set the signalhost when you're running it on a node.js server



Getting started:

1. Clone the repo:
    ```
    git clone https://github.com/rtc-io/rtcio-demo-glue.git
    ```

2. Install node dependencies (it's assumed you have node installed):
    ```
    npm install
    ```

3. Run the server:
    ```
    npm start
    ```

4. Find the application at the following url:
    ```
    http://localhost:1337/index.html
    ```

5. Load the URL in a second browser to establish the video conference:
    ```
    http://localhost:1337/index.html
    ```

To start the app on a different port, run it as:
    ```
    NODE_PORT=3020 npm start
    ```

You can also run it with a different signalling server. Just edit public/js/common.js and change the signalhost.