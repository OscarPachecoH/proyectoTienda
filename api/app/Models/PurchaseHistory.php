<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'idUser',
        'idProduct',
        'cant',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'idUser');
    }

    public function product(){
        return $this->belongsTo(Product::class, 'idProduct');
    }


}
