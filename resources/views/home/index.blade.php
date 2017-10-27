@extends('layouts.app')

@section('title', 'Jesse McIntire')

@section('content')
  @include('home.hero')
  @include('home.my-expertise')
  @include('common.mark-quote')
  @include('home.my-work')
  @include('home.contact-cta')
  @include('common.picture-window')
  @include('home.skills')
  @include('common.contact')
@endsection
