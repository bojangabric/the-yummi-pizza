@extends('layouts.app')

@section('content')
<div>
  <div>{{ __('Reset Password') }}</div>
  <div>
    @if (session('status'))
    {{ session('status') }}
    @endif

    <form method="POST" action="{{ route('password.email') }}">
      @csrf

      <div>
        <label for="email">{{ __('E-Mail Address') }}</label>
        <input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
        @error('email')
        <strong>{{ $message }}</strong>
        @enderror
      </div>

      <div>
        <button type="submit">
          {{ __('Send Password Reset Link') }}
        </button>
      </div>

    </form>
  </div>
</div>
@endsection
