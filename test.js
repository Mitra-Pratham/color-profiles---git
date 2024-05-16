jQuery('#embeddedObject td:nth-child(5)').each(function(){
    let tempName = jQuery(this).text();
    let tempHTML= `<a href='https://google.com' target="_blank">${tempName}</a>`
    jQuery(this).html(tempHTML);
});