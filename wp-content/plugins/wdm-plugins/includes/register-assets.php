<?php
function wdm_register_assets()
{
    wp_register_style('wdm_admin', plugins_url('/build/admin/index.css', WDM_PLUGIN_FILE));
    $adminAssets = include(WDM_PLUGIN_DIR . 'build/admin/index.asset.php');
    wp_register_script('wdm_admin', plugins_url('/build/admin/index.js', WDM_PLUGIN_FILE), $adminAssets['dependencies'], $adminAssets['version'], true);

    $editorAsset = include(WDM_PLUGIN_DIR . 'build/block-editor/index.asset.php');
    wp_register_script('wdm_editor', plugins_url('/build/block-editor/index.js', WDM_PLUGIN_FILE), $editorAsset['dependencies'], $editorAsset['version'], true);

    wp_register_style("wdm_editor", plugins_url('/build/block-editor/index.css', WDM_PLUGIN_FILE));
}
