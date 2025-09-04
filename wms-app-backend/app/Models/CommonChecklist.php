<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommonChecklist extends Model
{
    public function hike()
    {
        return $this->belongsTo(Hike::class);
    }

    public function commonChecklistItems()
    {
        return $this->hasMany(CommonChecklistItem::class);
    }
}
