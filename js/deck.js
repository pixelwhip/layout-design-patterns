var Deck = (function (reveal, snap) {
  var deck = {},
      s = {};

  //
  // Layout: Anatomy of a Drupal Page
  //

  deck.layoutsInit = function() {
    s.layouts = snap('#layouts-example');
    snap.load("img/layouts.svg", function (f) {
      s.layouts.append(f);
      s.layouts.selectAll("#Layout").attr({"opacity" : 1});
      s.layouts.selectAll("#Content").attr({"opacity" : 0});
    });
  };

  deck.layoutsShowContent = function() {
    s.layouts.selectAll("#Layout").attr({"opacity" : .4});
    s.layouts.select("#Content").animate({"opacity" : 1}, 300);
  };

  deck.layoutsHideContent = function() {
    s.layouts.selectAll("#Layout").attr({"opacity" : 1});
    s.layouts.select("#Content").animate({"opacity" : 0}, 300);
  };

  deck.bindUI = function() {
    reveal.addEventListener( 'ready', function( event ) {
      (deck[event.currentSlide.dataset.slideOnChange] || Function)();
    } );

    reveal.addEventListener( 'slidechanged', function( event ) {
      (deck[event.currentSlide.dataset.slideOnChange] || Function)();
    } );

    reveal.addEventListener( 'fragmentshown', function( event ) {
      (deck[event.fragment.dataset.fragmentOnShow] || Function)();
    } );

    reveal.addEventListener( 'fragmenthidden', function( event ) {
      (deck[event.fragment.dataset.fragmentOnHide] || Function)();
    } );
  };

  deck.init = function() {
    deck.layoutsInit();
    deck.bindUI();
  };

  return deck.init();

}(Reveal, Snap));
