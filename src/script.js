function convertToSlug(text)
{
  var ticketId = text.substring(0, text.indexOf(' '))
  .replace('[','')
  .replace(']',''); 
  var name = text.substring(text.indexOf(' ') + 1);

    return ticketId +'-'+ name
        .toLowerCase()
				.replace('_','-')
  			.replace('ä','ae')
  			.replace('ö','oe')
  			.replace('ü','ue')
  			.replace('ß','ss')
  			.replace('Ä','Ae')
  			.replace('Ö','Oe')
  			.replace('Ü','Ue')  		
        .replace(/[^^-\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

$('input[type="text"], select').on('keyup keydown change', function(){
	
	var type = $("#type").val();
	var branch_name = (type != "" ? type + '/':"" )+ convertToSlug($('#ticket_name').val());
	
	$('textarea').val( branch_name );
	
})