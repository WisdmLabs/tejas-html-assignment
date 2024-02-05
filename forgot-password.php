<!DOCTYPE html>
<html>

<head>
  <meta charset="ISO-8859-1">
  <title>Forgot Password</title>
  <link rel="stylesheet" href="forgot-password.css">
</head>

<body>

  <div class="VerifyBox">
    <h1 style="color:#4154f1;">Forgot Password</h1>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">
      <label>Enter Your Mail Id</label>
      <input type="email" name="email" required>
      <label>Enter New Password </label>
      <input type="password" id="password1" name="newpassword" required>
      <label>Reenter New Password </label>
      <input type="password" id="password2" onblur="CheckPasswordMatch()" required>
      <input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
      <input type="submit" id="submitBtn" value="Verify & Change Password" disabled>
    </form>
  </div>
  <script>
    function setFlag() {
      document.getElementById('flagKey').value = "1";
    }

    function CheckPasswordMatch() {
      if (document.getElementById("password1").value === document.getElementById("password2").value) {
        document.getElementById("submitBtn").disabled = false;
      } else {
        document.getElementById("submitBtn").disabled = true;
      }
    }
  </script>
  <?php
  include('database-connection.php');
  if ($_POST['flagKey'] == "1") {

    $email = $_POST['email'];
    $password = $_POST['newpassword'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $encryptPassword = password_hash($password, PASSWORD_DEFAULT);

      $sql = "UPDATE users SET password='$encryptPassword' where email='$email'";

      if ($conn->query($sql) === TRUE) {
  ?>
        <script>
          alert("Password Changed Successfully !");
          location.replace('user-login.php');
        </script>
      <?php
      } else {
      ?>
        <script>
          alert("Unable to change password !");
          location.reload();
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
