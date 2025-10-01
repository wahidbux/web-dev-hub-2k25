# HaloTasks - Modern To-Do Application

A beautiful, modern, and feature-rich to-do application built with vanilla JavaScript, HTML, and CSS. HaloTasks offers a delightful user experience with smooth animations, intuitive design, and comprehensive task management features.

## 🚀 Live Demo

**[View Live Demo](https://guileless-puffpuff-5721ee.netlify.app/level2/todo/v2/)**

## ✨ Features

### Core Functionality

- ✅ **Add Tasks**: Create new tasks with a simple input field
- ✅ **Edit Tasks**: Double-click any task to edit inline, or use the edit button
- ✅ **Mark Complete**: Toggle task completion with animated checkboxes
- ✅ **Delete Tasks**: Remove tasks with smooth slide-out animations
- ✅ **Filter Tasks**: View all, active, or completed tasks
- ✅ **Clear Completed**: Bulk remove all completed tasks
- ✅ **Persistent Storage**: Tasks automatically save to localStorage

### User Experience

- 🎨 **Modern Design**: Clean, dark theme with gradient accents
- 📱 **Responsive**: Optimized for desktop and mobile devices
- ⚡ **Smooth Animations**: Polished transitions and micro-interactions
- ♿ **Accessibility**: Full keyboard navigation and ARIA labels
- 🔍 **Quick Focus**: Press `/` to quickly focus the input field
- 📊 **Task Counter**: Real-time display of active and total tasks

### Technical Features

- 🏗️ **Modular Code**: Well-organized, commented JavaScript
- 💾 **Local Storage**: Automatic data persistence
- 🎯 **No Dependencies**: Pure vanilla JavaScript
- 🔧 **Debug API**: Built-in debugging functions for development

## 🛠️ Installation & Setup

### Option 1: Download and Run Locally

1. Download or clone this repository
2. Navigate to the HaloTasks folder
3. Open `index.html` in your web browser
4. Start managing your tasks!

### Option 2: Run with Live Server (Recommended for Development)

1. Install VS Code and the Live Server extension
2. Open the HaloTasks folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"
4. The application will open in your browser with hot reload

## 📁 Project Structure

```bash
HaloTasks/
├── index.html          # Main HTML structure
├── script.js           # Application logic and functionality
├── style.css           # Styling and animations
└── README.MD           # This documentation
```

## 🎮 How to Use

### Basic Operations

1. **Add a Task**: Type in the input field and press Enter or click "Add"
2. **Mark Complete**: Click the checkbox next to any task
3. **Edit a Task**: Double-click on the task text or click the edit (✎) button
4. **Delete a Task**: Click the delete (🗑) button
5. **Filter Tasks**: Use the "All", "Active", or "Completed" buttons
6. **Clear Completed**: Click "Clear completed" to remove all finished tasks

### Keyboard Shortcuts

- **Enter**: Add new task or save edit
- **Escape**: Cancel edit mode
- **/**: Focus the input field from anywhere
- **Double-click**: Edit task text
- **Tab**: Navigate between elements

## 💻 Technical Details

### Data Structure

Each task is stored as an object with the following structure:

```javascript
{
  id: "unique_identifier",
  text: "Task description",
  completed: false,
  createdAt: 1635123456789
}
```

### Storage

- Tasks are automatically saved to `localStorage` under the key `halotasks.v1`
- Data persists between browser sessions
- Graceful error handling for storage failures

### Browser Compatibility

- Modern browsers with ES6+ support
- localStorage support required
- CSS Grid and Flexbox support recommended

## 🎨 Customization

### Color Scheme

The app uses CSS custom properties for easy theming. Key variables in `:root`:

- `--bg`: Background color
- `--accent`: Primary accent color (mint green)
- `--accent-2`: Secondary accent color (sky blue)
- `--text`: Text color
- `--muted`: Muted text color

### Animations

- Task addition: Pop-in animation
- Task removal: Slide-out animation
- Hover effects: Smooth transform and shadow changes
- Checkbox: Scale and color transitions

## 🐛 Known Issues & Improvements Needed

### High Priority Issues

1. **Data Export/Import**: No way to backup or transfer tasks between devices
2. **Task Categories**: Cannot organize tasks into different categories or projects
3. **Due Dates**: No support for task deadlines or scheduling
4. **Task Priority**: Cannot set task importance levels
5. **Search Functionality**: Cannot search through tasks when list gets long

### Medium Priority Issues

6. **Drag & Drop**: Cannot reorder tasks by dragging
7. **Task Descriptions**: Only supports single-line task text
8. **Undo Function**: No way to recover accidentally deleted tasks
9. **Bulk Operations**: Cannot select and operate on multiple tasks at once
10. **Offline Support**: No service worker for offline functionality

### Low Priority Issues

11. **Themes**: Only dark theme available, no light mode option
12. **Font Size**: No user preference for text size
13. **Task Statistics**: Limited analytics about productivity
14. **Keyboard Shortcuts**: Could use more keyboard shortcuts for power users
15. **Task Templates**: No way to create recurring or template tasks

### Enhancement Ideas

16. **Subtasks**: Support for nested or hierarchical tasks
17. **Task Notes**: Additional details or descriptions for tasks
18. **Tags System**: Label tasks with custom tags
19. **Time Tracking**: Track time spent on tasks
20. **Collaboration**: Share task lists with others
21. **Reminders**: Browser notifications for important tasks
22. **Data Sync**: Cloud synchronization across devices
23. **Task Archive**: Archive completed tasks instead of deleting
24. **Performance**: Virtualization for handling thousands of tasks
25. **PWA Features**: Make it installable as a Progressive Web App

## 🤝 Contributing

We welcome contributions! Here are some ways you can help:

1. **Fix Issues**: Pick any issue from the list above
2. **Add Features**: Implement new functionality
3. **Improve Design**: Enhance the UI/UX
4. **Write Tests**: Add unit tests for better reliability
5. **Documentation**: Improve this README or add code comments

### Development Guidelines

- Follow the existing code style and structure
- Test your changes thoroughly
- Update documentation for new features
- Consider accessibility in all changes
- Keep the vanilla JavaScript approach (no frameworks)

## 📄 License

This project is open source and available under the [MIT License](../../../LICENSE).

## 🙏 Acknowledgments

- Designed and built for the Web Dev Hub 2025 project
- Uses modern CSS features for styling and animations
- Built with accessibility and user experience in mind

---

**Happy Task Managing! 📝✨**
