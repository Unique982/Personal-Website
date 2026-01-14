"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Eye, EyeOff, Key, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [step, setStep] = useState<"login" | "forgot" | "otp">("login");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8"
        >
          <ChevronLeft size={20} />
          Back to website
        </Link>

        {/* Profile Avatar */}
        {/* <div className="flex flex-col items-center mb-10">
          <div className="w-25 h-25 rounded-full border-4 border-white shadow-md overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="User Profile"
              width={100}
              height={100}
              className="object-cover"
              priority
            />
          </div>
        </div> */}

        {/* LOGIN */}
        {step === "login" && (
          <Card className="p-8 bg-white border border-slate-200 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm">
              Enter your email and password to access your dashboard.
            </p>

            <form className="space-y-4">
              <div>
                <Label className=" text-slate-900">Email Address</Label>
                <div className="relative mt-1">
                  <Mail
                    className="absolute left-3 top-2.5 text-slate-400"
                    size={18}
                  />
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="pl-10 text-slate-800"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className=" text-slate-900"> Password</Label>
                  <button
                    type="button"
                    onClick={() => setStep("forgot")}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Key
                    className="absolute left-3 top-2.5 text-slate-400"
                    size={18}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 text-slate-800"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white">
                Login
              </Button>
            </form>
          </Card>
        )}

        {/* FORGOT */}
        {step === "forgot" && (
          <Card className="p-8 bg-white border border-slate-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              Forgot Password?
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("otp");
              }}
            >
              <div>
                <Label className=" text-slate-900">Email Address</Label>
                <Input
                  type="email"
                  className="bg-white border-slate-300 text-slate-800 mt-1"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <Button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white">
                Reset Password
              </Button>

              <button
                type="button"
                onClick={() => setStep("login")}
                className="w-full text-sm text-slate-500 hover:text-slate-800"
              >
                Back to Login
              </button>
            </form>
          </Card>
        )}

        {/* OTP */}
        {step === "otp" && (
          <Card className="p-8 bg-white border border-slate-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-1">
              <ShieldCheck className="text-indigo-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold  text-slate-900">
              Verify your Email
            </h2>
            <p className="text-slate-500 text-sm ">
              We sent a 6-digit code to your email.
            </p>

            <div className="flex gap-2 justify-center ">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="w-10 h-12 bg-white border border-slate-300 rounded-lg text-center font-bold text-lg text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              ))}
            </div>

            <Button className="w-full  bg-indigo-600 hover:bg-indigo-700 text-white">
              Verify & Login
            </Button>

            <p className="text-sm text-slate-500">
              Didn't receive code?{" "}
              <button className="text-indigo-600 font-bold hover:text-indigo-700">
                Resend
              </button>
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
