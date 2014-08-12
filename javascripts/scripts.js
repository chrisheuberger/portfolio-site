(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53787405-1', 'auto');
ga('send', 'pageview');

$(function(){
  $('#intro').fadeIn(1000);
  $(".fade").hide();
  $(".slide").hide();
  $(".quote").click(function(){
    $(".fade").fadeToggle();
  });
  $(".pres").click(function(){
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
    $(".slide").slideToggle();
  });
  $(".top").click(function(){
    $('html, body').animate({ scrollTop: 0 });
  });
  $('.grid img').click(function() {
    $('.grid').hide();
    $('html, body').animate({ scrollTop: 100 });
    var src = $(this).attr('src').replace('.jpg', '_large.jpg');
    if ("url:contains('images/play')") {
      $('.bump').html('<br>');
    }
    if(src === "images/photo/fb1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>North Brooklyn Farms at Havemeyer Park";
    } else if (src === "images/photo/fb2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Flushing Meadows Corona Park, Queens";
    } else if (src === "images/photo/fb8_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Oregon";
    } else if (src === "images/photo/fb10_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Chicago";
    } else if (src === "images/photo/fb12_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>San Fransisco";
    } else if (src === "images/photo/fb17_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Tobie";
    } else if (src === "images/photo/fb18_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>bike ride through Amsterdam";
    } else if (src === "images/photo/fb19_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Berlin";
    } else if (src === "images/photo/pic-img009_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Richmond, VA";
    } else if (src === "images/photo/pic-img008_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Richmond, VA";
    } else if (src === "images/photo/pic-img010_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Richmond, VA";
    } else if (src === "images/photo/pic-messagero_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Italy";
    } else if (src === "images/photo/pic-peluso_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Italy";
    } else if (src === "images/design/ppn1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/ppn2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/ppn3_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/ppn4_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/ppn5_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/ppn-poster_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br><a href='http://www.presentationpartynight.com/' target='_blank'>Presentation Party Night (PPN)</a> flyer comp";
    } else if (src === "images/design/type-project1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Typography Project comp for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/type-project2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Typography Project comp for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/blockpartyflyer_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>block party flyer for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/blockpartyflyer2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>block party flyer for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/sbp-poster1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>tour poster comp for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/sbp-poster2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>tour poster comp for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/halloween-flyer_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Halloween flyer comp for <a href='http://www.thesketchbookproject.com/' target='_blank'>Art House Co-op</a>";
    } else if (src === "images/design/nyfile_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>cover for my amazing collection of New York ephemera";
    } else if (src === "images/design/concept-dartboard_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>for re-approaching any problem creatively";
    } else if (src === "images/design/banana-poster_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AIGA poster";
    } else if (src === "images/design/img_7362_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AIGA poster";
    } else if (src === "images/design/img_7363_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AIGA poster";
    } else if (src === "images/design/aiga_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AIGA poster";
    } else if (src === "images/design/aiga2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AIGA poster";
    } else if (src === "images/design/img_7284_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation";
    } else if (src === "images/design/img_7308_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MHCC Consumer Guides";
    } else if (src === "images/design/img_7290_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MEPT fundraising announcement";
    } else if (src === "images/design/img_7307_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>USAID informational folder + material";
    } else if (src === "images/design/abt_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>USAID informational folder + material";
    } else if (src === "images/design/aacc_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>AACC conference guide package";
    } else if (src === "images/design/acc_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>ACC conference guide package";
    } else if (src === "images/design/acc2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>ACC conference guide package";
    } else if (src === "images/design/acc3_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>ACC conference guide package";
    } else if (src === "images/design/lv_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>LeVisage identity";
    } else if (src === "images/design/mlk2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation comp";
    } else if (src === "images/design/mlk3_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation comp";
    } else if (src === "images/design/mlk4_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation comp";
    } else if (src === "images/design/mlk5_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation comp";
    } else if (src === "images/design/mlk7_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>MLK Foundation invitation comp";
    } else if (src === "images/design/derby1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Kentucky Derby event website comp";
    } else if (src === "images/design/derby2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Kentucky Derby event website comp";
    } else if (src === "images/design/mdg-home_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Madison Design Group website comp";
    } else if (src === "images/design/mdg-sample_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Madison Design Group website comp";
    } else if (src === "images/design/ht-home_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Hadi Toron artwork website comp";
    } else if (src === "images/design/ht-series_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Hadi Toron artwork website comp";
    } else if (src === "images/design/otb-logo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/otb-logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/rh-logo_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo for R. Hanauer Bow Ties";
    } else if (src === "images/design/cookielogo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo lettering + comps";
    } else if (src === "images/design/cookielogo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo lettering + comps";
    } else if (src === "images/design/coookies_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>pattern test";
    } else if (src === "images/design/logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/logo3_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/logo4_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/ts-logo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/ts-logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/fiss-logo4_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/fiss-logo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/fiss-logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/design/bmz-lettering-2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/img_7262_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>lasercut";
    } else if (src === "images/play/img_7249_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>lasercut";
    } else if (src === "images/play/img_7145_large.jpg") {
      var explainer = '<span class="over">Click image to close.</span><br>"The aim of art is to represent not the outward appearance of things,<br>but their inward significance." -Aristotle';
    } else if (src === "images/play/ts-logo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/ts-logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/fiss-logo4_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/fiss-logo1_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/fiss-logo2_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>logo comp";
    } else if (src === "images/play/img_3826_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Periodic Table of Toasting: how to say 'cheers' in 118 different languages";
    } else if (src === "images/play/img_3824_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>Periodic Table of Toasting: how to say 'cheers' in 118 different languages";
    } else if (src === "images/play/img_7148_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>based on Seurat self-portrait";
    } else if (src === "images/play/img_7218_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>based on Schiele drawing";
    } else if (src === "images/play/doodle002_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle003_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle011_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle015_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle016_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle018_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle019_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle020_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle021_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle023_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle025_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle026_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle030_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle032_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle034_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle036_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else if (src === "images/play/doodle039_large.jpg") {
      var explainer = "<span class='over'>Click image to close.</span><br>insert for <a href='http://www.thesketchbookproject.com/' target='_blank'>The Sketchbook Project</a>";
    } else { var explainer = "<span class='over'>Click image to close.</span>" }
    $('.large').attr('src', src).fadeIn();
    $('.explainer').html(explainer);
  });
  $('.large').hide().click(function() {
    $(this).hide();
    $('.grid').fadeIn();
    $('.explainer').html('');
  });
});

