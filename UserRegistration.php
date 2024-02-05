<!DOCTYPE html>
<html>

<head>
  <meta charset="ISO-8859-1">
  <title>User Registration</title>
  <link rel="stylesheet" href="user-registration.css">
</head>

<body>
  <div class="register-box">
    <h1>Registration</h1>
    <p id="topLinks">Already have an account ? <a href="user-login.php">Sign in </a></p>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">
      <input type="text" id="firstname" name="firstname" placeholder="Enter Your Firstname *" required>
      <input type="text" id="lastname" name="lastname" placeholder="Enter Your Lastname *" required>
      <input type="email" name="email" placeholder="Enter Your Mail Id *" required>
      <input type="password" id="password" name="password" placeholder="Create Your Password *" required>
      <label style="float:right;font-size:1.2em;margin:0px 1.5em 0em 0.7em;">Show Password</label>
      <input type="checkbox" onclick="check_password()" style="float:right;">
      <input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
      <input type="submit" value="Create Account">
    </form><br>
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
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
  ?>
      <script>
        alert('User Already Exist');
      </script>
      <?php
    } else {
      $encryptPassword = password_hash($password, PASSWORD_DEFAULT);

      $sql = "INSERT INTO users(firstname,lastname,email,password) VALUES ('$firstname', '$lastname','$email' ,'$encryptPassword')";

      if ($conn->query($sql) === TRUE) {
      ?>
        <script>
          alert('User Registered Successfully');
          location.replace('user-login.php');
        </script>
      <?php
      } else {
      ?>
        <script>
          alert('Error While Registering');
        </script>
  <?php
      }
    }
  }
  ?>
</body>

</html>
