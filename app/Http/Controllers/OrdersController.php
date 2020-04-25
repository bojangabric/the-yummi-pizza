<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class OrdersController extends Controller
{
    public function index()
    {
        return Order::all();
    }

    public function store(Request $request)
    {
        foreach ($request->input() as $pizza) {
            $pizza['toppings'] = implode(", ", $pizza['toppings']);
            Order::create((new Request($pizza))->all());
        }

        return response()->json([], 201);
    }
}
