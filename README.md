OCR on a peer connection video
==============================

This app is built using [rtc-glue](https://github.com/rtc-io/rtc-glue) and [rtc-switchboard](https://github.com/rtc-io/rtc-switchboard) as well as [ocrad.js](http://antimatter15.github.io/ocrad.js/demo.html) for OCR.



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