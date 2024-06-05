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
    let headerVal = header.replace(/(\s)/g, '-');
    jQuery(this).attr('id', `${headerVal}`);
    let tocItem = `<a val="${headerVal}" class="toc-item" href="#">${header}</a>`;
    jQuery('#TOC-container').append(tocItem);
});

jQuery('#TOC-div').on('click', '.toc-item', function () {
    let scrollItem = jQuery(this).attr('val');
    jQuery(`#${scrollItem}`)[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

jQuery('#TOC-div').on('click', '#TOC-show', function () {
    let hasClass = jQuery(`#TOC-show`).hasClass('TOC-hidden');
    hasClass === true ? jQuery(`#TOC-show`).removeClass('TOC-hidden') : jQuery(`#TOC-show`).addClass('TOC-hidden');
    jQuery(`#TOC-container`).toggle();
});

//table of contents + show hide

let storedPref = localStorage.getItem('showHidePref');

if (!storedPref) {
    localStorage.setItem('showHidePref', '[{"name":"test"}]');
}

jQuery('.bg_blockhdr h3').each(function (index) {
    let header = jQuery(this).text();
    let headerVal = header.replace(/(\s)/g, '-');
    let showHideIcon = `<div class="TOC-show" tabindex="0"></div>`;
    jQuery(this).parent('.bg_blockhdr').attr('id', `${headerVal}`);
    jQuery(this).parent('.bg_blockhdr').append(showHideIcon);
    let tocItem = `<a val="${headerVal}" class="toc-item" href="#">${header}</a>`;
    jQuery('#TOC-container').append(tocItem);
    if(index === jQuery('.bg_blockhdr h3').length -1){
        let tempVal = JSON.parse(storedPref);
        tempVal.forEach(function (item) {
        jQuery(`#${item.name}`).children('.TOC-show').addClass('TOC-hidden');
        jQuery(`#${item.name}`).nextAll('.bg_blockcolor:first').hide();
    });
    }
});

jQuery('#TOC-div').on('click', '.toc-item', function () {
    let scrollItem = jQuery(this).attr('val');
    jQuery(`#${scrollItem}`)[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    let hasClass = jQuery(`#${scrollItem}`).children('.TOC-show').hasClass('TOC-hidden');
    let storedPref = JSON.parse(localStorage.getItem('showHidePref'));
    if (hasClass) {
        jQuery(`#${scrollItem}`).children('.TOC-show').removeClass('TOC-hidden');
        jQuery(`#${scrollItem}`).nextAll('.bg_blockcolor:first').show();
        let tempArray = storedPref.filter(el => el.name != scrollItem);
        let tempArrayStringify = JSON.stringify(tempArray);
        localStorage.setItem('showHidePref', tempArrayStringify);
    }
});

jQuery('.bg_blockhdr, #TOC-div').on('click', '.TOC-show', function () {
    let hasClass = jQuery(this).hasClass('TOC-hidden');
    let storedPref = JSON.parse(localStorage.getItem('showHidePref'));
    if (hasClass) {
        jQuery(this).removeClass('TOC-hidden');
        jQuery(this).parent('.bg_blockhdr').nextAll('.bg_blockcolor:first').show();
        let tempArray = storedPref.filter(el => el.name != jQuery(this).parent('.bg_blockhdr').attr('id'));
        let tempArrayStringify = JSON.stringify(tempArray);
        localStorage.setItem('showHidePref', tempArrayStringify);
    }
    else {
        jQuery(this).addClass('TOC-hidden');
        jQuery(this).parent('.bg_blockhdr').nextAll('.bg_blockcolor:first').hide();
        let storedPrefVal =
        {
            "name": `${jQuery(this).parent('.bg_blockhdr').attr('id')}`
        }
        let tempArray = [...storedPref,storedPrefVal];
        let tempArrayStringify = JSON.stringify(tempArray);
        localStorage.setItem('showHidePref', tempArrayStringify);
    }
    if (jQuery(this).attr('id') === 'TOC-dropdown') {
        jQuery(`#TOC-container`).toggle();
    }

});

//show hide with toc without local storage

jQuery('.bg_blockhdr h3').each(function () {
    let header = jQuery(this).text();
    let headerVal = header.replace(/(\s)/g, '-');
    let showHideIcon = `<div class="TOC-show" tabindex="0"></div>`;
    jQuery(this).parent('.bg_blockhdr').attr('id', `${headerVal}`);
    jQuery(this).parent('.bg_blockhdr').append(showHideIcon);
    let tocItem = `<a val="${headerVal}" class="toc-item" href="#">${header}</a>`;
    jQuery('#TOC-container').append(tocItem);
});

jQuery('#TOC-div').on('click', '.toc-item', function () {
    let scrollItem = jQuery(this).attr('val');
    jQuery(`#${scrollItem}`)[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

jQuery('.bg_blockhdr, #TOC-div').on('click', '.TOC-show', function () {
    let hasClass = jQuery(this).hasClass('TOC-hidden');
    hasClass === true ? jQuery(this).removeClass('TOC-hidden') : jQuery(this).addClass('TOC-hidden');
    if (jQuery(this).attr('id') === 'TOC-dropdown') {
        jQuery(`#TOC-container`).toggle();
    }
    else {
        jQuery(this).parent('.bg_blockhdr').nextAll('.bg_blockcolor:first').toggle();
    }
});

function showHideBlockCus(element) {
    if (element.checked) {

        if (jQuery(element).parent().text().includes('Involved Parties')) {
            jQuery(element).parent().parent().parent().next('.tcblock').show();
            return;
        }

        if (jQuery(element).parent().parent().next('.bg_blockcolor').length != 0) {
            jQuery(element).parent().parent().next('.bg_blockcolor').show();
        } else {
            jQuery(element).parent().parent().parent().children('.bg_blockcolor').show();
        }
    } else {

        if (jQuery(element).parent().text().includes('Involved Parties')) {
            jQuery(element).parent().parent().parent().next('.tcblock').hide();
            return;
        }

        if (jQuery(element).parent().parent().next('.bg_blockcolor').length != 0) {
            jQuery(element).parent().parent().next('.bg_blockcolor').hide();
        } else {
            jQuery(element).parent().parent().parent().children('.bg_blockcolor').hide();
        }
    }
}

jQuery('.bg_blockhdr').each(function (i, e) {
    jQuery(e).children('h3').append("<input type='checkbox' checked='checked' onchange='showHideBlockCus(this)'/>");
});
