const NodeMediaServer = require("node-media-server");

const httpConfig = {
  port: 8000, // HTTP port
  allow_origin: "*", // Allow requests from any origin (you may restrict this as needed)
  mediaroot: "./media", // Directory where the server will look for media files
};

const rtmpConfig = {
  port: 1935, // RTMP port, 1935 is the default port for RTMP
  chunk_size: 60000, // The size in bytes of the chunks into which the media file will be divided
  gop_cache: true, // If true, the server will use a GOP (Group of Pictures) cache. This will improve the efficiency of RTMP streaming but will also increase memory usage
  ping: 10, // Ping interval in seconds. This will send a ping message to the client to check if the connection is alive
  ping_timeout: 60, // Ping timeout in seconds
};

const transformationConfig = {
  ffmpeg: "./ffmpeg",
  tasks: [
    {
      app: "live",
      hls: true,
      hlsFlags: "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
      hlsKeep: false,
    },
  ],
  MediaRoot: "./media",
};

const config = {
  http: httpConfig,
  rtmp: rtmpConfig,
  trans: transformationConfig,
};

const nms = new NodeMediaServer(config);
nms.on("preConnect", (id, args) => {
    console.log(
      "[NodeEvent on preConnect]",
      `id=${id} args=${JSON.stringify(args)}`,
    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postConnect", (id, args) => {
    console.log(
      "[NodeEvent on postConnect]",
      `id=${id} args=${JSON.stringify(args)}`,
    );
  });
  
  nms.on("doneConnect", (id, args) => {
    console.log(
      "[NodeEvent on doneConnect]",
      `id=${id} args=${JSON.stringify(args)}`,
    );
  });
  
  nms.on("prePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePublish]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
    // Implement authentication for your streamers...
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPublish]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
  });
  
  nms.on("donePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePublish]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
  });
  
  nms.on("prePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePlay]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPlay]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
  });
  
  nms.on("donePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePlay]",
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
    );
  });
nms.run();