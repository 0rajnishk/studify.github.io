<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Save the form data to a file
  $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";
  file_put_contents('form.txt', $data, FILE_APPEND);

  // Send a response to the client
  header('Content-Type: application/json');
  echo json_encode(['status' => 'success']);
  exit;
}
