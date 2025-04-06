"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { useRouter } from "next/navigation";

type FormType = "sign-in" | "sign-up";

const AuthFormSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up"
        ? z.string().min(3, "Name is too short")
        : z.string().optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password is too short"),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const isSignIn = type === "sign-in";
  const formSchema = AuthFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
        toast.success("Account created!");
      } else {
        toast.success("Sign in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100 text-xl font-semibold">PrepWise</h2>
        </div>

        <h3 className="text-lg md:text-xl font-medium text-center mt-2 text-muted-foreground">
          Practice job interview with AI
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      {...field}
                      placeholder="Your Name"
                      className="input w-full mt-1 p-2 border rounded"
                    />
                  </div>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    className="input w-full mt-1 p-2 border rounded"
                  />
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    {...field}
                    type="password"
                    placeholder="••••••••"
                    className="input w-full mt-1 p-2 border rounded"
                  />
                </div>
              )}
            />

            <Button className="btn w-full" type="submit">
              {isSignIn ? "Sign in" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1 underline"
          >
            {!isSignIn ? "Sign in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
