class Header {
  constructor() {
    this.setupStickyHeader()
    this.setupNavHandler()
  }

  setupStickyHeader() {
    let $header = $('.header')
    let headerHeight = $header.outerHeight()

    $(window).on('scroll', () => {
      let isSticky = window.scrollY > headerHeight

      if (isSticky) {
        $header.addClass('header--stick')
      }
      else {
        $header.removeClass('header--stick')
      }
    })
  }

  setupNavHandler() {
    $('.nav a, .header-logo-link').on('click', (e) => {
      let $this = $(e.currentTarget)
      let sel = $this.attr('href')

      let offset = (sel === '#') ? 0 : $(sel).offset().top

      $this.parent().siblings().removeClass('active');
      $this.parent().addClass('active');

      if ($this.attr('class') === 'header-logo-link') {
        $('.header nav li').removeClass('active');
        $('.header nav li a[href="#"]').parent().addClass('active')
      }

      $('html, body').stop().animate({
        scrollTop: offset
      }, 800);
    })
  }
}

export default Header
