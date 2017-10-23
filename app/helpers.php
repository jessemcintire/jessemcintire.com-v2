<?php

function set_active($path, $active='active')
{
  return Request::is($path) ? $active : '';
}

function set_active_page($page='page')
{
  return Request::segment(1) === $page ? 'active' : '';
}

function set_active_sub_page($page='page')
{
  return Request::segment(2) === $page ? 'active' : '';
}

?>
