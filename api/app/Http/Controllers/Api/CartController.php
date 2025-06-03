<?php

namespace App\Http\Controllers\Api;

use App\Models\Cart;
use App\Models\Product;
use App\Models\PurchaseHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::where('idUser', auth()->id())->with('product')->get();
        return response()->json($cart);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idProduct' => 'required|exists:products,id',
            'cant' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = Product::find($request->idProduct);
        if ($product->cant < $request->cant) {
            return response()->json(['error' => 'Not enough stock'], 400);
        }

        $cartItem = Cart::updateOrCreate(
            ['idUser' => auth()->id(), 'idProduct' => $request->idProduct],
            ['cant' => $request->cant]
        );

        return response()->json($cartItem);
    }

    public function update(Request $request, $id)
    {
        $cartItem = Cart::where('idUser', auth()->id())->findOrFail($id);

        $validator = Validator::make($request->all(), [
            'cant' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = Product::find($cartItem->idProduct);
        if ($product->cant < $request->cant) {
            return response()->json(['error' => 'Not enough stock'], 400);
        }

        $cartItem->update(['cant' => $request->cant]);
        return response()->json($cartItem);
    }

    public function remove($id)
    {
        $cartItem = Cart::where('idUser', auth()->id())->findOrFail($id);
        $cartItem->delete();
        return response()->json(null, 204);
    }

    public function checkout()
    {
        $cartItems = Cart::where('idUser', auth()->id())->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['error' => 'Cart is empty'], 400);
        }

        foreach ($cartItems as $item) {
            $product = Product::find($item->idProduct);
            if ($product->cant < $item->cant) {
                return response()->json(['error' => "Not enough stock for {$product->name}"], 400);
            }

            // Crear registro en purchase_history
            PurchaseHistory::create([
                'idUser' => auth()->id(),
                'idProduct' => $item->idProduct,
                'cant' => $item->cant,
            ]);

            // Reducir inventario
            $product->cant -= $item->cant;
            $product->save();
        }

        // Vaciar carrito
        Cart::where('idUser', auth()->id())->delete();

        return response()->json(['message' => 'Purchase completed']);
    }
}
