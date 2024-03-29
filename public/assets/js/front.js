$(document).ready(function () {
  UIkit.modal('#start_modal').show();
});

const { styler, decay, listen, pointer, value } = window.popmotion;

const slider = document.querySelector('#skill_container');
const divStyler = styler(slider);
const sliderX = value(0, divStyler.set('x'));

listen(slider, 'mousedown touchstart')
  .start(() => {
    pointer({ x: sliderX.get() })
      .pipe(({ x }) => x)
      .start(sliderX);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    decay({
      from: sliderX.get(),
      velocity: sliderX.getVelocity(),
    }).start(sliderX);
  });

$(function () {

  var $body = $(document);
  $body.bind('scroll', function () {
    // "Disable" the horizontal scroll.
    if ($body.scrollLeft() !== 0) {
      $body.scrollLeft(0);
    }
  });

});

$(".cardy").flip();

$(".cardy").hover(function () {
  $(this).css();
}, function () {

});

$('#first_parallax_content').hover(function () {
  $(this).css('background-color', "rgba(237, 243, 233, 1)")
}, function () {
  $(this).css('background-color', "rgba(237, 243, 233, 0.9)")
})

// Ajax Request for mailing

var form = $('#contact_form');
$("#form_send").click(function () {
  $.ajax({
    type: "post",
    url: "/send_mail",
    data: form.serialize(),
    success: function (data) {
      if ($('#alert').length > 0) {
        $("#alert").remove();
      }
      $('body').append("<div id='alert' class='uk-alert uk-alert-success'>" + "<a class='uk-alert-close uk-close'></a>" +
        "<p>E-Mail envoyé, je répondrait dans les delais les plus brefs.</p></div>");
    },
    fail: function (cause) {
      if ($('#alert').length > 0) {
        $("#alert").remove();
      }
      $('body').append("<div id='alert' class='uk-alert uk-alert-danger'>" + "<a href='' class='uk-alert-close uk-close'></a>" +
        "Une erreur est survenue !</div>");
    }
  })
})