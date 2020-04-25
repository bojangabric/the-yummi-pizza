<?php

use Illuminate\Http\Request;
use App\Pizza;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('pizzas', 'PizzasController@index');

Route::get('customers', 'CustomersController@index');
Route::post('customers', 'CustomersController@store');

Route::get('orders', 'OrdersController@index');
Route::post('orders', 'OrdersController@store');
