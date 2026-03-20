# Plex Stationarr

A modern EPG-style web interface for Plex Media Server that displays your media library in a TV guide format.

## Features

- **EPG-Style Interface**: Browse your media in a familiar TV guide layout
- **Real-time Updates**: Auto-refresh content with configurable intervals
- **Video Playback**: Stream media directly in the browser with position memory
- **Flexible Content Types**: Support for libraries, video playlists, and music playlists
- **Responsive Design**: Works on desktop and mobile devices
- **Hover Tooltips**: Detailed media information on hover
- **Synchronized Scrolling**: Timeline and channels scroll together for perfect alignment

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Plex Server**
   - Edit the Plex server URL and token in the settings (⚙️ button)
   - Default: `http://YOUR_PLEX_SERVER:32400` with token `YOUR_PLEX_TOKEN_HERE`

3. **Start the Server**
   ```bash
   npm start
   ```

4. **Access the Interface**
   - Open `http://localhost:3000` in your browser
   - Or access from your network at `http://your-ip:3000`

## Configuration

Use the settings panel (⚙️ button) to configure:

- **Plex Server**: URL and authentication token
- **Content Selection**: Choose which libraries and playlists to display
- **Display Options**: Time range (6, 12, or 24 hours)
- **Interface Settings**: Tooltips, animations, channel logos
- **Playback Settings**: Auto-play, volume, position memory
- **Auto-refresh**: Automatic content updates

## Technical Details

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js with Express
- **Media Server**: Plex Media Server API integration
- **Video Streaming**: HTML5 video with HLS support

## File Structure

```
plex-stationarr/
├── index.html          # Main HTML structure
├── app.js              # Core application logic
├── style.css           # Styling and responsive design
├── server.js           # Express server
├── package.json        # NPM dependencies and scripts
└── README.md           # This file
```

## Development Status

This is an active development project with ongoing improvements:

- ✅ Core EPG functionality
- ✅ Video playback with position memory
- ✅ Settings management
- ✅ Auto-refresh
- ✅ Playlist support
- 🔄 Current time indicator (in progress)
- 📋 Future: Collections and Categories support

## Contributing

This project is actively developed. Feel free to submit issues and feature requests.

## License

MIT License - see package.json for details.