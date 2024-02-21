<?php

// Variables

// Includes
include(get_theme_file_path('/includes/front/enqueue.php'));
include(get_theme_file_path('/includes/front/head.php'));
include(get_theme_file_path('/includes/setup.php'));

// Hooks
add_action('wp_enqueue_scripts', 'u_enqueue');
add_action('wp_head', 'u_head', 5);
add_action('after_setup_theme', 'u_setup_theme');
//add_action('wp_before_admin_bar_render','tku_sample_function');

// function tku_sample_function(){
//     echo "Hello ";
// }


add_filter('the_title', 'change_title', 10, 2);
add_filter('get_the_date', 'change_date', 10, 2);

function change_date($the_date, $format) {
    $new_date = date('d m Y', strtotime($the_date));
    return $new_date;
}

function change_title($title, $post_id) {
    if ($post_id === 1) {
        $new_title = 'Hello World 1 !';
        return $new_title;
    }
    return $title;
}
