<?php

namespace Database\Seeders;

use App\Pizza;
use Illuminate\Database\Seeder;

class PizzasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $pizza_names = ['Bresaola', 'Margherita', 'Primavera', 'Proscuitto', 'Soprano', 'Viola'];
        for ($i = 0; $i < 6; $i++) {
            Pizza::create([
                'name' => $pizza_names[$i],
                'description' => $faker->paragraph,
                'price_eur' => $faker->randomNumber(2),
                'price_dollar' => $faker->randomNumber(2),
            ]);
        }
    }
}
