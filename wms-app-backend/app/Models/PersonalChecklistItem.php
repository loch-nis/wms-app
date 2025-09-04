<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalChecklistItem extends Model
{
    public function personalChecklist()
    {
        return $this->belongsTo(PersonalChecklist::class);
    }
}
