// Action btn create new post
btn_CreatePost.newPost.on('click', () => {
    actionCreatePost.iForm.removeAttr("hidden");
})

btn_CreatePost.newAction.on('click', () => {
    alert("This Action")
})

//=====================================================
//=====================================================
// Action btn content port
function iLikeClick() {
    $('.action-content-like').children('svg').toggleClass('fa');
    console.log(ivacon);

}

function iCommentClick() {
    alert("Comment")
}
function iShareClick() {
    alert("share")
}

function iCloseClick() {
    actionCreatePost.iForm.attr("hidden", "");
}

function iUploadClick() {
    let status_err =  $('.show-err-post');
    let img = btn_CreatePost.newIMG.val();
    let valText = actionCreatePost.iText.val().trim();
    if (valText.trim() != "") {
        iCloseClick()
        showPost(containerPost(getPoster(valText, img)));
        actionCreatePost.iText.val('');
        status_err.html("");
    }else{
        status_err.html("Status is null!");
    }
}
