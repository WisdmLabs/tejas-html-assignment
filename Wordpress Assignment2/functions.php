<?php
/*
This function is used to register and enqueue custom fonts for the page
*/
function wdm_add_fonts()
{
    wp_register_style("font1", "https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap");
    wp_enqueue_style("font1");

    wp_register_style("font2", "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
    wp_enqueue_style("font2");

    wp_register_style("font3", "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    wp_enqueue_style("font3");
}
/*
This function is used to add custom icons for the page
*/
function wdm_add_icons()
{
    wp_register_style("icons", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    wp_enqueue_style("icons");
}
add_action('wp_enqueue_scripts', 'wdm_add_fonts');
add_action('wp_enqueue_scripts', 'wdm_add_icons');
