import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import SparklesText from "@/components/sparkles-text";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

const updateUserSchema = z.object({
    name: z
        .string()
        .min(3, {
            message: "Name must be at least 3 characters.",
        })
        .max(20, {
            message: "Name must be at most 20 characters.",
        }),
});

const SetName = () => {
    const { updateUser, isUpdatingUser } = useUser();

    const form = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            name: "",
        },
    });

    function onSubmit(values: z.infer<typeof updateUserSchema>) {
        updateUser(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <SparklesText text="Enter your name" />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="peer pe-12 ps-6 w-full border-foreground border-4 font-bold h-12"
                                    placeholder="eg. Paopao"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    size="lg"
                    variant="expandIcon"
                    Icon={ArrowRightIcon}
                    iconPlacement="right"
                    className="w-full border-black border-2 font-bold h-12"
                    disabled={isUpdatingUser}
                >
                    Set name
                </Button>
            </form>
        </Form>
    );
};

export default SetName;
