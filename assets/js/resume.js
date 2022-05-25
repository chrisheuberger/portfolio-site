function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

$(function() {

  // create a condition that targets viewports at least 769px wide
  const mediaQuery = window.matchMedia('(min-width: 769px)')

  function handleTabletChange(e) {
    if ($('.ui-card').hasClass('ui-card-has-been-mobile')) {
      $('.ui-card').css({"width":"600px","height":"410px"})
    }
    // check if the media query is true
    if (e.matches) {
      interact('.ui-card')
        .draggable({
          listeners: {
            move: dragMoveListener
          }
        })
        .resizable({
          edges: { top: true, left: true, bottom: true, right: true },
          modifiers: [
            interact.modifiers.restrictSize({
              min: { width: 300, height: 200 },
              max: { width: 1000, height: 1000 }
            })
          ],
          listeners: {
            move: function (event) {
              let { x, y } = event.target.dataset

              x = (parseFloat(x) || 0) + event.deltaRect.left
              y = (parseFloat(y) || 0) + event.deltaRect.top

              Object.assign(event.target.style, {
                width: `${event.rect.width}px`,
                height: `${event.rect.height}px`,
                transform: `translate(${x}px, ${y}px)`
              })

              Object.assign(event.target.dataset, { x, y })
            }
          }
        })
    } else {
      // remove all event listeners and make interact.js forget about target
      interact('.ui-card').unset()
      $('.ui-card').addClass('ui-card-has-been-mobile')
      $('.ui-card').css({"transform":"none","width":"100%","height":"auto"})
      $('.ui-card').attr("data-x", "");
      $('.ui-card').attr("data-y", "");
    }
  }

  // register event listener
  mediaQuery.addListener(handleTabletChange)

  // initial check
  handleTabletChange(mediaQuery)

});
