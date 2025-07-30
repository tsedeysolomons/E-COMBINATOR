"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthButtons } from "@/components/auth-buttons";
import { MobileNav } from "@/components/mobile-nav";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions.");
      toast.error("You must accept the terms and conditions.");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: "testUser",
      email,
      password,
      callbackURL: "/auth/signin",
    });

    if (error) {
      toast.error(error?.message);
      return;
    }

    toast.success("Sign up successful! Redirecting to sign in.");
    router.push("/auth/signin");
  };

  return (
    <div className="">
      {/* Sign Up Form Section */}
      <section className="py-20 md:py-32 flex items-center justify-center bg-gradient-to-br from-brand-blue-sky/10 via-background to-brand-orange/10">
        <Card className="w-full max-w-md mx-auto border-0 shadow-lg rounded-2xl overflow-hidden bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground">
              Sign Up
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Create your account to get started with E-Combinator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <p className="text-destructive text-sm text-center">{error}</p>
              )}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-muted/20 border-border focus:ring-brand-blue-deep"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I accept the{" "}
                  <Link
                    href="#"
                    className="underline hover:text-brand-blue-deep"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-blue-deep to-brand-orange hover:from-brand-blue-deep/90 hover:to-brand-orange/90"
              >
                Sign Up
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="underline hover:text-brand-blue-deep"
              >
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
