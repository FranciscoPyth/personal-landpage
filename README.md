# Francisco Saggiorato - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. This bilingual portfolio showcases Francisco Saggiorato's work as an AI Developer, Data Engineer, and Data Scientist.

## 🌟 Features

- **Bilingual Support**: Full Spanish and English language support
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Sections**: 
  - Hero section with call-to-action buttons
  - About section
  - Skills showcase
  - Professional experience
  - Project portfolio
  - Contact information
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Built with React 19 and modern web standards

## 🚀 Technologies Used

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Testing**: React Testing Library

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mi-portafolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.\
The build is optimized for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## 🏗️ Project Structure

```
mi-portafolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AboutSection.js
│   │   ├── ContactSection.js
│   │   ├── ExperienceSection.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── Navbar.js
│   │   ├── Portfolio.js
│   │   ├── ProjectsSection.js
│   │   └── SkillsSection.js
│   ├── App.js             # Main application component
│   ├── App.css            # Application styles
│   └── index.js           # Application entry point
├── package.json           # Project dependencies and scripts
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎨 Customization

### Adding New Sections
1. Create a new component in the `src/components/` directory
2. Import and add it to `App.js`
3. Update the navigation in `Navbar.js` if needed

### Modifying Content
- Update the content objects in each component to change text
- Modify the language content for bilingual support
- Update styling using Tailwind CSS classes

### Styling
- The project uses Tailwind CSS for styling
- Custom styles can be added in `src/App.css`
- Tailwind configuration can be modified in `tailwind.config.js`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Francisco Saggiorato**
- **Role**: AI Developer | Data Engineer | Data Science
- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn URL]
- **GitHub**: [Your GitHub URL]

---

Built with ❤️ using React and Tailwind CSS
