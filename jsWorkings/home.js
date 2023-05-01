// custom video section carousal

var video_content_wrapper = document.getElementById('video_content_wrapper');
var dots_workings = document.getElementById('dots_workings');
var dots_list = dots_workings.querySelectorAll('.dot');

var video_arr = [

    `
        <div class="video_box_content">

            <div class="video_box_detail">

                <div class="video_box_topic">
                    Unwanted SNOOPS v/s WAFER Security!! Who all are watching your internet activity?
                </div>

                <div class="video_box_description">
                    While enjoying our internet surfing we often neglect
                    third party websites trying to steal user data. This small ignorance on user part
                    results into leakage of confidential information into the database of malicious
                    website creating unwanted havocs in user's life.
                    So protect yourself and your loved ones by getting WAFER Nova!!
                </div>

                <div class="video_box_link_action">
                    <a href="https://www.youtube.com/watch?v=NWiEiH1_acI" target='_blank'>
                        <span>Watch full video</span>
                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.99207 13.9677L14.825 4.13477M14.825 4.13477H6.49167M14.825 4.13477V12.4681"
                                stroke="#0288D1" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </a>
                </div>

            </div>

            <div class="video_box_image_contaienr">

                <div class="video_box_image">
                    <a href="https://www.youtube.com/watch?v=NWiEiH1_acI" target='_blank'>
                        <img src="https://i.postimg.cc/6qGBZ5gm/video2.png" class="first_videos"
                            alt="" />
                        <div class="video_box_image_design_element"></div>
                        <div class="vide_box_play_button">
                            <img src="https://i.postimg.cc/MZs1dWyc/home-video-play-button.png"
                                alt="play button" />
                        </div>
                    </a>
                </div>

            </div>

        </div>
    `,

    `
        <div class=" video_box_content">

            <div class="video_box_detail">

                <div class="video_box_topic">
                    G20 event
                </div>

                <div class="video_box_description">
                    WhiteLint team presenting at India's G20 Presidency, 2nd Education Working Group
                    meeting, Amritsar.
                </div>

                <div class="video_box_link_action">
                    <a href="https://www.youtube.com/watch?v=399gi8Mx9io" target='_blank'>
                        <span>Watch full video</span>
                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.99207 13.9677L14.825 4.13477M14.825 4.13477H6.49167M14.825 4.13477V12.4681"
                                stroke="#0288D1" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </a>
                </div>

            </div>

            <div class="video_box_image_contaienr">

               <div class="video_box_image">
                    <a href="https://www.youtube.com/watch?v=399gi8Mx9io" target='_blank'>
                        <img src="https://i.postimg.cc/Kjrnx8kx/video3.png" class="first_videos"
                            alt="" />
                        <div class="video_box_image_design_element"></div>
                        <div class="vide_box_play_button">
                            <img src="https://i.postimg.cc/MZs1dWyc/home-video-play-button.png"
                                alt="play button" />
                        </div>
                    </a>
                </div>

            </div>

        </div>
    `,

    `
        <div class="video_box_content">

            <div class="video_box_detail">

                <div class="video_box_topic">
                    Disgruntled Ex-Employee v/s WAFER Security-How safe is your workplace?
                </div>

                <div class="video_box_description">
                    There isn't any organization that is short of enemies/haters and when it comes to
                    security of your network, especially against disgruntled ex-employees, the only full
                    proof solution is WhiteLint's WAFER Nova!
                    Protect your organization and your confidential data-even from insider attacks.
                </div>

                <div class="video_box_link_action">
                    <a href="https://www.youtube.com/watch?v=TKKXDZ-czDw" target='_blank'>
                        <span>Watch full video</span>
                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.99207 13.9677L14.825 4.13477M14.825 4.13477H6.49167M14.825 4.13477V12.4681"
                                stroke="#0288D1" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </a>
                </div>

            </div>

            <div class="video_box_image_contaienr">

                <div class="video_box_image">
                    <a href="https://www.youtube.com/watch?v=TKKXDZ-czDw" target='_blank'>
                        <img src="https://i.postimg.cc/kMVSsNdk/video1.png" class="first_videos"
                            alt="" />
                        <div class="video_box_image_design_element"></div>
                        <div class="vide_box_play_button">
                            <img src="https://i.postimg.cc/MZs1dWyc/home-video-play-button.png"
                                alt="play button" />
                        </div>
                    </a>
                </div>

            </div>

        </div>
    `

]

var index = 0;

start_carousal()
function start_carousal() {

    let video_box = video_arr[index];

    let next_slide = document.createElement("div");
    next_slide.classList.add('video_box');
    next_slide.classList.add('video_box_right');
    next_slide.innerHTML = video_box;

    video_content_wrapper.appendChild(next_slide);

    setTimeout(() => {
        switch_slide()
    }, 2500);

}

var starting_dot = document.getElementById('starting_dot');

function switch_slide() {

    let active_element = dots_workings.querySelector('.dot_active');
    active_element.classList.remove('dot_active');

    let next_element = active_element.nextElementSibling;
    if (next_element == undefined) {
        dots_list[0].classList.add('dot_active');
    }
    else { next_element.classList.add('dot_active'); }

    let videos_list = video_content_wrapper.querySelectorAll('.video_box');

    videos_list[0].classList.add('video_box_left');
    videos_list[1].classList.remove('video_box_right');

    setTimeout(() => {
        videos_list[0].remove();

        setTimeout(() => {
            if (index == 2) {
                index = 0;
                start_carousal()
            } else {
                index++;
                start_carousal()
            }
        }, 1500);

    }, 1000);
}

// custom video section carousal