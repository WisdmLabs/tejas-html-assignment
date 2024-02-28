<?php
function wdm_enqueue_scripts()
{
    $authURLs = json_encode([
        'signup' => esc_url_raw(rest_url('wdm/v1/signup')),
        'signin' => esc_url_raw(rest_url('wdm/v1/signin'))
    ]);

    wp_add_inline_script(
        'wdm-plugins-auth-modal-view-script',
        "const wdm_auth_rest = {$authURLs}",
        'before'
    );

    wp_enqueue_style("wdm_editor");
}
