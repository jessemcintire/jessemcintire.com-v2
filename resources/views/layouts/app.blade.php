<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Jesse McIntire | Design and Development</title>

        @include('common.head_links')
        @include('common.head_scripts')
    </head>
    <body>
        <main>
            @include('common.header')

            @yield('content')

            @include('common.footer')
        </main>
        @include('common.body_end_scripts')
    </body>
</html>
