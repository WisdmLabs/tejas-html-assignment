<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1"><title> UserLogin </title>
<style>
.LoginBox{
	text-align:center; 
 	margin:auto; 
	padding:1em;
	border-radius:0.5em; 
	box-shadow:9px 9px 18px 9px rgba(0,0,0,0.1);
	height:27em;    
	width:32%; 
}
.LoginBox a,.LoginBox p{
	font-size:1.1em;  
	text-decoration:none;
}
.LoginBox a{
	color:#4154f1; 
}
.LoginBox label{
	float:left; 
	margin-left:1.7em;
	font-size:1.3em; 
	color:#1c1c1c; 
}
.LoginBox input[type=email],.LoginBox input[type=text],.LoginBox input[type=password]{
	outline:none;
	border:none;
	font-size:1.2em;
	width:19em;
    border-bottom:1px solid #013289;  
}
input[type=password]:focus,input[type=text]:focus,input[type=email]:focus{
  transition:0.3s; 
  border-bottom:2px solid #013289; 
}
.LoginBox input[type=submit]{ 
    float:right;  
    margin:1.8em 1em 0em 0em; 
    padding:0.7em 2em;  
    border:none;     
    font-size:16px;
    border-radius:5px;
    cursor:pointer;
    outline:none; 
    color:#ffffff;
    background-color:#4154f1; 
}
</style>
</head>
<body> 
<br><br><br><br>
<div class="LoginBox">
<h1>Login</h1>
<p>Don't have an account ?<a href="user-registration.php"> Sign Up</a></p><br><br>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">
<label>Email </label><br><br><input type="email" name="email_of_user" required><br><br><br>
<label>Password </label><br><br><input type="password" id="password" name="password_of_user" required><br>
<label style="float:right;font-size:1em;font-weight:10;color:#1c1c1c;margin:1em 1em 0em 0em">Show Password</label>
<input type="checkbox" onclick="check_password()" style="float:right;accent-color:#4154f1;margin:1.2em 1em 0em 0em;"><br><br>		
<a href="forgot-password.php" style="float:left;margin-left:0.5em;">Forgot Password ?</a>
<input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
<input type="submit" value="Sign-in"><br>
</form> 
</div>
<script>
function check_password() {
	  var x = document.getElementById("password");
	  if (x.type == "password") {
	    x.type = "text";
	  } 
	  else {
	      x.type = "password";
	  }
}
function setFlag(){
    document.getElementById('flagKey').value="1";
}
</script>
<?php
    if($_POST['flagKey']=="1")
    {
        $servername = "localhost";  
        $username = "tejas";  
        $password = "Tej@s";  
        $database = "php";  
        
        $conn = new mysqli($servername, $username, $password, $database);

        $email = $_POST['email_of_user']; 
        $password = $_POST['password_of_user'];

        $sql = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) 
        {
            $row = $result->fetch_assoc();
            $storedHashedPassword = $row["password"]; 

            if (password_verify($password, $storedHashedPassword)) {
                 session_start();
                 $_SESSION['email']=$email;
                 header("Location: index.php");
                 exit();
            } else {
                ?>
                    <script>alert('Invalid Credentials');</script>
                <?php
            }
        } 
        else {
            ?>
                <script>alert("User Doesn't Exist !");</script>
            <?php
        }
    }
?>
</body>
</html>