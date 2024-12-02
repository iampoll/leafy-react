import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "../api/use-login";
import { loginSchema } from "../types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginFormFields() {
    const navigate = useNavigate();
    const login = useLogin();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: LoginFormValues) {
        try {
            await login.mutateAsync(data);

            navigate("/dashboard");
        } catch (error) {
            toast.error("Invalid credentials.");
            console.log(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="m@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center justify-between">
                                <FormLabel>Password</FormLabel>
                                <Link
                                    to="#"
                                    className="text-sm text-muted-foreground underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {form.formState.errors.root && (
                    <div className="text-sm text-destructive">
                        {form.formState.errors.root.message}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full"
                    disabled={login.isPending}
                >
                    {login.isPending ? "Logging in..." : "Login"}
                </Button>
            </form>
        </Form>
    );
}

export function LoginForm() {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>

            <CardContent>
                <LoginFormFields />

                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
