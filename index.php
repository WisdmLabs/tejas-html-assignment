<?php
    session_start();
?>
<html>
    <head><meta charset="ISO-8859-1"><title> Homepage </title>
        <style>  
        nav{ 
        margin:-1em -0.5em 0em -0.5em; 
        padding:10px; 
        text-align:right;
        background-color:#ffffff;
        }
        nav ul{	list-style: none;	}
        nav li{
        display:inline-block;    
        position: relative; 
        margin-top:0.5em;   
        }
        nav a, nav a:focus,nav button, nav button:focus{
        margin:10px 10px 0px 20px;
        text-decoration:none;
        padding: 10px 0 10px 30px;
        font-size: 16px;
        font-weight: 700;  
        color: #013289;
        white-space: nowrap;
        transition: 0.3s;   
        border:none;
        outline:none;
        background:inherit;
        cursor:pointer;
        } 
        nav a:hover	,nav button:hover	{	color: #4154f1;  }     
        h2{
            text-align:center;
        }     
        .First-para-div,.Second-para-div{
            margin:5em;
        }
        </style>
    </head>
    <body>

    <nav> 
     <ul> 
          <li><a href="user-login.php">Login</a></li>
          <li><a href="UserRegistration.php" style="padding: 8px 20px;margin-left:30px;border-radius:4px;color: #fff;background: #4154f1;">Register</a></li>        
     </ul>
    </nav><br><br>
    <h2>Welcome to Wisdm</h2>

    <div class="First-para-div">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
    <?php
            if(isset($_SESSION['email'])){
                ?>
                <script>document.getElementById('logoutBtn').style.display="block";</script>
                    <div class="Second-para-div">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                <?php
            }    
    ?>
    </body>
</html>

