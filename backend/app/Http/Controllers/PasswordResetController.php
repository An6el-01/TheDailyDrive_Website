<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log; // Add this line
use App\Models\User;

class PasswordResetController extends Controller
{
    // Send Password Reset Link
   public function sendResetLink(Request $request)
{
    try {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email'),
            function ($user, $token) {
                // Correctly generate a custom reset link pointing to the frontend
                $resetUrl = config('app.frontend_url') . "/reset-password?token={$token}&email={$user->email}";
                Log::info('Generated Reset URL: ' . $resetUrl);
                // Send an email with the custom reset URL
                $user->sendPasswordResetNotification($resetUrl);
            }
        );

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json(['message' => __($status)], 200);
        }

        return response()->json(['message' => __($status)], 400);
    } catch (\Exception $e) {
        Log::error('Error in sendResetLink: ' . $e->getMessage());
        return response()->json(['message' => 'An error occurred while processing the request.'], 500);
    }
}

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email'=> 'required|email',
            'token'=> 'required',
            'password'=> 'required|string|min:6|confirmed'
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function($user, $password){
                $user->password = Hash::make($password);
                $user->save(); 
            }
        );
        if ($status === Password::PASSWORD_RESET){
            return response()->json(['message' => 'Password has been successfully reset.'], 200);
        }

        return response()->json(['message' => 'Failed to reset password. Invalid token or email[PasswordResetController.php]'],400);
    }
}
