<?php

use Libraries\Router;

$Route = new Router;

require_once ROUTE_DIR . '/web.php';
require_once ROUTE_DIR . '/api.php';

if (!REWRITE_INDEX && preg_match('/^\/index.php/', $requestUri))
{
    $Route->setBasePath('index.php');
}

// if ($Route->match($requestMethod, $requestUri)) exit;
if ($Route->match('GET', '/')) exit;    // 由 Vue Router 統一管理前端路由
