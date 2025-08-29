# Artist

A beautiful, cross-platform desktop application for navigating the art world. Artist serves as your creative hub, providing curated resources for digital artists, designers, musicians, and creators of all kinds.

![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)

## 🎨 Features

- **Creative Tools Directory** - Quick access to industry-standard software like Adobe Creative Cloud, Blender, Figma, and more
- **Learning Resources** - Curated tutorials, courses, and educational content from platforms like Skillshare, Domestika, and Proko
- **Inspiration Gallery** - Browse portfolios and art collections from Behance, ArtStation, Dribbble, and virtual museums
- **Community Hub** - Connect with fellow artists through forums, Discord communities, and collaboration platforms
- **Asset Libraries** - Find free resources including stock photos, 3D assets, fonts, and icons
- **Art Marketplace** - Discover platforms to sell and showcase your artwork
- **Dark/Light Theme** - Beautiful UI with theme switching support
- **Cross-Platform** - Available for Windows, macOS, and Linux

## 🚀 Quick Start

### Download Pre-built Releases

Visit the [Releases](https://github.com/guildmasterdev/Artist/releases) page to download the latest version for your platform:

- **Windows**: `Artist-Setup-1.0.3.exe`
- **macOS**: `Artist-1.0.3-mac.dmg` or `Artist-1.0.3-mac.zip`
- **Linux**: `Artist-1.0.3-x64.AppImage`

### Build from Source

#### Prerequisites

- Node.js 18+ and npm
- Git

#### Installation

```bash
# Clone the repository
git clone https://github.com/guildmasterdev/Artist.git
cd Artist

# Install dependencies
npm install

# Run in development mode
npm start

# Build for production
npm run electron:dist
```

## 🛠️ Development

### Project Structure

```
Artist/
├── src/                    # Angular application source
│   ├── app/               # Application components
│   │   ├── components/    # UI components
│   │   │   ├── hero/      # Landing hero section
│   │   │   ├── navigation-hub/  # Main resource navigation
│   │   │   ├── quick-actions/   # Quick action buttons
│   │   │   └── theme-switcher/  # Theme toggle
│   │   └── app.component.*      # Root component
│   └── styles.scss        # Global styles
├── electron/              # Electron main process
│   ├── main.ts           # Main electron file
│   └── preload.ts        # Preload script
├── resources/            # Application resources
│   └── icons/           # App icons for all platforms
└── package.json         # Project configuration
```

### Available Scripts

- `npm start` - Run the app in development mode with hot reload
- `npm run build` - Build the Angular app and compile Electron files
- `npm run electron:dist` - Build distributables for current platform
- `npm test` - Run unit tests
- `npm run lint` - Lint the codebase

### Technologies

- **Frontend**: Angular 17 with standalone components
- **Desktop Framework**: Electron 29
- **Styling**: SCSS with CSS animations
- **Build Tools**: electron-builder, Angular CLI
- **Languages**: TypeScript

## 🎯 Roadmap

- [ ] User preferences and favorites
- [ ] Custom resource collections
- [ ] Offline mode with cached resources
- [ ] Resource search and filtering
- [ ] Integration with creative tool APIs
- [ ] Artist profile creation
- [ ] Collaborative project boards

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**GuildMaster Development**
- Email: contact@guildmasterdev.com
- GitHub: [@guildmasterdev](https://github.com/guildmasterdev)

## 🙏 Acknowledgments

- All the amazing platforms and tools featured in Artist
- The open-source community for the incredible frameworks and libraries
- Artists and creators who inspire us every day

---

Made with ❤️ by GuildMaster Development