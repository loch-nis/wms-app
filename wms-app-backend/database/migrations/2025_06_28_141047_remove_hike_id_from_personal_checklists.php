<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('personal_checklists', function (Blueprint $table) {
            $table->dropForeign(['hike_id']);
            $table->dropColumn('hike_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('personal_checklists', function (Blueprint $table) {
            $table->unsignedBigInteger('hike_id');
            $table->foreign('hike_id')->references('id')->on('hikes')->onDelete('cascade');
        });
    }
};
