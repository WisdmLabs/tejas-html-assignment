<?php

function wdm_admin_enqueue($hook_suffix)
{
    if (
        $hook_suffix === 'toplevel_page_wdm-plugin-options' ||
        $hook_suffix === 'wisdmlabs_page_wdm-plugin-options-alt'
    ) {
        wp_enqueue_media();
        wp_enqueue_style('wdm_admin');
        wp_enqueue_script('wdm_admin');
    }
}
