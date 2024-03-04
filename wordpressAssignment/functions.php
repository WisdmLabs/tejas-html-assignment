<?php
function add_css()
{
    wp_register_style('custom', get_template_directory_uri() . '/assets/index.css', false, '1.1', 'all');
    wp_enqueue_style('custom');
    wp_register_style("icons", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    wp_enqueue_style("icons");
}
function add_fonts()
{
    wp_register_style("font1", "https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap");
    wp_enqueue_style("font1");

    wp_register_style("font2", "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
    wp_enqueue_style("font2");

    wp_register_style("font3", "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    wp_enqueue_style("font3");
}
add_action('wp_enqueue_scripts', 'add_css');
add_action('wp_enqueue_scripts', 'add_fonts');
add_theme_support('menus');
