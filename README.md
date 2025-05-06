# 🔐 Authentication Web App

This is a simple authentication web app built with a **vanilla HTML/CSS/JavaScript frontend**, **Node.js + Express backend**, and a **MongoDB database**.

It allows users to register, log in, and access a protected route using JWT (JSON Web Token) authentication.

---

## 📦 Features

- ✅ User registration
- ✅ User login with JWT token
- ✅ Protected page that displays user info when logged in
- ✅ LocalStorage-based session tracking on frontend
- ✅ MongoDB integration with TablePlus for database viewing

---

## 💻 Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB (MongoDB Atlas)
- **Tools:** TablePlus, Postman, Git, GitHub

---

## ▶️ How to Use the App

### 1. Register an Account

- Open `register.html` in your browser.
- Fill in your email and password.
- Click the **Register** button.
- You should see a "Registration successful" alert.

### 2. Log In

- Go to `index.html`.
- Enter your registered email and password.
- Click the **Login** button.
- A success message will appear, and your authentication token will be saved in local storage.

### 3. Access Protected Page

- Open `protected.html`.
- If you're logged in (token is present), you'll see your user information.
- If not, you'll see an unauthorized message.

### 4. Try Unauthorized Access

- Open `protected.html` in incognito mode or after clearing local storage.
- You should be denied access or see an "Unauthorized" message.

---

## 🚀 Getting Started (Developer Setup)

### Backend

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/muveet-auth-app.git
   cd muveet-auth-app/backend
2. Install dependencies
    ```bash
    npm install
3. Create a .env file with your environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
4. Start the server:
    ```Bash
    npm run dev

### Frontend

1. Open the HTML files directly in your browser:

```
    index.html for login

    register.html for registration

    protected.html to view the protected content


```
    Ensure your backend is running at http://localhost:5000.

    ### 📁 Project Structure
    ```
        muveet-auth-app/
        │
        ├── authenticator-frontend/
        │   ├── index.html
        │   ├── register.html
        │   ├── protected.html
        │   └── style.css
        │
        ├── authenticator-backend/
        │   ├── models/
        │   ├── routes/
        │   ├── .env            # Ignored in Git
        │   └── server.js
### 🔒 Security Considerations
```
    .env file is excluded from version control via .gitignore.

    JWT is stored in localStorage (can be improved with cookies in future).

    Only authenticated users can access the protected page.


### 📄 .gitignore

Be sure to create a .gitignore file in your backend directory:

```
    node_modules/
    .env
