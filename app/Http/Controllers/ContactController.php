<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller {

    public function store(Request $request)
    {
      $name = $request->input('name');
      $email = $request->input('email');
      $body = $request->input('message');

      $data = compact('name', 'email', 'body');

      $to = 'jessemcintire2@gmail.com';
      $headers = 'From: jessemcintire2@gmail.com' . "\r\n" .
          'Reply-To: jessemcintire2@gmail.com' . "\r\n" .
          'X-Mailer: PHP/' . phpversion();

      mail($to, $email, $body, $headers);

      return view('contact-thanks', ['name' => $name]);
    }
}
