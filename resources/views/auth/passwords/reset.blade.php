@extends('layouts.app')

@section('content')
<div>
  <div>{{ __('Reset Password') }}</div>

  <div>
    <form method="POST" action="{{ route('password.update') }}">
      @csrf

      <input type="hidden" name="token" value="{{ $token }}">

      <div>
        <label for="email">{{ __('E-Mail Address') }}</label>
        <input id="email" type="email" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
        @error('email')
        <strong>{{ $message }}</strong>
        @enderror
      </div>

      <div>
        <label for="password">{{ __('Password') }}</label>
        <input id="password" type="password" name="password" required autocomplete="new-password">
        @error('password')
        <strong>{{ $message }}</strong>
        @enderror
      </div>

      <div>
        <label for="password-confirm">{{ __('Confirm Password') }}</label>
        <input id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password">
      </div>

      <div>
        <button type="submit">
          {{ __('Reset Password') }}
        </button>
      </div>
    </form>
  </div>
</div>
@endsection
