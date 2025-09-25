# 🛒 Amazon Clone - E-Commerce Web Application

> A full-stack e-commerce web application built with React, Firebase, and Stripe that replicates core Amazon shopping functionality.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/AdamRusso1/amazon-clone)

## 🎯 Project Overview

This Amazon clone demonstrates full-stack web development skills by implementing a complete e-commerce shopping experience. Users can browse products, manage their shopping cart, make secure payments, and view their order history.
## 🌐 Live Demo

**🚀 [View Live Application](https://challenge-db410.web.app/)** ← *Click to try the full application*

*Test with card: 4242 4242 4242 4242 | Any future date | Any CVC*

## 📸 Project Screenshots


### 🔧 Tech Stack

**Frontend:**
- React 18 with Hooks
- React Router v6 for navigation
- React Context API for state management
- CSS3 for styling
- Stripe Elements for payment forms

**Backend & Services:**
- Firebase Authentication for user management
- Firebase Firestore for data storage
- Firebase Functions for payment processing
- Stripe API for secure payments
- Firebase Hosting for deployment

## ✨ Features Implemented

### 🔐 User Authentication
- User registration and login with email/password
- Firebase Authentication integration
- Persistent user sessions
- Sign out functionality
- Protected routes for authenticated users

### 🛍️ Shopping Experience
- Product catalog display with images, titles, prices, and ratings
- Add products to shopping cart
- Remove products from cart
- Real-time cart count in header
- Cart persistence during user session
- Checkout page with order summary

### 💳 Payment Processing
- Secure checkout with Stripe integration
- Payment form with card details validation
- Order total calculation including items and pricing
- Payment confirmation and processing
- Error handling for failed payments

### 📦 Order Management
- Order history page for authenticated users
- Order details including items, quantities, and total cost
- Order date and payment confirmation
- Orders stored in Firebase Firestore
- Individual order display with product details

### 🎨 User Interface
- Responsive design that works on desktop and mobile
- Amazon-inspired header with logo, search bar, and navigation
- Product cards with ratings display (star system)
- Clean checkout and payment forms
- Professional order history layout

## 🏗️ Technical Implementation

### Frontend Architecture
- Component-based React architecture
- State management using Context API and useReducer
- React Router for single-page application navigation
- Reusable components (Header, Product, CheckoutProduct, Order)
- CSS modules for component styling

### Backend Integration
- Firebase Functions for payment processing endpoints
- Firestore database for storing user orders
- Firebase Authentication for user management
- Stripe webhook handling for payment confirmation
- Environment variables for secure API key management

### Key Components
- **App.js**: Main application with routing and authentication state
- **Header.js**: Navigation with user authentication and cart count
- **Home.js**: Product catalog display
- **Product.js**: Individual product cards with add to cart functionality
- **Checkout.js**: Shopping cart summary and checkout initiation
- **Payment.js**: Stripe payment form and order processing
- **Orders.js**: Order history display for authenticated users
- **Login.js**: User authentication forms

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm package manager
- Firebase account with project setup
- Stripe account for payment processing

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/AdamRusso1/amazon-clone.git
cd amazon-clone/amazon-clone

# Install dependencies
npm install

# Create environment file and add your credentials
cp .env.example .env
# Add your Firebase and Stripe keys to .env

# Start development server
npm start
```

### Environment Variables Required
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 💳 Testing Payments

Use Stripe's test card numbers:
- **Successful Payment**: `4242 4242 4242 4242`
- **Declined Payment**: `4000 0000 0000 0002`
- Use any future expiry date and any 3-digit CVC

## 🔧 Development Skills Demonstrated

### React Development
- Functional components with React Hooks
- Context API for global state management
- useReducer for complex state logic
- Component composition and reusability
- Event handling and form management

### Firebase Integration
- Authentication setup and user management
- Firestore database operations (read/write)
- Firebase Functions deployment and usage
- Security rules configuration
- Environment-based configuration

### Payment Integration
- Stripe Elements integration
- Secure payment form handling
- Payment intent creation and confirmation
- Error handling for payment failures
- Order confirmation and database updates

### General Web Development
- Responsive CSS design
- Git version control with meaningful commits
- Environment variable management for security
- API integration and error handling
- Clean code organization and documentation

## 📁 Project Structure

```
src/
├── components/
│   ├── CheckoutProduct.js    # Cart item display
│   ├── Header.js            # Navigation and user menu
│   ├── Order.js             # Individual order display
│   ├── Orders.js            # Order history page
│   ├── Product.js           # Product card component
│   └── Subtotal.js          # Cart total calculation
├── pages/
│   ├── Checkout.js          # Shopping cart page
│   ├── Home.js              # Main product catalog
│   ├── Login.js             # Authentication forms
│   └── payment.js           # Stripe payment processing
├── firebase.js              # Firebase configuration
├── reducer.js               # State management logic
├── StateProvider.js         # Context provider setup
├── axios.js                 # API configuration
└── App.js                   # Main application component
```
## 👨‍💻 About This Project

Built by **Adam Russo** as a demonstration of full-stack web development capabilities. This project showcases practical implementation of modern web technologies and real-world e-commerce functionality.

## 🎯 Learning Outcomes

This project helped me develop skills in:
- Full-stack application architecture
- Third-party API integration (Firebase, Stripe)
- State management in complex React applications
- Secure payment processing implementation
- User authentication and session management
- Cloud deployment and configuration

## 📄 License

This project is licensed under the MIT License.

---

*This project demonstrates practical full-stack development skills with modern technologies. The implementation focuses on clean code, user experience, and secure payment processing.*
