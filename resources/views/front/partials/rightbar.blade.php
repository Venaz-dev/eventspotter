<div class="custom_rightbar pt-5 pl-4">
    <form action="#" method="post">
        <div class="search_container">
            <input type="text" class="search_friends" placeholder="Search for friends" name="" id="">
            <img class="searchbar_icon" src="{{asset('assets/newimages/rightbaricons/searchicon.svg')}}"
                alt="searchicon">
        </div>
    </form>
    <div class="sponsored_ads mt-4 p-3">
        <span class="">Sponsored ads</span>
    </div>
    <div class="show_requests mt-4 p-3">
        <div class="d-flex justify-content-end mb-4"><a href="{{url('/notifications')}}" class="primary_color seeAllRequests">See all</a>
        </div>
        <div class="friend_list_container d-flex align-items-center mb-3">
            <img class="profilePhoto_thumbnail" src="{{asset('assets/newimages/thumbnail.svg')}}" alt="thumbnail">
            <span class="description ml-2">You have a follow request
                from John Dereek</span>
            <span class="time_ago">2 hours ago</span>
        </div>
    </div>
    <div class="d-flex align-items-center flex-wrap">
        <a href="#" class="bottom_links">Privacy Policy</a>
        <div class="dot_separator mx-3"></div>
        <a href="#" class="bottom_links">Terms of service</a>
        <div class="dot_separator mx-3"></div>
        <a href="#" class="bottom_links">Disclaimer</a>
    </div>
    <div class="mt-2 pb-3 bottom_links_border"><a href="#" class="primary_color">More...</a></div>
    <div class="footer_notes d-flex align-items-center justify-content-between mt-4">
        <span class="">© Event Spotter. 2022</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img class="getApp" src="{{asset('assets/newimages/rightbaricons/getapp.svg')}}" alt="searchicon">
        </a>
    </div>
</div>