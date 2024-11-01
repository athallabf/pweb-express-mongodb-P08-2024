# Alur Aplikasi (Application Flow)

## API Endpoints

### Products

1. Get All Products

   ```
   GET /products

   Flow:
   Client Request → Routes → Controller → Service → Model → Database
   ```

2. Get Product by ID

   ```
   GET /products/:id

   Flow:
   Client Request → Routes → Controller → Service → Model → Database
   ```

3. Create Product

   ```
   POST /products

   Flow:
   Client Request → Routes → Controller → Service → Model → Database
   ```

4. Update Product

   ```
   PUT /products/:id

   Flow:
   Client Request → Routes → Controller → Service → Model → Database
   ```

5. Delete Product

   ```
   DELETE /products/:id

   Flow:
   Client Request → Routes → Controller → Service → Model → Database
   ```
