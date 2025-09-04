<?php

namespace Tests\Feature;

use App\Models\Hike;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HikeControllerTest extends TestCase
{
    use RefreshDatabase;
    

    public function testStore()
    {
        $requestData = [
            "title" => "Vintertur",
        ];

        $token = $this->authenticateAsTestUser();

        $response = $this->withHeaders([
            "Authorization" => "Bearer $token"
        ])->json("POST", "/api/hikes", $requestData);

        $response->assertStatus(201)
            ->assertJson([
                "title" => "Vintertur",
            ]);

    }

    public function testStoreAndIndex()
    {
        $token = $this->authenticateAsTestUser();

        $storeResponse = $this->withHeaders([
            "Authorization" => "Bearer $token"
        ])->json("POST", "/api/hikes", [
            "title" => "Vintertur",
        ]);

        $storeResponse->assertStatus(201)
            ->assertJsonFragment([
                "title" => "Vintertur",
            ]);

        $indexResponse = $this->withHeaders([
            "Authorization" => "Bearer $token"
            ])->json("GET", "/api/hikes");

        $indexResponse->assertStatus(200)
            ->assertJsonFragment([
                "title" => "Vintertur",
            ]);

    }

}
