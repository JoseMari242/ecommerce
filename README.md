# React + TypeScript + Vite

HORIZON WATCHES 

Welcome to Horizon Watches E-commerce Platform!

Horizon Watches offers an unparalleled e-commerce experience, where you can explore an extensive selection of premium watches and make purchases effortlessly. Discover the latest trends in timepieces and immerse yourself in a seamless shopping journey.

A Great Opportunity!

Embark on an exciting journey with Horizon Watches E-commerce Platform, where you have the chance to enhance your frontend development skills. Dive into our project and gain hands-on experience implementing new features, optimizing user experience, and ensuring top-notch performance. Under the guidance of our team, you'll have the opportunity to contribute to a cutting-edge e-commerce platform dedicated to delivering excellence.



# Table of contents:

- Instructions
- Data Model:
    - Products
    - Users
- Part 1:
    - Design of the app with Figma
    - Organization of project with Click up
- Part 2:
    - Estructure of project:
        - src/assets
        - src/components
        - src/context
        - src/interfaces
        - src/pages
        - src/routes
- Installation
- Use
- Contribution 

# INSTRUCTIONS 

- Data model:

# Products:

[
    {
      "id": "1",
      "Name": "Beat men's watch",
      "price": 110,
      "image": "src/assets/RELOJ 1.webp",
      "description": "Automatic Beat Men's Watch with Milanese steel case and mesh. Black dial, white and silver indexes and calendar at three o'clock"
    },
    {
        "id": "2",
        "Name": "Men's Dress Watch",
        "price": 150,
        "image": "src/assets/RELOJ 2.webp",
        "description": "A men's watch with clean lines, extra-thin with sapphire crystal. It consists of a steel case and bracelet, with a white dial and silver-colored indexes and hands. Calendar at 3 o'clock. An accessory that is worn with style and elegance"
      
    },
    {
        "id": "3",
        "Name": "Magnum men's watch",
        "price": 90,
        "image": "src/assets/RELOJ 3.webp",
        "description": "Multifunction Magnum Men's Watch with steel case with gold IP, black dial with gold indexes and counters at 3, 6 and 9, black silicone strap"
    },
    {
        "id": "4",
        "Name": "Grand men's watch",
        "price": 140,
        "image": "src/assets/RELOJ 4.webp",
        "description": "Grand three-hand men's watch with steel case and brown leather strap, white dial with Arabic numerals and calendar at 3 o'clock"
    },
    {
        "id": "5",
        "Name": "Grand 3 men's watch",
        "price": 180,
        "image": "src/assets/RELOJ 5.webp",
        "description": "Grand Men's Watch three needles with steel case and bracelet with gold IP. The white dial with gold indexes and Roman numerals."
    },
    {
        "id": "6",
        "Name": "Chic Men's Watch",
        "price": 190,
        "image": "src/assets/reloj 6.webp",
        "description": "CHIC Multifunction men's watch with gold dial and gold IP steel bracelet with push-button folding clasp"
    }
  ]

# Users 

[
    {
      "id": "1",
      "Name": "John",
      "password": "pass123",
      "cart": [],
      "wishlist": [],
      "email": "john@example.com"
    },
    {
      "id": "2",
      "Name": "Jane",
      "password": "pass456",
      "cart": [],
      "wishlist": [],
      "email": "jane@example.com"
    },
    {
      "id": "3",
      "Name": "Mike",
      "password": "pass789",
      "cart": [],
      "wishlist": [],
      "email": "mike@example.com"
    },
    {
      "id": "4",
      "Name": "Emily",
      "password": "pass321",
      "cart": [],
      "wishlist": [],
      "email": "emily@example.com"
    },
    {
      "id": "5",
      "Name": "David",
      "password": "pass654",
      "cart": [],
      "wishlist": [],
      "email": "david@example.com"
    }
  ]

 # Part 1:

Design of the app with Figma:

![Figma](src\assets\figma.webp)
![Link to my figma] (https://www.figma.com/file/DxNFr94GrycmmE4Go6mdC6/Proyect-individual?type=design&node-id=0%3A1&mode=design&t=rC9pcNy9npUY1n2A-1)

    - Organization of project with Click up:

![Clickup](https://app.clickup.com/9015141668/v/b/li/901503105723)

# Part 2:

The project is structured in different folders that are connected to each other through the use of reacts hooks and imports.
The react hooks used in my ecommerce are: useState, useParams, useContext, useNavigate, useReducer and Dispatch.
For the protection of the app I have used private routes.

And since it is a react project with typescript, it is typed with interfaces.



# INSTALLATION 

Clone this repository to your local machine using Git:

- git clone https://github.com/JoseMari242/ecommerce.git
- cd ecommerce
Install pnpm:
- npm install -g pnpm
- pnpm --version

Install React:
- npm install -g create-react-app

# USE

Once the project is installed and up and running, you can access the application from your web browser. Here are some of the main features and functionalities of the project:

Explore a variety of watches available for sale.
Add watches to the shopping cart and adjust the quantity of each item in the cart.
Make purchases using the shopping cart functionality.

# CONTRIBUTION 

If you wish to contribute to this project, we welcome you! Please follow these guidelines:

Fork the repository.
Create a branch for your contribution: git checkout -b my-contribution.
Make your changes and commit them: git commit -m "Add my contribution".
Push your changes to your repository: git push origin my-contribution.
Create a pull request on GitHub.

Author
This project was created by José María Gil López.