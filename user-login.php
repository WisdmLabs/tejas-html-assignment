<!DOCTYPE html>
<html>

<head>
    <meta charset="ISO-8859-1">
    <title> UserLogin </title>
    <link rel="stylesheet" href="user-login.css">
</head>

<body>
    <div class="LoginBox">
        <h1>Login</h1>
        <p>Don't have an account ?<a href="UserRegistration.php"> Sign Up</a></p>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">
            <label>Email </label><input type="email" name="email_of_user" required>
            <label>Password </label><input type="password" id="password" name="password_of_user" required>
            <label id="showPasswordLabel">Show Password</label>
            <input type="checkbox" onclick="check_password()">
            <a href="forgot-password.php" id="forgotPassLink">Forgot Password ?</a>
            <input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
            <input type="submit" value="Sign-in">
        </form>
    </div>
    <script>
        function check_password() {
            var x = document.getElementById("password");
            if (x.type == "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }

        function setFlag() {
            document.getElementById('flagKey').value = "1";
        }
    </script>
    <?php
    include('database-connection.php');
    if ($_POST['flagKey'] == "1") {
        $email = $_POST['email_of_user'];
        $password = $_POST['password_of_user'];

        $sql = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $storedHashedPassword = $row["password"];

            if (password_verify($password, $storedHashedPassword)) {
                session_start();
                $_SESSION['email'] = $email;
                header("Location: index.php");
                exit();
            } else {
    ?>
                <script>
                    alert('Invalid Credentials');
                </script>
            <?php
            }
        } else {
            ?>
            <script>
                alert("User Doesn't Exist !");
            </script>
    <?php
        }
    }
    ?>
</body>

</html>
