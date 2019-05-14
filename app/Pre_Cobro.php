<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pre_Cobro extends Model
{
    //
    use SoftDeletes;
    public $table = 'pre_cobros';

    protected $dates = ['deleted_at'];

    public function pre_cobro()
    {
        return $this->hasMany('App\Pre_Cobro','pre_cobro_id','id');
    }
}
