<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

    public function store(Request $request)
    {
        $this->authorizeAdmin();

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'cant' => 'required|integer|min:0',
            'category' => 'required|string|max:255',
            'imagen' => 'nullable|string|max:255',
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $product = Product::create($request->all());

        return response()->json($product, 201);

    }

    public function update(Request $request, $id)
    {
        
        $this->authorizeAdmin();

        $product = Product::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'cant' => 'required|integer|min:0',
            'category' => 'required|string|max:255',
            'imagen' => 'nullable|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $product->update($request->all());

        return response()->json($product);
        
    }

    public function destroy($id)
    {
        
        $this->authorizeAdmin();

        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);

    }

    private function authorizeAdmin(){
        if(!auth->user()->userAdmin){
            abort(403, 'Unauthorized');
        }
    }

}
