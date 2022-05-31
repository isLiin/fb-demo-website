/**
 * Khi chay chuong trinh dau tien no se thuc hien
 */

function showPost(container) {
    let post = "";
    container.forEach(element => {
        post += element;
    });
    itemMainContainer.mainContainerContent.html('');
    itemMainContainer.mainContainerContent.append(post);
}

// iContainerPost : chua nhung bai post duoc upload len web
const iContainerPost = [];
function containerPost(iPost) {
    iContainerPost.unshift(iPost);
    return iContainerPost;
}

function getPoster(iStatus, iImg) {
    console.log(iImg)
    return  `<div class="item-content row">
                <div class="col-12 row item-content-header">
                    <div class="col-1 icon-user p-0 m-0">
                        <a href=""><img src="./IMG/user.jpg" alt=""></a>
                    </div>
                    <div class="col-11 row content-reading">
                        <div class="col-12 name-user mb-2"><a href="">User name</a></div>
                        <div class="col-12">
                            <div class="reading">
                                <span>${iStatus}</span>
                                <div class="content-img">
                                    <img src="./IMG/sponsor.png" alt="">
                                </div>
                            </div>
                            <div class="action-content mt-3">
                                <div onClick="iLikeClick()"  class="btn btn-danger action-content-like"> 
                                    <i class="far fa-heart"></i>
                                    <span>1406</span>
                                </div>
                                <div onClick="iCommentClick()" class="btn btn-secondary action-content-cmt">
                                    <i class="fas fa-feather-alt"></i>
                                    Comment</div>
                                <div onClick="iShareClick()" class="btn btn-info action-content-share">
                                <i class="far fa-paper-plane"></i> Share
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
};