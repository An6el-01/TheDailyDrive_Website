<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    //Register new User
    public function register(Request $request){
        $request->validate([
            'name'=> 'required|string|max:255',
            'email'=> 'required|string|email|max:255|unique:users',
            'password'=> 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['token' => $token, 'user' => $user], 201);
    }

    //User login
    public function login(Request $request){
        $credentials = $request->only(['email', 'password']);

        if(!$token = JWTAuth::attempt($credentials)){
            return response()->json(['error' => 'Invalid Credetials'], 401);
        }
        return response()->json(['token' => $token]);
    }

    //User logout
    public function logout(){
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Successfully logged out']);
    }

    //Fetch Authenticated User
    public function me(){
        return response()->json(Auth::user());
    }
}
