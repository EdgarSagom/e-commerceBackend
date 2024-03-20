# e-commerceBackend

e-commerceBackend create with Node.js Express MongoDB Mongoose JWT bcrypt

## Deployed in Cyclic

API deployed at: https://itchy-vest-colt.cyclic.app

## Endpoints

#### USERS:

- Register: POST https://itchy-vest-colt.cyclic.app/api/users/register
- Login User: POST https://itchy-vest-colt.cyclic.app/api/users/login
- Login Admin: POST https://itchy-vest-colt.cyclic.app/api/users/login-admin
- Cart (requires user JWT): POST https://itchy-vest-colt.cyclic.app/api/users/cart
- Applycoupon (requires user JWT): POST https://itchy-vest-colt.cyclic.app/api/users/cart/applycoupon
- Create Order (requires user JWT): POST https://itchy-vest-colt.cyclic.app/api/users/cart/cash-order

- All Users (requires admin JWT): GET https://itchy-vest-colt.cyclic.app/api/users/all
- Order (requires user JWT): GET https://itchy-vest-colt.cyclic.app/api/users/orders
- All Orders (requires admin JWT): GET https://itchy-vest-colt.cyclic.app/api/users/allorders
- Refresh token: GET https://itchy-vest-colt.cyclic.app/api/users/refresh
- Logout: GET https://itchy-vest-colt.cyclic.app/api/users/logout
- Wishlist (requires user JWT): GET https://itchy-vest-colt.cyclic.app/api/users/wishlist
- Cart (requires user JWT): GET https://itchy-vest-colt.cyclic.app/api/users/cart
- One User (requires admin JWT): GET https://itchy-vest-colt.cyclic.app/api/users/:id

- Empty Cart (requires user JWT): DELETE https://itchy-vest-colt.cyclic.app/api/users/empty-cart
- Delete User: DELETE https://itchy-vest-colt.cyclic.app/api/users/:id

- Update Status Order (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/users/orders/update-order/:id
- Update User (requires user JWT): PUT https://itchy-vest-colt.cyclic.app/api/users/update/:id
- Save Address User (requires user JWT): PUT https://itchy-vest-colt.cyclic.app/api/users/save-address
- Blocked User (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/users/blocked/:id
- Unblocked User (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/users/unblocked/:id

#### PRODUCTS:

- Create Product (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/products/

- One Product: GET https://itchy-vest-colt.cyclic.app/api/products/:id
- All Products: GET https://itchy-vest-colt.cyclic.app/api/products/

- Delete One Product (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/products/:id

- Wishlist (requires user JWT): PUT https://itchy-vest-colt.cyclic.app/api/products/wishlist
- Rating (requires user JWT): PUT https://itchy-vest-colt.cyclic.app/api/products/rating
- Update Product (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/products/:id

#### CATEGORY:

- Create Category (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/category/

- One Category: GET https://itchy-vest-colt.cyclic.app/api/category/:id
- All Category: GET https://itchy-vest-colt.cyclic.app/api/category/

- Delete Category (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/category/:id

- Update Category (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/category/:id

#### BRANDS:

- Create Brands (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/brands/

- One Brands: GET https://itchy-vest-colt.cyclic.app/api/brands/:id
- All Brands: GET https://itchy-vest-colt.cyclic.app/api/brands/

- Delete Brands (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/brands/:id

- Update Brands (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/colors/:id

#### COLORS:

- Create Colors (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/colors/

- One Colors: GET https://itchy-vest-colt.cyclic.app/api/colors/:id
- All Colors: GET https://itchy-vest-colt.cyclic.app/api/colors/

- Delete Colors (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/colors/:id

- Update Colors (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/colors/:id

#### ENQUIRY:

- Create Enquiry (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/enquiry/

- One Enquiry: GET https://itchy-vest-colt.cyclic.app/api/enquiry/:id
- All Enquiry: GET https://itchy-vest-colt.cyclic.app/api/enquiry/

- Delete Enquiry (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/enquiry/:id

- Update Enquiry (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/enquiry/:id

#### COUPONS:

- Create Coupon (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/coupons/

- One Coupon (requires admin JWT): GET https://itchy-vest-colt.cyclic.app/api/coupons/:id
- All Coupon (requires admin JWT): GET https://itchy-vest-colt.cyclic.app/api/coupons/

- Delete Coupon (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/coupons/:id

- Update Coupon (requires admin JWT): PUT https://itchy-vest-colt.cyclic.app/api/coupons/:id

#### UPLOAD IMAGES

- Create Coupon (requires admin JWT): POST https://itchy-vest-colt.cyclic.app/api/upload/

- Delete Coupon (requires admin JWT): DELETE https://itchy-vest-colt.cyclic.app/api/upload/delete-img/:id

## NPM Packages

- npm i express mongoose bcrypt dotenv
- npm i -D nodemon
- npm i colors
- npm i express-async-handler
- npm i jsonwebtoken
- npm i cookie-parser
- npm i morgan
- npm i slugify
- npm i multer sharp cloudinary
- npm i uniqid
