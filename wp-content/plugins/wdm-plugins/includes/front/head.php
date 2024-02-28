<?php

function wdm_wp_head()
{
    $options = get_option('wdm_options');
    if ($options['enable_og'] == 1) {
        return;
    }
    $title = $options['og_title'];
    $image = $options['og_image'];
    $description = $options['og_description'];
    $url = site_url('/');
    if (is_single()) {
        $postID = get_the_id();

        $newtitle = get_post_meta($postID, 'og_title', true);
        $title = empty($newtitle) ? $title : $newtitle;

        $newDesc = get_post_meta($postID, 'og_description', true);
        $description = empty($newDesc) ? $description : $newDesc;

        $overrideImage = get_post_meta($postID, 'og_override_image', true);
        $image = $overrideImage ? get_post_meta($postID, 'og_image', true) :
            get_the_post_thumbnail_url($postID, 'opengraph');

        $url = get_permalink($postID);
    }
?>
    <meta property="og:title" content="<?php esc_attr($title) ?>" />
    <meta property="og:description" content="<?php esc_attr($description) ?>" />
    <meta property="og:image" content="<?php esc_attr($image) ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php esc_attr($url) ?>" />
<?php
}
