<?php

namespace App\Controllers;

use Libraries\Logger;

/**
 * 單頁式應用控制器
 */
class SinglePageController
{
    protected static $_uniqueInstance = null;

    protected function __construct() {}

    /**
     * @return self
     */
    public static function getInstance()
    {
        if (self::$_uniqueInstance == null) self::$_uniqueInstance = new self();
        return self::$_uniqueInstance;
    }

    /**
     * 導向前端主頁
     *
     * @return void
     */
    public function index()
    {
        view('Index');
    }
}
