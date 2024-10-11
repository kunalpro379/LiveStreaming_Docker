# Live Stream Server

This project is a live streaming server built with Node.js and Node Media Server. It supports RTMP and HLS streaming protocols, making it suitable for applications like live events, video conferencing, and online education.

## Getting Started

Follow the instructions below to set up and run the project.

### Prerequisites

- **Node.js** (version 14.x or later)
- **npm** (Node package manager)
- **FFmpeg** (if not using Docker)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/live-stream-server.git
   cd live-stream-server
Install the dependencies:

bash
Copy code
npm install
Running the Server
Start the server:

bash
Copy code
node index.js
The server will listen on:

RTMP: rtmp://localhost/live
HLS: http://localhost:8000/live/index.m3u8
Testing the Server
Streaming: Use OBS Studio with the server URL rtmp://localhost/live and any stream key (e.g., test).
Viewing:
In VLC, open the network stream rtmp://localhost/live/test.
In a browser, open an HLS player with the URL http://localhost:8000/live/test/index.m3u8.
