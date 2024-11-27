// comments creator
jQuery(document).ready(function () {
    let commentIndex, authorIndex;
    let commentArayObject = [];

    jQuery('#search_ELMC_block #embeddedObject th').each(function () {
        if (jQuery(this).text().includes('Comments')) {
            commentIndex = Number(jQuery(this).index());
        }
        else if (jQuery(this).text().includes('Author')) {
            authorIndex = Number(jQuery(this).index());
        }
    });

    jQuery(`#search_ELMC_block #embeddedObject tbody tr`).each(function () {
        let tempObj = {
            comments: '',
            author: ''
        }
        jQuery(this).children('td').each(function (index) {

            if (index === commentIndex) {
                tempObj.comments = jQuery(this).text();
            }
            else if (index === authorIndex) {
                tempObj.author = jQuery(this).text();
            }

        });
        commentArayObject.push(tempObj);
    });

    jQuery('#search_ELMC_block #embeddedObject').hide();
    jQuery('#search_ELMC_block #pagingTopBar').hide();
    jQuery('#search_ELMC_block #pagingBottomBar').hide();

    function commentsElement() {
        return `
                <div id="comments-parent">
                ${createComments(commentArayObject)}
                </div>
                `
    }

    function createComments(arr) {
        return arr.map(el => {
            return `
            <div class="comments-card">
                <p class="comments-item">${el.comments}</p>
                <p class="author-item">${el.author}</p>
            </div>`
        }).join('');
    }

    jQuery('#search_ELMC_block').append(commentsElement());
});



// -------------------------------------------------------------------------



//comments Creator w/ Custom Field - Memo

jQuery(document).ready(function () {

    let editMode = jQuery('#comment-string textarea').length; //for edit mode, it should be greater than 0

    let isComments;

    let commentsData = [];

    let commentsTextAreaHTML = `
    <div class="input-box">
            <textarea id="new-comment" placeholder="Write a comment" rows="1"></textarea>
            <div>
            <button id="add-comment" class="btn">
                Add Comment
            </button>
            </div>
        </div>
    `
    if(editMode > 0) {
        jQuery('#ELM-Comments-Block').append(commentsTextAreaHTML);
        isComments = jQuery('#comment-string textarea').val();
    }
    else if (editMode <=0){
        isComments = jQuery('#comment-string div').text();
    }

    if (isComments != '') {
        commentsData = JSON.parse(isComments);
        renderComments(commentsData);
    }
    else {
        commentsData = [];
        renderComments(commentsData);
    }


    //render comments container function
    function renderComments(data) {
        jQuery('#comments-container').empty();
        let tempHTML = data.map(function (el) {
            
            return `
            <div id=${el.id} class="comments-card">
                <p class="comments-item">${el.comment}</p>
                <p class="author-item">${el.author} - ${el.date}</p>
                ${el.replies.length > 0 ? `
                    <div class="replies-container">
                ${el.replies.map(renderReplies).join("")}
                <div>` : ''}
                ${editMode > 0 ? `
                    <div class="replies-input-box" value=${el.id}>
                    <textarea class="reply-text" placeholder="Write a reply" rows="1"></textarea>
                    <div>
                        <button class="add-reply-btn btn">Add Reply</button>
                    </div>
                </div>` : ''}
            </div>`
        });
        jQuery('#comments-container').append(tempHTML);
        saveCommentsToDB(data);
    }

    //render replies function
    function renderReplies(element) {
        
        return `
            <div id=${element.id}.id} class="replies-card">
                <p class="replies-item">${element.reply}</p>
                <p class="author-item">${element.author} - ${element.date}</p>
            </div>`
    }

    function saveCommentsToDB(data){
        let newData = JSON.stringify(data);
        jQuery('#comment-string textarea').val(newData);
    }

    //add comment button function
    jQuery('.input-box').on('click', '#add-comment', function () {
        let newComment = jQuery('#new-comment').val().trim();
        let ELMID = jQuery('#command_idNumber').val().trim();
        let commentAuthor = jQuery('#userDropdown .iconText').text().trim();
        let currentDate = new Date();
        let commentDate = currentDate.toLocaleString();
        if (newComment) {
            let tempObj = {
                id: ELMID + '-' + commentsData.length,
                comment: newComment,
                author: commentAuthor,
                date: commentDate,
                replies: []
            }
            commentsData.push(tempObj);
            jQuery('#new-comment').val('');
            renderComments(commentsData);
        }
    })


    //reply button click function
    jQuery('#comments-container').on('click', '.add-reply-btn', function () {
        
        
        let replyText = jQuery(this).parent().siblings('.reply-text').val().trim();
        let commentID = jQuery(this).closest('.replies-input-box').attr('value');
        let replyAuthor = jQuery('#userDropdown .iconText').text().trim();
        let currentDate = new Date();
        let replyDate = currentDate.toLocaleString();

        if (replyText) {
            let newData = commentsData.map(function (el) {
                if (el.id === commentID) {
                    let tempObj = {
                        id: el.id + '-reply-' + el.replies.length,
                        reply: replyText,
                        author: replyAuthor,
                        date: replyDate
                    }
                    el.replies.push(tempObj);
                }
                return el;
            });
            jQuery(this).siblings('.reply-text').val('');
            
            renderComments(newData);
            
        }
    });


});

