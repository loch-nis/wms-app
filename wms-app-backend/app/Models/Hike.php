<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hike extends Model
{
    protected $fillable = ['title'];

    public function hikeUsers()
    {
        return $this->hasMany(HikeUser::class);
    }

    public function commonChecklist()
    {
        return $this->hasOne(CommonChecklist::class);
    }
}
