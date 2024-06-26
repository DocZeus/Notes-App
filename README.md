Features

1. User Authentication: Secure sign-up, login, and logout functionalities.
2. CRUD Operations: Create, read, update, pin and delete notes with ease.
3. Search Functionality: Quickly find notes with the search feature.
4. Tagging and Categorization: Organize notes with tags and categories.
5. Dark Mode: Easy on the eyes at night.
6. Password Checker: So that you build a strong password.

Tech Stack

1. Frontend: React.js and Tailwind CSS for styling.
2. Backend: Node.js, Express.js.
3. Database: MongoDB with Mongoose for object data modeling.
4. Authentication: JWT (JSON Web Tokens) for secure authentication.

Installation
Clone the repository:

git clone https://github.com/DocZeus/Notes-App.git

Backend Setup:

cd backend
npm install

Create a config.json and .env file in the backend directory and add the following:

"connectionString"=your_mongodb_connection_string in config.json

ACCESS_TOKEN_SECRET=your_secret_key in .env

Start the backend server:

npm start

Frontend Setup:

cd frontend/notes-app
npm install

Start the frontend development server:

npm run dev

Access the application:

Open your browser and navigate to http://localhost:8000.

Usage

1. Sign Up: Create a new account to start using the app.
2. Create Notes: Click on the "New Note" button to create a note.
3. Edit Notes: Click on any existing note to edit.
4. Delete Notes: Click the delete icon to remove a note.
5. Search Notes: Use the search bar to find specific notes.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
