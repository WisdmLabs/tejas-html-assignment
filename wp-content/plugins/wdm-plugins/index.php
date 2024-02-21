<?php
/*
 * Plugin Name:       Custom-Plugin
 * Plugin URI:        http://localhost:10004
 * Description:       This is just a custom plugin 
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            WisdmLabs
 * Author URI:        http://localhost:10004
 * Text Domain:       wdm-custom-plugin
 * Domain Path:       /languages
 */

if (!function_exists('add_action')) {
    echo 'Hey there';
    exit;
}

//setup
define('WDM_PLUGIN_DIR', plugin_dir_path(__FILE__));

//includes
$directory = glob(WDM_PLUGIN_DIR . 'includes/*.php');
$subdir = glob(WDM_PLUGIN_DIR . 'includes/**/*.php');
$maindir = array_merge($directory, $subdir);

foreach ($maindir as $filename) {
    include_once($filename);
}
//hooks
add_action('init', 'wdm_register_blocks');
add_action('rest_api_init', 'wdm_rest_api_init');
add_action('wp_enqueue_scripts', 'wdm_enqueue_scripts');
