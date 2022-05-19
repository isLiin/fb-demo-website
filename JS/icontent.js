
let iLike = $('.action-content-like');
let iComment = $('.action-content-cmt');
let iShare = $('.action-content-share');
        
iLike.on('click', () =>{
    alert($('.action-content-like').children('span').html())
});
        