<section class="skills" id="skills">
  <div class="skills__inner">
    <h2>
      Skills
    </h2>
    <div class="skills__content">
      <div class="skills-lists">
        <ul class="languages-skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Bootstrap</li>
          <li>CSS Animations</li>
          <li>Git</li>
          <li>Github</li>
          <li>PHP/Laravel</li>
          <li>JavaScript (ES6)</li>
          <li>jQuery</li>
          <li>React.js</li>
        </ul>
        <ul class="design-skills-list">
          <li>Sketch</li>
          <li>InVision</li>
          <li>UI/UX best practices</li>
        </ul>
        <ul class="soft-skills-list">
          <li>Problem Solving</li>
          <li>Passion to Create</li>
          <li>Teamwork</li>
          <li>Object Oriented Programming</li>
          <li>Data Structures</li>
        </ul>
      </div>
      <ul class="language-logos">
        <li>
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
          <img src="http://placehold.it/40x40" alt="">
        </li>
      </ul>
    </div>
    <div class="">
      {!! Form::open(['url' => 'contact-submit', 'class' => 'contact__form']) !!}
      <div class="form-group">
        {{ Form::text('name', '', ['class' => 'form-control', 'placeholder' => 'Name', 'required']) }}
      </div>

      <div class="form-group">
        {{ Form::text('email', '', ['class' => 'form-control', 'placeholder' => 'Email address', 'required']) }}
      </div>

      <div class="form-group">
        {{ Form::textarea('message', '', ['class' => 'form-control', 'cols' => 'auto', 'rows' => 'auto', 'placeholder' => 'How can I help?', 'required']) }}
      </div>

      <div class="form-group">
        {{ Form::submit('Submit', ['class' => 'button button--primary']) }}
      </div>
      {!! Form::close() !!}
    </div>
  </div>
</section>
