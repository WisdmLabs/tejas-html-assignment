<?php
function wdm_popular_recipes_cb($atts)
{
    $title = esc_html($atts['title']);
    $cuisineIDs = array_map(function ($term) {
        return $term['id'];
    }, $atts['cuisines']);
    $args = [
        'post_type' => 'recipe',
        'post_per_page' => $atts['count'],
        'orderby' => 'meta_value_num',
        'meta_key' => 'recipe_rating',
        'order' => 'DESC'
    ];
    if (!empty($cuisineIDs)) {
        $args['tax_query'] = [
            'taxonomy' => 'cuisine',
            'field' => 'term_id',
            'terms' => $cuisineIDs
        ];
    }
    $query = new WP_Query($args);
    ob_start();
?>
    
    <?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
