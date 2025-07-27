import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import logo from "../../public/images/logo.png";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function NoAccessToCart() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center">
                        <Image src={logo} className="mb-4" width={80} height={80} alt="Company logo" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                        Welcome Back!
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">
                        Log in to view your cart items and checkout. Don&rsquo;t miss out on
                        your favorite products!
                    </p>
                    <SignInButton mode="modal">
                        <Button className="w-full cursor-pointer" size="lg">
                            Sign in
                        </Button>
                    </SignInButton>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <p className="text-sm text-muted-foreground text-center">
                        Don&rsquo;t have an account?
                    </p>
                    <SignUpButton mode="modal">
                        <Button variant="outline" className="w-full cursor-pointer" size="lg">
                            Create an account
                        </Button>
                    </SignUpButton>
                </CardFooter>
            </Card>
        </div>
    );
}