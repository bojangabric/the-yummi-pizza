<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <!-- Styles -->
  <link rel="stylesheet" href="css/app.css">
</head>

<body>
  <div id="app">
    <nav>
      <a href="{{ url('/') }}">
        {{ config('app.name', 'Laravel') }}
      </a>
      <div>
        <!-- Authentication Links -->
        @guest
        <a href="{{ route('login') }}">{{ __('Login') }}</a>
        @if (Route::has('register'))
        <a href="{{ route('register') }}">{{ __('Register') }}</a>
        @endif
        @else
        <div>
          {{ Auth::user()->name }}
        </div>
        <div>
          <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
          </a>
          <form class="hidden" id="logout-form" action="{{ route('logout') }}" method="POST">
            @csrf
          </form>
        </div>
        @endguest
      </div>
    </nav>

    <main>
      @yield('content')
    </main>
  </div>
</body>

</html>
