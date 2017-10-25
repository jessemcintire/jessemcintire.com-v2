@extends('layouts.app')

@section('title', 'Jesse McIntire')

@section('content')
  @include('home.hero')
  @include('home.my-expertise')
  @include('common.mark-quote')
  @include('home.my-work')
@endsection
