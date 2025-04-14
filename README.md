# Online-Book-Store
A backend web application for an online bookstore built using Node.js and Express.js. It supports user registration, book management (CRUD), and shopping cart features. The project follows a RESTful API structure with modular code, and can be extended with a frontend and payment system
- Browse and search for books by category or name.
- Register and log in as a user or admin.
- Add books to a cart and proceed to checkout.
- Manage book listings and view orders (admin side).

# Features

**User Registration and Login:**  
Secure login and registration for users and admins.

**Book Browsing and Searching:**  
Browse books by categories such as Programming, Fiction, History, etc., or search directly.

**Cart and Checkout System:**  
Users can add books to their cart and proceed to purchase them.

**Order History:**  
Users can view their past orders, and admins can see all customer orders.

**Admin Controls:**  
Admins can:
- Add, update, or delete books.
- View user details and their orders.

# Requirements

Make sure you have the following installed:

- Java (JDK 8 or higher)
- Apache Tomcat Server (v9+ recommended)
- MySQL Database
- JDBC Connector (MySQL)
- Apache NetBeans or Eclipse IDE (for development)

# Setup Instructions

## 1. Clone the Repository

Download or clone this repository to your local machine.

## 2. Setup the Database

- Create a MySQL database (e.g., `bookstore`).
- Import the provided `bookstore.sql` file to create tables and insert sample data.

## 3. Configure the Project

- Open the project in your Java IDE.
- Ensure database connection settings (JDBC URL, username, password) are correct in your DAO classes.

## 4. Deploy to Server

- Deploy the project to Apache Tomcat.
- Start the server and access the application in your browser at `http://localhost:8080/Online-Book-Store/`.

# Usage

**User Side:**
- Register or log in as a user.
- Browse and search for books.
- Add books to the cart and place an order.
- View your order history.

**Admin Side:**
- Log in using admin credentials.
- Add, edit, or remove book listings.
- Manage customer orders and user details.

# Folder Structure

- `src/`: Java source code (servlets, DAO, models).
- `web/`: HTML, JSP, and CSS files.
- `SQL/`: Contains the `bookstore.sql` script.
- `lib/`: JDBC drivers and dependencies.

# Future Scope

- Add online payment integration.
- Include book rating and review features.
- Implement REST APIs for mobile app support.
- Add PDF/ebook download options.



