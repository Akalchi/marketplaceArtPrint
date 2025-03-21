# ArtPrint - Marketplace for Creative Experiences
![readme](https://github.com/user-attachments/assets/2d32e565-ead9-40e4-8746-a18f3af5cdff)

**ArtPrint** is a digital marketplace that connects experience facilitators with curious individuals looking to explore new forms of expression and well-being. The platform offers workshops in disciplines such as writing, ceramics, photography, cooking, and more.

## Key Features
- Access to unique and personalized experiences.
- Intuitive platform for booking, discovering, and connecting with facilitators.
- Direct support for creators and cultural entrepreneurs.
- Opportunity to develop skills, relax, and connect with others.
- 🔒 Secure inputs to protect against code injection attacks.
- ✅ Includes unit tests for critical components and logic.


## Technologies Used
- **Frontend**: React v19, Swiper, Vitest v3.
- **Styling**: CSS Modules.
- **Authentication**: Login and registration form.

## Installation & Usage
### Prerequisites
- Node.js and npm installed.

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your_user/artprint.git
   cd artprint
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project in development mode:
   ```sh
   npm run dev
   ```

## Project Structure
```plaintext
/src
  ├── components
  │   ├── authform/ (Authentication form)
  │   ├── experience-card/ (Experience cards)
  │   ├── experience-categories/ (Experience categories)
  │   ├── experience-modal/ (Experience detail modal)
  │   ├── footer/ (Footer)
  │   ├── hero-section/ (Main section)
  │   ├── navbar/ (Navigation bar)
  ├── pages
  │   ├── Catalog.jsx (Experience catalog)
  ├── styles
  ├── App.jsx (Main application file)
```

## Main Routes
- `/` - Homepage with HeroSection and experience categories.
- `/catalog` - Experience catalog.
- `/login` - Authentication form.

## Testing

    🧪 Unit tests are implemented to ensure the correctness of components and application logic.
    Run tests with:

    npm test

## Security

    All form inputs are validated and sanitized to prevent code injection and unauthorized backend access.

Contributions

If you would like to contribute to ArtPrint, please open an issue or submit a pull request with improvements.

## Contributions
If you would like to contribute to **ArtPrint**, please open an issue or submit a pull request with improvements.

## License
This project is licensed under the MIT License.

---
**ArtPrint** - Creativity with soul. 🎨

