<?php

function wdm_plugin_options_alt_page()
{ ?>
    <div class="wrap">
        <form method="POST" action="options.php">
            <?php
            settings_fields('wdm_options_group');
            do_settings_sections('wdm-options-page');
            submit_button();
            ?>
        </form>
    </div>
<?php
}
