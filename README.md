# socket.io 

## one-to-all demo with mobile client

Server emitting events to all connected clients

### How to run

with SSH key:
```bash
git clone git@github.com:gk3000/socket.io_one_to_all_mobile_client_demo.git
```

with authorization token (password):
```bash
git clone https://github.com/gk3000/socket.io_one_to_all_mobile_client_demo.git
```

then:
```bash
cd socket.io_one_to_all_mobile_client_demo
cd server
npm i
nodemon
```

in another terminal window:
```bash
cd client
npm i
npm start
```

in another terminal window
```bash
cd mobileClient
npm i
npx expo start
```

in the browser open http://localhost:3000 to see the client with real-time data updates sent from the server

open the mobile app either in simulator or on your device with Expo Go.
