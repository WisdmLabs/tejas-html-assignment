<?php

use function PHPSTORM_META\type;

function wdm_recipe_post_type()
{
    $labels = array(
        'name'                  => _x('Recipes', 'Post type general name', 'wdm-plugins'),
        'singular_name'         => _x('Recipe', 'Post type singular name', 'wdm-plugins'),
        'menu_name'             => _x('Recipes', 'Admin Menu text', 'wdm-plugins'),
        'name_admin_bar'        => _x('Recipe', 'Add New on Toolbar', 'wdm-plugins'),
        'add_new'               => __('Add New', 'wdm-plugins'),
        'add_new_item'          => __('Add New Recipe', 'wdm-plugins'),
        'new_item'              => __('New Recipe', 'wdm-plugins'),
        'edit_item'             => __('Edit Recipe', 'wdm-plugins'),
        'view_item'             => __('View Recipe', 'wdm-plugins'),
        'all_items'             => __('All Recipes', 'wdm-plugins'),
        'search_items'          => __('Search Recipes', 'wdm-plugins'),
        'parent_item_colon'     => __('Parent Recipes:', 'wdm-plugins'),
        'not_found'             => __('No Recipes found.', 'wdm-plugins'),
        'not_found_in_trash'    => __('No Recipes found in Trash.', 'wdm-plugins'),
        'featured_image'        => _x('Recipe Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'wdm-plugins'),
        'set_featured_image'    => _x('Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'wdm-plugins'),
        'remove_featured_image' => _x('Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'wdm-plugins'),
        'use_featured_image'    => _x('Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'wdm-plugins'),
        'archives'              => _x('Recipe archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'wdm-plugins'),
        'insert_into_item'      => _x('Insert into Recipe', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'wdm-plugins'),
        'uploaded_to_this_item' => _x('Uploaded to this Recipe', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'wdm-plugins'),
        'filter_items_list'     => _x('Filter Recipes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wdm-plugins'),
        'items_list_navigation' => _x('Recipes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wdm-plugins'),
        'items_list'            => _x('Recipes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wdm-plugins'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'recipe'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
        'show_in_rest'       => true,
        'description'        => __("A custom post type for recipes", "wdm-plugins"),
        'taxonomies'         => ['category', 'post_tag']
    );

    register_post_type('recipe', $args);

    register_taxonomy('cuisine', 'recipe', [
        'label' => __('Cuisine', 'wdm-plugins'),
        'rewrite' => ['slug' => 'cuisine'],
        'show_in_rest' => true
    ]);

    register_term_meta("cuisine", "more_info_url", [
        'type' => 'string',
        'description' => __("A URL for more information on cuisine", "wdm-plugins"),
        'single' => true,
        'show_in_rest' => true,
        'default' => "#"
    ]);
}
