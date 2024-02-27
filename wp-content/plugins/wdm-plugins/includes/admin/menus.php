<?php

function wdm_admin_menus()
{
    add_menu_page(
        __("WisdmLabs", "wdm-plugins"),
        __("WisdmLabs", "wdm-plugins"),
        'edit_theme_options',
        'wdm-plugins-options',
        'wdm_plugins_options_page',
        plugins_url('letter-u.svg', WDM_PLUGIN_FILE)
    );
}
