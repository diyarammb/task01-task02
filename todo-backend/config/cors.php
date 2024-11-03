
<?php

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // Change this to the specific origin in production
    'allowed_headers' => ['Content-Type', 'X-CSRF-TOKEN', 'Authorization'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];



?>