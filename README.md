# PathFinder 🚀

![PathFinder Home Screenshot](./assets/pathfinder-home-screenshot.png)

PathFinder is a modern, visually stunning React.js web application designed to help users discover their ideal career paths in the Indian job market. Leveraging a beautiful glassmorphism UI, PathFinder provides comprehensive information on 40+ career options, required skills, salary insights, and growth opportunities—all tailored for the Indian context.

## 🌟 Why PathFinder?
- **Personalized Career Discovery:** Search and explore detailed career paths, skill requirements, and industry trends.
- **Glassmorphism Design:** Enjoy a modern, responsive, and visually appealing interface with smooth gradients and glass-like effects.
- **Data-Driven Insights:** Access up-to-date salary ranges, job market statistics, and growth trajectories for each career.
- **Session-Based History:** Effortlessly track your exploration journey and revisit previously viewed careers.
- **Popular & Trending Careers:** Instantly discover the most in-demand roles and skills in India.
- **No Database Required:** All data is stored in JSON format for simplicity and speed.
- **Accessible & Responsive:** Designed for all devices, with semantic HTML and accessibility best practices.

## 🛠️ Tech Stack
- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS (with custom glassmorphism utilities)
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Icons:** Lucide React
- **Data Storage:** JSON files (no external database)

## ✨ Key Features
- Career search and discovery with smart filtering
- Detailed skill, salary, and education breakdowns
- Session-based history tracking
- Popular and trending careers display
- Responsive navigation and UI
- Modern glassmorphism theme and color palette
- Smooth transitions and hover effects

## 📸 Screenshot

> ![PathFinder Home Screenshot](./assets/pathfinder-home-screenshot.png)

## 🚀 Get Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PathFinder
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Live Demo
Check out the live app: [career-path-finder.netlify.app](https://career-path-finder.netlify.app)

## 📞 Support & Contact
For support, email sharmaram2504@gmail.com or create an issue in this repository.

Connect with the creator:
- GitHub: [sharmaram25](https://github.com/sharmaram25)
- LinkedIn: [ram-sharma-20rs02](https://www.linkedin.com/in/ram-sharma-20rs02)
- Instagram: [ramsharma.25](https://www.instagram.com/ramsharma.25)
- Email: sharmaram2504@gmail.com

---

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Glassmorphism Theme
- Modern glass-like effects with backdrop blur
- Gradient backgrounds and borders
- Semi-transparent elements
- Smooth transitions and hover effects

### Color Palette
- Primary: Blue gradients (`blue-500` to `purple-600`)
- Secondary: Purple gradients (`purple-500` to `pink-600`)
- Accent: Emerald and teal tones
- Text: White and gray variations

## 📱 Key Pages

### Home
- Hero section with search functionality
- Career statistics and categories
- Popular careers preview
- Interactive career discovery

### Career Details
- Comprehensive career information
- Required skills visualization
- Salary ranges and growth paths
- Education requirements

### History
- Session-based browsing history
- Search and filter capabilities
- Clear history functionality

### Popular
- Trending careers display
- Category-wise statistics
- Sorting and filtering options

### About
- Company information
- Team showcase
- Core values and mission
- Contact form

## 🔧 Configuration

### Tailwind CSS
Custom utilities for glassmorphism effects are defined in `tailwind.config.js`:
- `glassmorphism` - Standard glass effect
- `glassmorphism-card` - Card-specific glass effect
- `glassmorphism-nav` - Navigation glass effect

### Context Providers
- `CareerContext` - Manages career data and search functionality
- `HistoryContext` - Handles session-based history tracking

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify or connect your Git repository

The project includes a `netlify.toml` configuration file for automatic deployment.

### Manual Deployment

1. Build the project
2. Upload the `dist` folder to your hosting provider
3. Configure server redirects for React Router (SPA)

## 📊 Data Structure

Career data is stored in JSON format with the following structure:
- Career details (title, description, category)
- Required skills array
- Salary ranges by experience level
- Education requirements
- Growth paths and career progression
- Industry insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Design inspiration from modern glassmorphism trends
- Career data curated for the Indian job market
