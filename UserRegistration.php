<!DOCTYPE html>
<html>
<head><meta charset="ISO-8859-1"><title> User Registration</title>
<style>
.register-box{
  width:38%;   
  height:34em; 
  margin:auto; 
  text-align:center; 
  border-radius:0.5em; 
  box-shadow:9px 9px 18px 9px rgba(0,0,0,0.1);	
}
h1{ 
  padding-top:0.9em;      
  text-align:center;
  color:#013289; 
}
input[type=text],input[type=password],input[type=email]{
  margin:0.5em; 
  padding:0.7em 0em 0.7em 0.5em; 
  width:65%; 
  font-size:1.1em;
  outline:none; 
  border:none;
  border-bottom:1px solid #013289;     
  background-color:inherit;
}
input[type=text]:focus,input[type=password]:focus,input[type=email]:focus{
  transition:0.3s; 
  border-bottom:2px solid #013289; 
}
input::placeholder{ 
  font-size:18px; 
  color:#013289; 
} 
input[type=submit],input[type=submit]:focus{  
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
a{
  text-decoration:none;
  color:#4154f1;
}
  
</style>
</head>
<body> <br>
<div class="register-box"> 
	<h1>Registration</h1>   
	<p style="text-align:center;font-size:1.2em;">Already have an account ? <a href="user-login.php">Sign in </a></p> <br>    
		<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">			
            <input type="text" id="firstname"  name="firstname" placeholder="Enter Your Firstname *" required><br>
			<input type="text" id="lastname"  name="lastname" placeholder="Enter Your Lastname *" required><br> 
            <input type="email" name="email" placeholder="Enter Your Mail Id *" required><br>
			<input type="password" id="password" name="password" placeholder="Create Your Password *" required><br>
			<label style="float:right;font-size:1.2em;margin:0px 1.5em 0em 0.7em;">Show Password</label>
			<input type="checkbox" onclick="check_password()" style="float:right;"><br><br> 
            <input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
			<input type="submit" value="Create Account">
		</form><br>
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
        
        
        if ($conn->connect_error) {
            die("Database Connection Error : " . $conn->connect_error);
        }
        

        $firstname=$_POST['firstname'];
        $lastname=$_POST['lastname'];
        $email=$_POST['email'];
        $password=$_POST['password'];



        $sql = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) 
        {
            ?>
                <script>alert('User Already Exist');</script>
            <?php
        }
        else{
            $encryptPassword = password_hash($password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO users(firstname,lastname,email,password) VALUES ('$firstname', '$lastname','$email' ,'$encryptPassword')";

            if ($conn->query($sql) === TRUE) {
                ?>
                    <script>alert('User Registered Successfully');location.replace('UserLogin.php');</script>
                <?php
            } else {
                ?>
                    <script>alert('Error While Registering');</script>
                <?php
            }
        }
    }    
?>
</body>
</html>
