# Product Management System
A simple Product management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on products and view updates in a MongoDB database. 
## Main Features
- Create: Add a new product to the database.
- Read: View a list of all products or retrieve a specific product by ID.
- Update: Modify an existing product's information.
- Delete: Remove a product from the database.


To interact with the Product Management System, you can follow these simple steps using Postman or Thunder Client:
## 1. GET: To retrieve a list of all products.
- Open Postman or Thunder Client
- Choose the HTTP Method : Get
- Set the Request URL:http://localhost:7001/products/
- Click the "Send"
- Respond box will show all product in data base
- recheck data at mongoDB 
<img width="600" alt="05_get all" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/129caa52-2b65-400d-8680-179d19d48e4b">

 
## 2. GET by ID: To retrieve a product by its unique ID.
- Open Postman or Thunder Client
- Choose the HTTP Method : Get
- Set the Request URL:http://localhost:7001/products/{productID}
- Click the "Send"
- Respond box will show data of the product
- recheck data at mongoDB
<img width="600" alt="04_get from id" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/184350c0-89ca-4898-b072-0e1338dde603">

  

## 3. POST: To add a new product.
- Open Postman or Thunder Client
- Choose the HTTP Method : POST
- Set the Request URL:http://localhost:7001/products/
- Input data :
  slect Body=>Jason
  example input
  [{"prod_name": iphone 12,
    "prod_desc": "good",
    "prod_price": 30000,
    "product_stock": 250}]

<img width="600" alt="01_database bf" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/0d070b90-29a5-4cda-ba52-a80ad61cf477">
<img width="600" alt="02_post_add new product" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/c8606236-2d2c-4e8f-8748-35224ff7a4b7">
<img width="600" alt="03_after post" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/0817e629-5cfd-4607-87dd-d817792778cb">
  
- Click the "Send"
- Respond box will show data the same as input
- recheck data at mongoDB 

## 4 PUT: To update an existing product.
- Open Postman or Thunder Client
- Choose the HTTP Method : Put
- Set the Request URL:http://localhost:7001/products/{productID}
- Input data :
  slect Body=>Jason
  example input
  {"prod_price": 35000}
- Click the "Send"
- Respond box will show data data of the update product
- recheck data at mongoDB

<img width="600" alt="06_before put" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/a0f0ad9d-33b9-4557-84f1-68797bb64957">
<img width="600" alt="07_after put" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/586909f1-20dd-4363-a11b-69bd1c4f810c">
<img width="600" alt="08_afterput" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/0a22d5a3-00b8-4ea6-813d-36d81ae6355f">


## 5 Delete : To remove a product from the database.
- Open Postman or Thunder Client
- Choose the HTTP Method : Delete
- Set the Request URL:http://localhost:7001/products/{productID}
- Click the "Send"
- Respond box will show data data of the update product
- recheck data at mongoDB 
<img width="600" alt="09_bf delete" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/a6108e18-99ab-45c7-aa75-8b66af3ef53d">
<img width="600" alt="11_after test" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/096ddde5-c6a2-4b5b-adbb-a8802a977da8">

<img width="600" alt="10_after test" src="https://github.com/Danita0023/Product-Management-System/assets/146582665/35564f4b-b001-428c-9978-b70736be6854">


