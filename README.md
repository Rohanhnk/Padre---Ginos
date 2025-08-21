## Complete Intro to React, v9 Course - Padre Gino's Pizza App

This is a companion repository for the [Complete Intro to React, v9][fem] course on Frontend Masters, featuring a full-stack pizza ordering application.
[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)][fem]

## 🍕 Pizza App Features

### Frontend Features:

- **Interactive Pizza Menu**: Browse pizzas by category with beautiful images
- **Pizza of the Day**: Daily featured pizza with special pricing
- **Shopping Cart**: Add pizzas to cart with different sizes and quantities
- **Order Management**: Place orders and view order history
- **Contact Form**: Customer support contact functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Boundaries**: Graceful error handling throughout the app
- **Modern React Features**: Uses React Router, Context API, and custom hooks

### Backend API Features:

- **RESTful API**: Built with Fastify for high performance
- **SQLite Database**: Persistent storage for pizzas, orders, and customer data
- **Pizza Endpoints**:
  - `/api/pizzas` - Get all pizzas with pricing and details
  - `/api/pizza-of-the-day` - Get daily featured pizza
  - `/api/orders` - Order management
  - `/api/past-orders` - Order history
  - `/api/contact` - Contact form submissions
- **Static File Serving**: Pizza images and assets
- **CORS Support**: Cross-origin requests for frontend integration

### Deployment Ready:

- **Netlify Configuration**: Frontend deployed with proper SPA routing
- **Railway/Render Compatible**: Backend API ready for cloud deployment
- **Environment Configuration**: Production and development environment support

## About this Repository

This repository contains the complete **Padre Gino's Pizza Ordering App** - a full-stack React application built throughout the Frontend Masters course. The app demonstrates modern web development practices with a React frontend and Node.js backend.

### Project Structure:

- **`18-deploying/pizza-client-app/`** - Production-ready React frontend
- **`api/`** - Fastify backend server with SQLite database
- **`01-17/`** - Course lesson snapshots for learning reference

Every step of the project built throughout the course will have a folder that will be a snapshot of the current state of the project. The naming format will be `XX-<name of the lesson>` so you can get a rough idea of order and which lesson the step is coming from. In each snapshot you'll have to run `npm install` again since they are another whole copy of the project.

## Setup Instructions

### Prerequisites:

We recommend using `Node.js version 20` with this course.

### Quick Start (Production App):

**Frontend Setup:**

```bash
cd 18-deploying/pizza-client-app
npm install
npm run dev
```

**Backend Setup (separate terminal):**

```bash
cd api
npm install
npm run dev
```

The pizza app will be available at `http://localhost:5173` with the API running on `http://localhost:3000`.

### Course Development Setup:

To get set up with the full course materials, clone the repository:

```bash
git clone https://github.com/btholt/citr-v9-project.git
```

To use the version of node this course was built with:

- with [fnm](https://github.com/Schniz/fnm), `fnm use --install-if-missing`
- with [nvm](https://github.com/nvm-sh/nvm), `nvm install`

### Deployment:

- **Frontend**: Deploy to Netlify using the `netlify.toml` configuration
- **Backend**: Deploy to Render, Railway, or similar Node.js hosting service

## Issues and Pull Requests

Please file issues and open pull requests on [the course website repo][repo]. Feel free to open pull requests here, but the issues should go in the other repo.

## License

The content of this workshop is licensed under CC-BY-NC-4.0. Feel free to share freely but do not resell my content.

The code, including the code of the site itself and the code in the exercises, are licensed under Apache 2.0.

[fem]: https://frontendmasters.com/courses/complete-react-v9/
[repo]: https://github.com/btholt/complete-intro-to-react-v9

[React icons created by Pixel perfect - Flaticon](https://www.flaticon.com/free-icons/react)
