# Contact Form Backend

Node.js, Express, MongoDB backend for handling contact form submissions and sending email notifications.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_uri
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_TO=felixatoma2@gmail.com
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API
- POST `/api/messages`
- Body: `{ name, email, phone, message }`
- Response: `Thank you for contacting Felix Atoma, I will get back to you.`

---
