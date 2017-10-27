<section class="contact">
  <div class="contact__inner">
    <div class="contact__form-wrap">
      <h2>
        Get in Touch!
      </h2>
      {!! Form::open(['url' => 'contact-submit', 'class' => 'contact__form container']) !!}
      <div class="row">
        <div class="form-group">
          {{ Form::text('first-name', '', ['class' => 'form-control', 'placeholder' => 'First Name', 'required']) }}
        </div>

        <div class="form-group">
          {{ Form::text('last-name', '', ['class' => 'form-control', 'placeholder' => 'Last Name', 'required']) }}
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          {{ Form::text('Company', '', ['class' => 'form-control', 'placeholder' => 'Company Name']) }}
        </div>

        <div class="form-group">
          {{ Form::text('email', '', ['class' => 'form-control', 'placeholder' => 'Email address', 'required']) }}
        </div>
      </div>

      <div class="form-group">
        {{ Form::text('subject', '', ['class' => 'form-control', 'placeholder' => 'Subject', 'required']) }}
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
