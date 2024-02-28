<?php

function wdm_admin_menus()
{
    add_menu_page(
        __("WisdmLabs", "wdm-plugins"),
        __("WisdmLabs", "wdm-plugins"),
        'edit_theme_options',
        'wdm-plugin-options',
        'wdm_plugin_options_page',
        plugins_url('letter-u.svg', WDM_PLUGIN_FILE)
    );
    add_submenu_page(
        'wdm-plugin-options',
        __("Alt wdm", "wdm-plugins"),
        __("Alt wdm", "wdm-plugins"),
        'edit_theme_options',
        'wdm-plugin-options-alt',
        'wdm_plugin_options_alt_page'
    );
}
