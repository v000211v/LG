// 헤더
$(function () {
  var header = $('.header')
  var gnb = header.find('.gnb')

  var headerHeight = header.innerHeight()
  var subMenuHeight = gnb.find('ul li').innerHeight()
  var paddingValue = 40

  var menuCount = []

  gnb.find('ul').each(function () {
    var liCount = $(this).find('li').length
    menuCount.push(liCount)
  })

  var maxCount = Math.max.apply(null, menuCount)

  var autoHeight = headerHeight + paddingValue + subMenuHeight * maxCount

  header.on('mouseover', function () {
    header.stop().animate({ height: autoHeight }, 'fast')
  })

  header.on('mouseleave', function () {
    header.stop().animate({ height: headerHeight }, 'fast')
  })
})
