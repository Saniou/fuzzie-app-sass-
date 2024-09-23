'use client'
import { useState } from 'react'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EditUserProfileSchema } from '@/lib/types'
import { Loader2 } from 'lucide-react'


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

type Props = {}

function ProfileForm({ }: Props) {

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={() => { }} className="flex flex-col gap-6">
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>User full name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={true}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    {...field}
                                    disabled />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className='self-start hover:bg-[#2F006B] hover:text-white'
                >
                    {isLoading ? (
                        <>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Saving...
                        </>

                    ) : (
                        'Save User Settings'
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm