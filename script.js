const reels = [
    {
        isMuted: true,
        username: "car.visuals",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Rolling shots hit different 🚗✨",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767433849/video1_as3hlw.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf"
    },
    {
        isMuted: true,
        username: "retro.music.in",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "Kishore Kumar on loop 🎶💛",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431759/video2_qwsbqg.mp4",
        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        isMuted: true,
        username: "ap.traveldiaries",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "Floating above the world 🌍🎈",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431760/video3_qvfpwg.mp4",
        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        isMuted: true,
        username: "mindful.vibes",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "Slow down. Breathe. Smile 🙂",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431790/video4_au2vvy.mp4",
        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        isMuted: true,
        username: "bmw.motion",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Elegance in every curve 🖤",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431751/video5_f9ija3.mp4",
        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        isMuted: true,
        username: "fitmind.daily",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "Let the words heal you 🌿",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431767/video6_jouxt4.mp4",
        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        isMuted: true,
        username: "bollywood.reels",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "ZNMD moments we all love ❤️",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431799/video7_wfgc1g.mp4",
        userprofile: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
    },
    {
        isMuted: true,
        username: "dev.stories",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Every big idea starts small 👨‍💻",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431787/video8_jcl6hg.mp4",
        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        isMuted: true,
        username: "lyrics.vibes",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "Feel it. Don’t explain it 🎧",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431785/video9_rpstsq.mp4",
        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        isMuted: true,
        username: "ride.safe.india",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "Helmet on. Mind focused. Ride safe 🏍️",
        video: "https://res.cloudinary.com/dwryjvh3b/video/upload/v1767431773/video10_jv9los.mp4",
        userprofile: "https://plus.unsplash.com/premium_photo-1744395627197-dabba2218b6d"
    }
];


var allReels = document.querySelector(".all-reels");



function addData() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `                <div class="reel">
                    <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>

                    <div class="mute" id=${idx}>${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}</div>
                    
                    <div class="bottom">
                        <div class="user">
                            <img src=${elem.userprofile} alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed ? 'UnFollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line">'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
    })

    allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;

        }
        else {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        }

        addData();
    }

    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {

            reels[dets.target.id].isFollowed = true;

        }
        else {

            reels[dets.target.id].isFollowed = false;
        }

        addData();
    }

    if (dets.target.className == 'mute') {
        if (!reels[dets.target.id].isMuted) {

            reels[dets.target.id].isMuted = true;

        }
        else {

            reels[dets.target.id].isMuted = false;
        }
        addData();

    }



})


allReels.addEventListener("scroll", function () {
    reels.forEach((reel, idx) => {
        reel.isMuted = true;

        const video = document.querySelector(
            `.reel:nth-child(${idx + 1}) video`
        );

        const muteIcon = document.querySelector(
            `.reel:nth-child(${idx + 1}) .mute`
        );

        if (video) video.muted = true;

        if (muteIcon) {
            muteIcon.innerHTML = `<i class="ri-volume-mute-fill"></i>`;
        }
    });
});




