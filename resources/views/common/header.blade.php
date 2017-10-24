<section class="header">
  <div class="header__inner">
    <img class="header-logo" src="{{ asset('images/svg/script-logo.svg') }}" alt="Jesse McIntire Logo" class="logo">
    <ul class="nav-list">
      <li class="{{ set_active('/') }}">
        <a href="#">Home</a>
      </li>
      <li class="{{ set_active('/portfolio') }}">
        <a href="#my-work">My Work</a>
      </li>
      <li class="{{ set_active('/skills') }}">
        <a href="#skills">Skills</a>
      </li>
    </ul>
  </div>
</section>
