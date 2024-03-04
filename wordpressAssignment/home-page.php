<?php /* Template Name: Homepage */ ?>

<?php
get_header();
?>
<?php
if (have_posts()) {

    the_post();
    $page_title   = get_the_title();
    $page_content = get_the_content();
    $author_id    = get_post_field('post_author');
    $author_name  = get_the_author_meta('display_name', $author_id);
}
?>
<div class="workshop-container">
    <div class="workshop-header">
        <h1>Let's Begin Here: Approaching <br>Craft in Fiction Through Character </h1>
        <div class="workshop-tags">
            <span class="tag instructor">
                <i class="fa fa-user-circle" style="color:#4eafcd;"></i>&nbsp;&nbsp;David William Hill </span>
            <span class="tag category">Fiction</span>
            <span class="tag level">Advanced</span>
        </div>
    </div>
    <div class="workshop-pricing-signup">
        <div class="pricing">
            <div class="price-member">
                <div class="price">$200</div>
                <br>
                <div class="label">Member</div>
            </div>
            <div style="height: 6em;border-radius: 10px; border: 1.4px #434343 solid"></div>
            <div class="price-non-member">
                <div class="price">$259</div>
                <br>
                <div class="label">Non-Member</div>
            </div>
        </div>
        <button class="btn-signup">Sign Up</button>
    </div>
    <br>
    <br>
    <div class="signup">
        <a href="#" class="link-reduced-rate">Apply for Reduced-Rate Spot</a>
    </div>
    <br>
    <br>
    <div class="workshop-details">
        <div class="workshop-dates" style="padding-right:18em;border-right: 1px solid #828282;">
            <p>
                <i class="fa fa-calendar"></i><b>Jan 05 - Feb 15 </b><span style="color:red;">(5 Wednesdays)</span>
                <br>10:00am - 4:00pm (PST)
            </p>
        </div>
        <div class="workshop-location" style="padding-right:5em;border-right: 1px solid #828282;">
            <p>
                <i class="fa fa-map-marker"></i>2042 Balboa St., <br>San Francisco, CA 94121
            </p>
        </div>
        <div class="workshop-deadline">
            <p>
                <i class="fa fa-clock-o"></i><b>Registration deadline: </b><br>May 07 at 10:30am (PST)
            </p>
        </div>
    </div>
</div>

<div class="workshop-info">
    <div class="first-half">
        <p class="text">In order to write, one must read constantly, observe the world well, and take seriously the craft of writing. During this five-week course, we will focus on the last of these, the craft of writing—specifically, we will focus on three mainstays of fiction: character, dialogue, and scene. <br>
            <br> “I think that writers often feel more comfortable writing exposition and summary than scene, perhaps because in our own lives we often feel more comfortable observing than engaging, and scene is about getting our characters to engage,” says instructor Lori Ostlund. “In this class we will focus on creating scenes as a way to develop characters, demonstrate changes in them, and increase tension. <br>
            <br> “We will also spend a lot of time on dialogue, thinking about it as a way to reveal character and relationships and, perhaps most important, as a way to reveal the shifting power dynamics that are at work in those relationships and which create tension.” <br>
            <br> We will look at examples from short stories and novels and engage in in-class exercises that focus on these three craft building blocks. Participants will use these exercises to create work at home, which we will workshop during the last two weeks of class. “My goal,” Lori says, “is for us to think about these craft elements in ways that are new and generative.”
        </p>
        <br>
        <br>
        <br>
        <br>
        <div class="social-share-container">
            <p style="font-size: 18px;line-height: 27px;padding-left:1em;"> Share &nbsp;&nbsp;&nbsp;&nbsp; </p>
            <div class="social-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM13.2508 12.5271V19.0557H10.5495V12.5274H9.2V10.2776H10.5495V8.92678C10.5495 7.0914 11.3116 6 13.4766 6H15.279V8.25006H14.1524C13.3096 8.25006 13.2538 8.56447 13.2538 9.15125L13.2508 10.2773H15.2918L15.053 12.5271H13.2508Z" fill="#434343" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM13.2508 12.5271V19.0557H10.5495V12.5274H9.2V10.2776H10.5495V8.92678C10.5495 7.0914 11.3116 6 13.4766 6H15.279V8.25006H14.1524C13.3096 8.25006 13.2538 8.56447 13.2538 9.15125L13.2508 10.2773H15.2918L15.053 12.5271H13.2508Z" fill="white" fill-opacity="0.5" />
                </svg> &nbsp;&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.6658 10.169L11.6406 9.75375C11.5651 8.67755 12.2282 7.69456 13.2774 7.31323C13.6635 7.17765 14.3182 7.1607 14.7463 7.27934C14.9142 7.33018 15.2331 7.49966 15.4598 7.65219L15.8711 7.93184L16.3243 7.78778C16.5761 7.71151 16.9119 7.5844 17.063 7.49966C17.2057 7.42339 17.3316 7.38102 17.3316 7.40645C17.3316 7.5505 17.021 8.042 16.7608 8.31317C16.4083 8.6945 16.509 8.72839 17.2224 8.47417C17.6505 8.33011 17.6589 8.33011 17.575 8.49112C17.5246 8.57586 17.2644 8.87245 16.9874 9.14362C16.5174 9.60969 16.4922 9.66054 16.4922 10.0503C16.4922 10.652 16.2068 11.9062 15.9214 12.5925C15.3926 13.8806 14.2595 15.211 13.1263 15.8805C11.5315 16.8211 9.40786 17.0584 7.61999 16.5075C7.02404 16.3211 6 15.8466 6 15.7618C6 15.7364 6.31057 15.7025 6.68829 15.694C7.4773 15.6771 8.26631 15.4568 8.93781 15.067L9.39108 14.7958L8.87066 14.6178C8.13201 14.3636 7.46891 13.7789 7.30103 13.2281C7.25067 13.0501 7.26746 13.0417 7.73751 13.0417L8.22434 13.0332L7.81305 12.8383C7.32621 12.5925 6.88134 12.1773 6.66311 11.7536C6.50362 11.4486 6.30218 10.6774 6.36093 10.6181C6.37772 10.5927 6.55399 10.6435 6.75544 10.7113C7.33461 10.9232 7.41015 10.8723 7.0744 10.5164C6.44487 9.87239 6.25181 8.91482 6.55399 8.0081L6.69668 7.60135L7.25067 8.15216C8.38383 9.26226 9.71843 9.92323 11.2461 10.1181L11.6658 10.169Z" fill="#434343" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.6658 10.169L11.6406 9.75375C11.5651 8.67755 12.2282 7.69456 13.2774 7.31323C13.6635 7.17765 14.3182 7.1607 14.7463 7.27934C14.9142 7.33018 15.2331 7.49966 15.4598 7.65219L15.8711 7.93184L16.3243 7.78778C16.5761 7.71151 16.9119 7.5844 17.063 7.49966C17.2057 7.42339 17.3316 7.38102 17.3316 7.40645C17.3316 7.5505 17.021 8.042 16.7608 8.31317C16.4083 8.6945 16.509 8.72839 17.2224 8.47417C17.6505 8.33011 17.6589 8.33011 17.575 8.49112C17.5246 8.57586 17.2644 8.87245 16.9874 9.14362C16.5174 9.60969 16.4922 9.66054 16.4922 10.0503C16.4922 10.652 16.2068 11.9062 15.9214 12.5925C15.3926 13.8806 14.2595 15.211 13.1263 15.8805C11.5315 16.8211 9.40786 17.0584 7.61999 16.5075C7.02404 16.3211 6 15.8466 6 15.7618C6 15.7364 6.31057 15.7025 6.68829 15.694C7.4773 15.6771 8.26631 15.4568 8.93781 15.067L9.39108 14.7958L8.87066 14.6178C8.13201 14.3636 7.46891 13.7789 7.30103 13.2281C7.25067 13.0501 7.26746 13.0417 7.73751 13.0417L8.22434 13.0332L7.81305 12.8383C7.32621 12.5925 6.88134 12.1773 6.66311 11.7536C6.50362 11.4486 6.30218 10.6774 6.36093 10.6181C6.37772 10.5927 6.55399 10.6435 6.75544 10.7113C7.33461 10.9232 7.41015 10.8723 7.0744 10.5164C6.44487 9.87239 6.25181 8.91482 6.55399 8.0081L6.69668 7.60135L7.25067 8.15216C8.38383 9.26226 9.71843 9.92323 11.2461 10.1181L11.6658 10.169Z" fill="white" fill-opacity="0.5" />
                </svg> &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76084 9.93892H8.4803V18.1098H5.76084V9.93892ZM8.65938 7.41135C8.64173 6.6102 8.06883 6 7.13852 6C6.20821 6 5.6 6.6102 5.6 7.41135C5.6 8.1959 6.19023 8.82367 7.10322 8.82367H7.12059C8.06883 8.82367 8.65938 8.1959 8.65938 7.41135ZM15.1566 9.74707C16.9461 9.74707 18.2877 10.9151 18.2877 13.4249L18.2876 18.1098H15.5682V13.7384C15.5682 12.6404 15.1747 11.8911 14.1902 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98555C9.98555 18.11 10.0214 10.7059 9.98555 9.93915H12.7053V11.0965C13.0663 10.5401 13.7127 9.74707 15.1566 9.74707Z" fill="#434343" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76084 9.93892H8.4803V18.1098H5.76084V9.93892ZM8.65938 7.41135C8.64173 6.6102 8.06883 6 7.13852 6C6.20821 6 5.6 6.6102 5.6 7.41135C5.6 8.1959 6.19023 8.82367 7.10322 8.82367H7.12059C8.06883 8.82367 8.65938 8.1959 8.65938 7.41135ZM15.1566 9.74707C16.9461 9.74707 18.2877 10.9151 18.2877 13.4249L18.2876 18.1098H15.5682V13.7384C15.5682 12.6404 15.1747 11.8911 14.1902 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98555C9.98555 18.11 10.0214 10.7059 9.98555 9.93915H12.7053V11.0965C13.0663 10.5401 13.7127 9.74707 15.1566 9.74707Z" fill="white" fill-opacity="0.5" />
                </svg> &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" style="margin-top:1px;background-color:#a1a1a1;border-radius:50%;">
                    <path d="M14.1667 5.83331H11.6667C11.2083 5.83331 10.8333 6.20831 10.8333 6.66665C10.8333 7.12498 11.2083 7.49998 11.6667 7.49998H14.1667C15.5417 7.49998 16.6667 8.62498 16.6667 9.99998C16.6667 11.375 15.5417 12.5 14.1667 12.5H11.6667C11.2083 12.5 10.8333 12.875 10.8333 13.3333C10.8333 13.7916 11.2083 14.1666 11.6667 14.1666H14.1667C16.4667 14.1666 18.3333 12.3 18.3333 9.99998C18.3333 7.69998 16.4667 5.83331 14.1667 5.83331ZM6.66666 9.99998C6.66666 10.4583 7.04166 10.8333 7.49999 10.8333H12.5C12.9583 10.8333 13.3333 10.4583 13.3333 9.99998C13.3333 9.54165 12.9583 9.16665 12.5 9.16665H7.49999C7.04166 9.16665 6.66666 9.54165 6.66666 9.99998ZM8.33332 12.5H5.83332C4.45832 12.5 3.33332 11.375 3.33332 9.99998C3.33332 8.62498 4.45832 7.49998 5.83332 7.49998H8.33332C8.79166 7.49998 9.16666 7.12498 9.16666 6.66665C9.16666 6.20831 8.79166 5.83331 8.33332 5.83331H5.83332C3.53332 5.83331 1.66666 7.69998 1.66666 9.99998C1.66666 12.3 3.53332 14.1666 5.83332 14.1666H8.33332C8.79166 14.1666 9.16666 13.7916 9.16666 13.3333C9.16666 12.875 8.79166 12.5 8.33332 12.5Z" fill="white" />
                </svg>
            </div>
        </div>
        <br>
        <br>
        <svg xmlns="http://www.w3.org/2000/svg" width="636" height="2" viewBox="0 0 636 2" fill="none" style="color:var(--Divider, #828282);width:636px;">
            <path d="M0 1H636" stroke="#828282" stroke-width="0.8" />
        </svg>
        <div class="class-schedule-container">
            <h2>Class Schedule</h2><br>
            <div class="class-time">
                <span>Time:</span> 10:30am - 4:00pm (PST)
            </div>
            <div class="class-dates">
                <span>Dates:</span>
                <div class="dates-list">
                    <div class="date-item">Tue 6/15</div>
                    <div class="date-item">Tue 6/20</div>
                    <div class="date-item">Tue 6/24</div>
                    <div class="date-item">Tue 6/20</div>
                    <div class="date-item">Tue 6/24</div>
                </div>
            </div>
        </div>
        <br>

    </div>
    <div class="second-half">
        <img src="https://s3-alpha-sig.figma.com/img/3286/9cdf/57afc1fe128b5d703a5c72e54cd7f326?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fC8tGBeJsNTucn3Gp5eKETbDWjaFT7i9xAuOiIZokBVr0hKgCrSUwpVGyuqBfkWAsODa9aQnpFzImgv2R-YrhC0pYv5zRV2MSqsqW~PJX-jKrR2~KUA6ibhAW-PBw5Xm7spTbyaqXOczvzy~hhpW9T7YJ3rLAaTvw3Mz-O~2g8DxR0MxLzo0Gb72zHVR2~95MjFQreoV7CPhZKwV84gzg9XD7yiwOouHzOA6JI3r4HUpW9uqjrM8nZ47OuzmNzXDisVmFfl7n~H0rYjUcePIo1WRLSUCIU-UmnYL4oTWGMqDq-aQ672tLGRfnW92y7OATPf1pNJX06BJ8BCsoqZ0xw__">
        <br>
        <br>
        <span style="color:#00ACB4;"><?php echo $author_name ?></span> , MFA, writes fiction and nonfiction with a special emphasis on the power of place. Her work has been anthologized and published in venues such as Atlas Obscura, The Los Angeles Times, The Sun, and Best Women’s Travel Writing. She loves to see her students surprise and delight themselves (and others!), whether she’s teaching at City University of New York, the San Francisco Women’s Jail, or The Writing Salon. After many years of living abroad (from Oaxaca to Quito to San Jose, Costa Rica), she now lives in San Francisco. She is also the author of Living Abroad in Costa Rica. <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br><br><br>
        <button class="reviews-button">See John’s Reviews</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</div>


<div class="carousel-container" style="background:url('https://s3-alpha-sig.figma.com/img/b048/4652/655f9e4eb6c24fa09a73b6125535e79a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tsg3MDWRHusiR-Fg3TDOgM~bJOkZWSCLYARJ1yerWnCTM4uFKGp8hkdWtp214T~W6W46wFELm2-n6Z9Q6ZHeDSRuI8SqE-R6H5rizELlwryYazIy9u5HVscN1tAkfOoRpzLWsvOo91WtFxtc5TpJ0mHAuW01jn148bY3o7vC1uWo3k4ED7uijAwbx0v7B0fruCFoKh~duC8mhdZAfoHvRCR2inffvOyBEBjk5xz6Unjuft0ZmcGHKiywhKikwaWUAPnCi19tpadDtll5jwyLTMr1FJvij3facHHxa4ekI1OElsezooF1mZckwRqLoISaUvHeh-kdZYmcSdbZQru4CA__');background-size: cover;background-repeat: no-repeat;background-position: center;overflow: hidden;">
    <div class="carousel-slide" id="carouselSlide">
        <div class="carousel-item">
            <button class="carousel-button" id="prevBtn">&#10094;</button>
            <div class="testimonial-text-container">
                <div class="testimonial-quote quote-left">“</div>
                <p class="testimonial-text"> &nbsp;&nbsp;Erin was a wonderful teacher. She was personable, kind, organized, <br>and great with facilitating group discussion. <br>
                    <br>
                    <span class="author">Katy L.</span>
                </p>
                <div class="testimonial-quote quote-right">”</div>
            </div>
            <button class="carousel-button" id="nextBtn">&#10095;</button>
        </div>
    </div>
</div>
<br>
<br>
<br>
<?php
get_template_part("about-cancellation");
?>
<?php
get_footer();

?>