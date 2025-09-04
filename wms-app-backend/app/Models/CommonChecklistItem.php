<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommonChecklistItem extends Model
{
    public function commonChecklist()
    {
        return $this->belongsTo(CommonChecklist::class);
    }

    public function checkedBy()
    {
        return $this->belongsTo(HikeUser::class, 'checked_by');
    }
}
