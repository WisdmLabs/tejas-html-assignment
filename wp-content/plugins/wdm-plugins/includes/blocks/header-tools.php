<?php

function wdm_header_tools_render_cb($attr)
{
    ob_start();
?>
    <div class="wp-block-wdm-plugins-header-tools">
        <?php
        if ($attr['showAuth']) {
        ?>
            <a class="signin-link open-modal" href="#">
                <div class="signin-icon">
                    <i class="bi bi-person-circle"></i>
                </div>
                <div class="signin-text">
                    <small>Hello, Sign in</small>
                    My Account
                </div>
            </a>
        <?php
        }
        ?>

    </div>
<?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
