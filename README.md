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
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

1. Start the server:

   ```bash
   node index.js
   ```

   The server will listen on:
   - **RTMP**: `rtmp://localhost/live`
   - **HLS**: `http://localhost:8000/live/index.m3u8`

### Testing the Server

- **Streaming**: Use OBS Studio with the server URL `rtmp://localhost/live` and any stream key (e.g., `test`).
- **Viewing**: 
  - In VLC, open the network stream `rtmp://localhost/live/test`.
  - In a browser, open an HLS player with the URL `http://localhost:8000/live/test/index.m3u8`.

## Docker Support

This project also includes a Docker setup for easier deployment.

### Building the Docker Image

1. Make sure you have Docker installed on your machine.
2. Navigate to the project directory and build the Docker image:

   ```bash
   docker build -t live-stream-server .
   ```

### Running the Docker Container

1. Run the Docker container:

   ```bash
   docker run -p 1935:1935 -p 8000:8000 live-stream-server
   ```

   The server will be accessible at:
   - **RTMP**: `rtmp://localhost/live`
   - **HLS**: `http://localhost:8000/live/index.m3u8`

### Streaming with Docker

- Use OBS Studio to stream to the RTMP URL `rtmp://localhost/live` with any stream key (e.g., `test`).
- For viewing, follow the same instructions as before:
  - In VLC, open the network stream `rtmp://localhost/live/test`.
  - In a browser, open an HLS player with the URL `http://localhost:8000/live/test/index.m3u8`.
