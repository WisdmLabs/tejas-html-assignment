<?php
session_start();
?>
<html>

<head>
    <meta charset="ISO-8859-1">
    <link rel="stylesheet" href="index.css">
    <title> Homepage </title>
</head>

<body>

    <nav>
        <ul>
            <li><a href="user-login.php" id="loginBtn" style="display:block;">Login</a></li>
            <li><button onclick="LogoutUser()" id="logoutBtn" style="display:none;">Logout</button></li>
            <li><a href="UserRegistration.php">Register</a></li>
        </ul>
    </nav>
    <h1>Welcome to Wisdm</h1>

    <div class="First-para-div">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <?php
    if (isset($_SESSION['email'])) {
    ?>
        <script>
            document.getElementById('logoutBtn').style.display = "block";
            document.getElementById('loginBtn').style.display = "none";
        </script>
        <div class="Second-para-div">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
    <?php
    }
    ?>
    <script>
        function LogoutUser() {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                location.reload();
            }
            xhttp.open("GET", "logout-user.php");
            xhttp.send();
        }
    </script>
</body>

</html>
