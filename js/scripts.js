$(document).ready(function() {
    $("form#formOne").submit(function(event) {
		$('#trail1').hide();
		$('#trail2').hide();
		$('#path').hide();

 var plan = $("select#plan").val();
 var exprienced = $("select#exprienced").val();
 var passion = $("select#passion").val();
 var year = $("select#year").val();
 var prefer = $("select#prefer").val();
 var dif = $("select#dif").val();

 if ((dif === 'easy') && (plan === 'yes') && (exprienced === 'yes1') && (passion === 'yes2') && (year === 'yes3') && (prefer === 'college')) {
$('#trail1').show();
} else {
 if ((dif === 'hard') && (plan === 'no') && (exprienced === 'no1') && (passion === 'no2') && (year === 'no3') && (prefer === 'boot')) {
  $('#trail2').show();
} else  {
  if ((dif === 'na') && (plan === 'na') && (exprienced === 'na') && (passion === 'na') && (year === 'na') && (prefer === 'na')) {
      $('#path').show(); {};
         }
       }
     }
   });
});
