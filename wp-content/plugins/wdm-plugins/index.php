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
define('WDM_PLUGIN_FILE', __FILE__);

//includes
$directory = glob(WDM_PLUGIN_DIR . 'includes/*.php');
$subdir = glob(WDM_PLUGIN_DIR . 'includes/**/*.php');
$maindir = array_merge($directory, $subdir);

foreach ($maindir as $filename) {
    include_once($filename);
}
//hooks
register_activation_hook(__FILE__, 'wdm_activate_plugin');
add_action('init', 'wdm_register_blocks');
add_action('rest_api_init', 'wdm_rest_api_init');
add_action('wp_enqueue_scripts', 'wdm_enqueue_scripts');
add_action('init', 'wdm_recipe_post_type');

add_action('cuisine_add_form_fields', 'wdm_cuisine_add_form_fields');
add_action('create_cuisine', 'wdm_save_cuisine_meta');
add_action('cuisine_edit_form_fields', 'wdm_cuisine_edit_form_fields');
add_action('edited_cuisine', 'wdm_save_cuisine_meta');
add_action('save_post_recipe', 'wdm_save_post_recipe');
add_action('after_setup_theme', 'wdm_setup_theme');
add_filter('image_size_names_choose', 'wdm_custom_image_sizes');
add_filter('rest_recipe_query', 'wdm_rest_recipe_query', 10, 2);
add_action('admin_menu', 'wdm_admin_menus');
add_action('admin_post_wdm_save_options', 'wdm_save_options');
add_action('admin_enqueue_scripts', 'wdm_admin_enqueue');
add_action('init', 'wdm_register_assets');
add_action('admin_init', 'wdm_settings_api');
add_action('enqueue_block_editor_assets', 'wdm_enqueue_editor_assets');
add_action('wp_head', 'wdm_wp_head');
add_action('init', 'wdm_load_php_translations');
