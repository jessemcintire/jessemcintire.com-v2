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
