<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['firstname', 'lastname', 'address', 'interphone', 'floor', 'phone', 'email', 'notice'];
}
