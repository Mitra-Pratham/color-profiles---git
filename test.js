// links creator
let auditIndex;

jQuery('#embeddedObject th').each(function () {
    if (jQuery(this).text().includes('Audit')) {
        auditIndex = Number(jQuery(this).index()) + 1;
    }
});


jQuery(`#embeddedObject td:nth-child(${auditIndex})`).each(function () {
    let tempURL = jQuery(this).text();
    if (tempURL.includes('https://')) {
        let tempName = `Go to Audit Trail`;
        let tempHREF = `href="${tempURL}"`;
        let tempHTML = `<a ${tempHREF} target="_blank">${tempName}</a>`
        jQuery(this).html(tempHTML);
    }
});


//table of contents

jQuery('.bg_blockhdr h3').each(function () {
    let header = jQuery(this).text();
    let headerVal=header.replace(/ /g,'-')
    jQuery(this).attr('id', `${headerVal}`);
    let tocItem = `<a val=${headerVal} class="toc-item" href="#">${header}</a>`;
    jQuery('#TOCDiv').append(tocItem);
});

jQuery('#TOCDiv').on('click', '.toc-item', function () {
    let scrollItem = jQuery(this).attr('val');
    jQuery(`#${scrollItem}`)[0].scrollIntoView();
});
