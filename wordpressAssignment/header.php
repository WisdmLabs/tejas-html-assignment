<head>
    <?php wp_head(); ?>
</head>
<div class="navbar-container">
    <?php echo get_custom_logo() ?>
    <div class="nav-right">
        <nav class="navbar1">
            <?php
            $menu_items = wp_get_nav_menu_items('topNav');
            foreach ($menu_items as $item) {
                echo "<li>";
                if ($item->title === 'Search') {
                    echo '<i class="fa fa-search"></i>&nbsp;&nbsp;&nbsp;';
                } elseif ($item->title === 'Sign in') {
                    echo '<i class="fa fa-user-circle"></i>&nbsp;&nbsp;&nbsp;';
                } elseif ($item->title === '(0)') {
                    echo '<i class="fa fa-shopping-bag"></i>&nbsp;';
                }

                echo ' <a href="' . $item->url . '">' . $item->title . '</a>';
                echo "</li>";
            }
            ?>
        </nav><br>
        <nav class="navbar2">
            <?php wp_nav_menu(array('menu' => 'topNav2', 'menu_class' => 'navbar-nav mx-lg-auto', 'container' => 'ul',)); ?>
            <button class="btn-find-class">Find a Class</button>
        </nav>

    </div>
</div>