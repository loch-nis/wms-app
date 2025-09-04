<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function authenticateAsTestUser(): string
    {
        User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('secret123'),
        ]);

        $loginResponse = $this->json('POST', '/api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'secret123',
        ]);

        $loginResponse->assertStatus(200);

        return $loginResponse['access_token'] ?? throw new \Exception('Failed to get token');
    }
}
