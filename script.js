document.onkeydown = keyPress;
var textarea = document.getElementById('commentTextarea');

function addComment(event) {
    var commentText = textarea.value;
    if (commentText) {
        document.querySelector('.static-comments').innerHTML += '<div class="comment">\n' +
            '                <div class="comment-title">\n' +
            '                    <span class="user-name">Лилия Семёновна</span>\n' +
            '                    <span class="user-date">14 октября 2011</span>\n' +
            '                </div>\n' +
            '                \n' +
            '                <div class="comment-body">\n' +
            '                    <p class="coment-body-inner">\n' +
            commentText +
            '                    </p>\n' +
            '                </div>\n' +
            '            \n' +
            '            </div>';
    }
    textarea.value = "";
};

function keyPress(e) {
    if (ifCtrlEnterKeyPressed(e) && isMsgFieldActive()) {
        e.preventDefault();
        addComment();
    }
}

function isMsgFieldActive() {
    return document.activeElement === textarea;
}

function ifCtrlEnterKeyPressed(event) {
    return event.ctrlKey && event.keyCode === 13;
}

