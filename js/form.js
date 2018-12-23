function ajax_Post(url, data, onSuccess)
{
	$.post
	(
		url,
		data,
		function(data, textStatus)
		{
			if(textStatus == 'success')
			{
				if($('response', data).attr('status') == 'E_OK')
				{
					if(typeof(onSuccess) == 'function')
					{
						onSuccess(data);
					}
				}
				else
				{
					var msg = $('response', data).attr('message');
					if(typeof msg != 'undefined')
					{
						alert(msg);
					}
				}
			}
			else
			{
				alert("Can't connect to server. Please check your internet connection.");
			}
		}
	);
}