<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index() {
      $firstname = 'Jesse';
      return view('contact', compact('firstname'));
    }
}
