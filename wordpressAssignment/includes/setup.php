<?php
function wdm_setup_theme()
{
    add_theme_support('editor-styles');
    add_editor_style([
        '/assets/index.css'
    ]);
}
