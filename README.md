# Argent Bank - Financial Dashboard

Argent Bank is a modern financial application focused on providing a clean, reactive, and secure user experience. This project involves a full refactoring of the authentication system and the design of a scalable API for transaction management.

## 🚀 Features

### Phase 1: Authentication & Profile Management

- **User Authentication**: Secure login system using JWT (JSON Web Tokens).
- **Persistent Sessions**: Choice between `localStorage` (Remember Me) and `sessionStorage` for session management.
- **Global State Management**: Powered by **Redux Toolkit** to synchronize user data across the entire app.
- **Protected Routes**: Secure navigation ensuring only authenticated users can access their dashboard.
- **Profile Customization**: Users can update their `userName` while preserving the integrity of their legal identity (`firstName` / `lastName`).

### Phase 2: Transaction API Design

- **RESTful Architecture**: Comprehensive API design for account transactions.
- **Lazy Loading Strategy**: Separation of transaction previews and full details for optimized performance.
- **Data Integrity**: Specialized update models to ensure sensitive fields (amount, date, balance) remain immutable.
- **Swagger Documentation**: Detailed OpenAPI specification for future backend implementation.

## 🛠️ Technologies

- **Frontend**: React 19, Vite, Redux Toolkit, React Router 7.
- **API Handling**: Axios.
- **Backend**: Node.js, Express, MongoDB, Mongoose.
- **Documentation**: Swagger / OpenAPI.

## 📦 Installation & Setup

### 1. Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or via Atlas)

### 2. Backend Setup

1. Navigate to the backend folder: `cd P10-Backend`
2. Install dependencies: `npm install`
3. Populate the database: `npm run populate-db`
4. Start the server: `npm run dev:server`
   - The server will run on `http://localhost:3001`

### 3. Frontend Setup

1. Navigate to the frontend folder: `cd P10-Frontend`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`
   - Access the app at `http://localhost:5173`

## 📂 Project Structure

- `src/store/slices/authSlice.js`: Contains the logic for login, profile fetching, and profile updates (Thunks & Reducers).
- `src/pages/User.jsx`: User dashboard with the "Edit Name" interactive feature.
- `src/components/Account.jsx`: Reusable component for displaying bank account summaries.
- `Transaction.Yaml`: Phase 2 API design documentation.

## 📄 Documentation

For detailed information about the API endpoints, please refer to the `swagger.yaml` (Backend) and `Transaction.Yaml` (Phase 2 Design) files.

---

_Developed as part of the OpenClassrooms Project 10._
