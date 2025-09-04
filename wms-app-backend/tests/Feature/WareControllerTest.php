<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Ware;
use App\Services\WareService;
use Tymon\JWTAuth\Facades\JWTAuth;

class WareControllerTest extends TestCase
{
    use RefreshDatabase;

    // Tests for WareController@store

    public function testStore()
    {
        $token = $this->authenticateAsTestUser();
        
        $requestData = [
            "barcode" => "5801231002",
            "name" => "Book",
            "quantity" => 9,
            "price" => 4.95,
            "placement_id" => 2,
        ];

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("POST", "/api/wares", $requestData);

        $response->assertStatus(201)
            ->assertJson([
                "barcode" => "5801231002",
                "name" => "Book",
                "quantity" => 9,
                "price" => 4.95,
                "placement_id" => 2,
            ]);

    }

    public function testStoreFailsBarcodeAlreadyExists()
    {
        $token = $this->authenticateAsTestUser();

        $existingWare = [
            "barcode" => "123ABC",
            "name" => "Saddle",
            "quantity" => 0,
            "price" => 12000,
            "placement_id" => 1,
        ];

        Ware::create($existingWare);


        $requestData = [
            "barcode" => "123ABC",
            "name" => "Book",
            "quantity" => 9,
            "price" => 4.95,
            "placement_id" => 2,
        ];

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("POST", "/api/wares", $requestData);

        $response->assertStatus(422);

        $this->assertEquals(1, Ware::where("barcode", "123ABC")->count());

        $this->assertDatabaseCount("wares", 1);

    }



    // Tests for WareController@update

    public function testUpdateIncreaseQuantity()
    {
        $testWare = [
            "barcode" => "12345XYZ",
            "name" => "Saddle",
            "quantity" => 0,
            "price" => 12000,
            "placement_id" => 1,
        ];

        Ware::create($testWare);

        $barcode = "12345XYZ";

        $requestData = [
            "quantityDelta" => 117,
        ];

        $token = $this->authenticateAsTestUser();

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("PATCH", "/api/wares/{$barcode}", $requestData);

        $response->assertStatus(200);

        $response->assertJsonFragment([
            "barcode" => "12345XYZ",
            "quantity" => 117,
        ]);
        $this->assertDatabaseHas("wares", [
            "barcode" => "12345XYZ",
            "quantity" => 117,
        ]);
    }

    public function testUpdateDecreaseQuantity()
    {
        $token = $this->authenticateAsTestUser();

        $testWare = [
            "barcode" => "5959",
            "name" => "Hair Clipper",
            "quantity" => 252,
            "price" => 4.95,
            "placement_id" => 3,
        ];

        Ware::create($testWare);

        $barcode = "5959";

        $requestData = [
            "quantityDelta" => -20,
        ];

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("PATCH", "/api/wares/{$barcode}", $requestData);

        $response->assertStatus(200);

        $response->assertJsonFragment([
            "barcode" => "5959",
            "quantity" => 232,
        ]);
        $this->assertDatabaseHas("wares", [
            "barcode" => "5959",
            "quantity" => 232,
        ]);
    }


    public function testUpdateFailsWhenQuantityTooLow()
    {
        $testWare = [
            "barcode" => "5959",
            "name" => "Hair Clipper",
            "quantity" => 100,
            "price" => 4.95,
            "placement_id" => 3,
        ];

        Ware::create($testWare);

        $barcode = "5959";

        $requestData = [
            "quantityDelta" => -110,
        ];

        $token = $this->authenticateAsTestUser();

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("PATCH", "/api/wares/{$barcode}", $requestData);

        $response->assertStatus(422);

        $response->assertJsonValidationErrors(["quantityDelta"]);

        $this->assertDatabaseHas("wares", [
            "barcode" => "5959",
            "quantity" => 100,
        ]);
    }


    // tests for getAll and getByBarcode would go here




    // Tests for WareController@delete

    public function testDelete()
    {
        $testWare = [
            "barcode" => "5959",
            "name" => "Hair clipper",
            "quantity" => 150,
            "price" => 4.95,
            "placement_id" => 3,
        ];

        Ware::create($testWare);

        $barcode = "5959";

        $token = $this->authenticateAsTestUser();

        $response = $this->withHeaders([
            'Authorization' => "Bearer $token"
        ])->json("DELETE", "/api/wares/{$barcode}");

        $response->assertStatus(200);

        $this->assertDatabaseCount("wares", 0);

    }





}
