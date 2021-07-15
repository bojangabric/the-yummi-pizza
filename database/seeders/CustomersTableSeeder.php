<?php

namespace Database\Seeders;

use App\Customer;
use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 5; $i++) {
            Customer::create([
                'firstname' => $faker->firstName,
                'lastname' => $faker->lastName,
                'address' => $faker->streetAddress,
                'interphone' => $faker->lastname,
                'floor' => $faker->randomDigit,
                'phone' => $faker->phoneNumber,
                'email' => $faker->email
            ]);
        }
    }
}
