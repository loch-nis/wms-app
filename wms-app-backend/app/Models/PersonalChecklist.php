<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalChecklist extends Model
{
    protected $fillable = ['hike_user_id'];

    public function hikeUser()
    {
        return $this->belongsTo(HikeUser::class);
    }
    
    public function personalChecklistItems()
    {
        return $this->hasMany(PersonalChecklistItem::class);
    }
}
