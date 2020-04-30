# E-Commerce Product API

## Dependencies needed to install

To install any dependency required, Navigate to the project directory, open the terminal and run the command `npm install <dependency_name>`.\
For example `npm install express`

The following dependencies need to be installed before running the project

* express
* nodemon
* mongoose

## Running the project

To run the project open the terminal and run the command `npm start`

## Testing the project

After the project has successfully run, In a web browser you can run the following urls to get the data

* `http://localhost:8000/api/v1/products/`\
  This will return all the product names along with their quantity.

* `http://localhost:8000/api/v1/products/create`'\
  This will first check if the product with that name is already present in the database. If not only then a new product will be added in the database.

* `http://localhost:8000/api/v1/products/<product_id>`'\
  This will first check if the product with that id is already present in the database. If yes then it will be deleted.

* `http://localhost:8000/api/v1/products/<product_id>/update_quantity/?number=<number>`'\
  This will first check if the product with that id is already present in the database. If yes then the quantity will be incremented or decremented by the number.