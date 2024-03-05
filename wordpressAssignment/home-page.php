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
        <h1><?php echo $page_title; ?></h1>
        <div class="workshop-tags">
            <span class="tag instructor">
                <i class="fa fa-user-circle" style="color:#4eafcd;"></i>&nbsp;&nbsp;<?php echo $author_name; ?> </span>
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
    <?php echo $page_content; ?>
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
<section class="similar-classes-container">
    <h2 class="section-title">Similar Classes</h2>
    <div class="classes-list">
        <article class="class-item">
            <h3 class="class-title">The Art of the Prose Sentence: Challenging Your Sentences to Do More</h3>
            <a href="#" class="learn-more-link">Learn More ></a>
        </article>
        <article class="class-item">
            <h3 class="class-title">The Art of the Prose Sentence: Challenging Your Sentences to Do More</h3>
            <a href="#" class="learn-more-link">Learn More ></a>
        </article>
        <article class="class-item">
            <h3 class="class-title">The Art of the Prose Sentence: Challenging Your Sentences to Do More</h3>
            <a href="#" class="learn-more-link">Learn More ></a>
        </article>
    </div>
</section>
<br><br><br><br>
<div class="remote-classes-container">
    <h2 class="section-heading">About the Remote Classes</h2>
    <p class="section-content">You will be able to participate in live class meetings via Zoom videoconference. To attend classes, you'll need a phone, tablet or computer and access to the internet. You can participate in the class from wherever you'd like, whether on your living room couch or in your office. Before your class meets, you'll receive an email from The Proprietary with more information about Zoom and your remote class. If you have any questions about remote learning, please don't hesitate to reach out to us at <span style="color:#00ACB4;">hello@wisdmlabs.com.</span>
    </p>
    <div class="section-links">
        <a href="#" class="section-link">Learn About Our Classes <span class="fa fa-arrow-right"></span>
        </a>
        <a href="#" class="section-link">Questions? See FAQ <span class="fa fa-arrow-right"></span>
        </a>
    </div>
    <br>
</div>
<hr style="width:100%;height: 2px;background-color:#434343;">
<div class="cancellation-policy-container">
    <br>
    <h2 class="cancellation-policy-title">Cancellation Policy</h2>
    <p class="cancellation-policy-text">In the event of an emergency, we may consider a refund or credit, whether partial or full. We review these requests on a case-by-case basis, and we ask that you notify us as near as possible to the start date for the class. Please read our policy details before requesting a refund.</p>
    <div class="cancellation-policy-rules">
        <div class="rule">
            <h3 class="rule-title">10 days or more</h3>
            <p class="rule-description">before the start date for a class, the registrant will receive a credit minus a 10% fee OR a refund minus a 20% fee.</p>
        </div>
        <div class="rule">
            <h3 class="rule-title">3-9 days</h3>
            <p class="rule-description">before the start date for a class, the registrant will receive a credit minus a 20% fee OR a refund minus a 30% fee.</p>
        </div>
        <div class="rule">
            <h3 class="rule-title">2 days or less</h3>
            <p class="rule-description">before the start date for a class, the registrant will not receive a credit or a refund.</p>
        </div>
        <div class="rule">
            <h3 class="rule-title">On the day or after</h3>
            <p class="rule-description">The Proprietary cannot offer refunds, credits, or makeup sessions for classes a student might miss.</p>
        </div>
    </div>
    <br>
</div>
<?php
get_footer();
?>