<!DOCTYPE html>
<html><head>
<meta charset="ISO-8859-1"><title>Forgot Password</title>
<style>
.VerifyBox{
  margin:auto;
  margin-top:2em; 
  height:auto;  
  width:35%;    	     
  padding:1.2em 0em 1.5em 0em;   
  text-align:center; 
  border-radius:0.5em 0.5em 0em 0em; 
  box-shadow:9px 9px 18px 9px rgba(0,0,0,0.1);
}
label{
  float:left;
  margin-left:2em;  
  font-size:1.4em; 
  font-weight:bold;  
}
input[type=text],input[type=password],input[type=email]{
  width:80%;      
  margin-top:0.8em; 
  padding:0.2em 0.4em 0.1em 0em;  
  font-size:20px;	
  border:none;
  border-bottom:1.5px solid #013289;  
  outline:none; 
  background-color:inherit;  
}
input[type=text]:focus,input[type=password]:focus,input[type=email]:focus{
  border-bottom:2px solid #013289;
  transition:0.5s;
}
input[type=submit]{ 
  text-align:center;
  padding:0.6em 1.8em;    
  outline:none; 
  border-radius:0.2em;
  font-size:1.1em;
  cursor:pointer;  
  border:0.4px solid #000;
  background-color:#fff;
} 
input[type=submit]:hover{ 
  color:#fff; 
  border:none; 
  background-color:#4154f1;
}
</style>
<body>

<div class="VerifyBox">
<h1 style="color:#4154f1;">Forgot Password</h1><br><br><br>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" autocomplete="off" onsubmit="setFlag()">
	<label>Enter Your Mail Id</label>
    <input type="email" name="email" required><br><br>
    <label>Enter New Password </label>
    <input type="password" id="password1" name="newpassword" required><br><br>
    <label>Reenter New Password </label>
    <input type="password" id="password2" onblur="CheckPasswordMatch()" required><br><br><br>
    <input type="text" id="flagKey" style="display:none;" name="flagKey" value="0">
	<input type="submit" id="submitBtn" value="Verify & Change Password" disabled ><br><br>
</form>
</div>
<script>
function setFlag(){
    document.getElementById('flagKey').value="1";
}
function CheckPasswordMatch(){
    if(document.getElementById("password1").value===document.getElementById("password2").value){
        document.getElementById("submitBtn").disabled=false;
    }
    else{
      document.getElementById("submitBtn").disabled=true;
    }
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

        $email = $_POST['email']; 
        $password=$_POST['newpassword'];

        $sql = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) 
        {
          $encryptPassword = password_hash($password, PASSWORD_DEFAULT);
          
          $sql = "UPDATE users SET password='$encryptPassword' where email='$email'";

            if ($conn->query($sql) === TRUE) {
                ?>
                  <script>alert("Password Changed Successfully !");location.replace('user-login.php');</script>
                <?php
            } else {
              ?>
                <script>alert("Unable to change password !");location.reload();</script>
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