<?php
function wdm_save_options()
{
    if (!current_user_can('edit_theme_options')) {
        wp_die(__("You are not allowed to be on this page", "wdm-plugins"));
    }
    check_admin_referer('wdm_options_verify');

    $options = get_option('wdm_options');
    $options['og_title'] = sanitize_text_field($_POST['wdm_og_title']);
    $options['og_img'] = sanitize_url($_POST['wdm_og_image']);
    $options['og_description'] = sanitize_text_field($_POST['wdm_og_description']);
    $options['enable_og'] = absint($_POST['wdm_enable_og']);

    update_option('wdm_options', $options);
    wp_redirect(admin_url('admin.php?page=wdm-plugin-options&status=1'));
}
