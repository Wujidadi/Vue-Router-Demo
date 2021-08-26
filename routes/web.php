<?php

use App\Controllers\SinglePageController;

$Route->map('GET', '/', function()
{
    SinglePageController::getInstance()->index();
});
 