## Note

- Used web.php instead of api.php for routes and took off Csrf Verification to avoid 409 err.

- Used built-in caching for the sake of simplicity. 

## Start

- composer install
- cp .env.example .env
- php artisan serve --port=3000  

## Test

php artisan test
