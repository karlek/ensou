<head>
   <meta charset="utf-8">
   <link href="inc/css/reset.css" rel="stylesheet">
   <link href="inc/css/style.css" rel="stylesheet">
</head>

<?php
   if(isset($_GET['v']))
      $v = htmlentities(substr($_GET['v'], strpos($_GET['v'], 'v=')+2, 11));

   if(isset($_GET['s']))
   {
      $s = htmlentities($_GET['s'], ENT_QUOTES);
      if(strlen($s) == 0)
         $s = 'null';
   }
   else
      $s = 'null';

   if(isset($_GET['e']))
   {
      $e = htmlentities($_GET['e'], ENT_QUOTES);
      if(strlen($e) == 0)
         $e = 'null';
   }
   else
      $e = 'null';
?>
<script>
videoId=<?php echo '"'.$v.'"'; ?>;
start=<?php echo $s; ?>;
end=<?php echo $e; ?>;
</script>

<div id="content">
   <form>
      <label for="v">Youtube url:</label>
      <input type="text" name="v" size="50"><br>
      <label for="s">Start time (in seconds):</label><br>
      <input type="text" name="s" size="2"><br>
      <label for="e">End time (in seconds):</label><br>
      <input type="text" name="e" size="2"><br>
      <input type="submit" value="AB-repeat!">
   </form>
</div>

<?php if(isset($_GET['v'])) echo'<br><a href="ab.php">AB repeat a new video</a>?' ?>
<script type="text/javascript" src="inc/js/swfobject/swfobject.js"></script>
<script type="text/javascript" src="inc/js/ytub.js"></script>
