"use client"
import { useEffect, useMemo, useState } from "react"
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
// import { RichTextEditor } from "@/components/RichTextEditor"
import { Loading } from "@/components/Loading";

const notEmpty = z.string().trim().min(1, { message: "Required" });

const FormSchema = z.object({
  name: z.string().pipe(notEmpty),
  domain: z.string().pipe(notEmpty),
  description: z.string().pipe(notEmpty),
  startDate: z.string().pipe(notEmpty),
  endDate: z.string().pipe(notEmpty),
  location: z.string().optional(),
})

interface Step1Props {
  id?: string
  step: number
  setStep: (step: number) => void
  eventInfo?: any
  userInfo?: any
  isCreateEvent?: boolean
}

export const Step1 = ({ id, setStep, step, eventInfo, userInfo, isCreateEvent }: Step1Props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [events, setEvents] = useState([])
  const [existingSlugError, setExistingSlugError] = useState('')
  const [imageUploading, setImageUploading] = useState(false)
  const [userEmailIsOrganizerEmail, setUserEmailIsOrganizerEmail] = useState(false)
  const [permanentSlug, setPermanentSlug] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: eventInfo?.name,
      description: eventInfo?.description,
      domain: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  })

  useEffect(() => {
    if (eventInfo) {
      form.reset({
        ...form.getValues(),
        name: eventInfo?.name,
        description: eventInfo?.description,
        domain: eventInfo?.domain,
        startDate: eventInfo?.startDate,
        endDate: eventInfo?.endDate,
        location: eventInfo?.location ?? '',
      });
      setPermanentSlug(eventInfo?.domain)
    }
  }, [eventInfo, form]);

  const { setValue, handleSubmit, watch, register, formState } = form;
  const { errors } = formState;
  const domain = watch("domain");
  console.log('errors', errors);

  const formatEventSlug = (eventString: string) => {
    return eventString?.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  }

  const name = watch("name");

  useEffect(() => {
    const formattedSlug = formatEventSlug(name)
    if (!permanentSlug) {
      setValue('domain', formattedSlug)
    }
  }, [name])

  const handleSubmitEvent = async (data: any) => {
    // e.preventDefault();

    console.log('handleSubmitEvent data', data);

    try {
      const response = await fetch(`http://localhost:4000/events/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
        body: JSON.stringify({
          "title": "Conference 2024",
          "description": "Annual tech conference",
          "startDate": "2024-12-01T10:00:00Z",
          "endDate": "2024-12-01T18:00:00Z",
          "location": "Conference Hall A",
          "domain": "example.com",
        }),
      });

      console.log('response', response);

      if (response.ok) {
        // Handle success (e.g., redirect or display a success message)
        const responseData = await response.json();
        console.log('responseData', responseData);
        console.log("Event creation successful");
      } else {
        const errorData = await response.json();
        console.log('errorData', errorData);

        // Handle error (e.g., display an error message)
        console.log("Event creation failed");
      }
    } catch (error) {
      console.error("Error during event creation:", error);
    }
  };


  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const editingEventId = eventInfo?.id;

    console.log('onSubmit', data);


    // if (doesSlugExist(data.slug, editingEventId)) {
    //   // const slugError = t('existingSlugError')
    //   // setExistingSlugError(slugError);
    //   return;
    // } else {
    //   setExistingSlugError('')
    // }

    if (eventInfo) {
      console.log('edit event!', data);
      const res = await handleSubmitEvent(data)

      console.log('res', res);

      // const res = await editEventInFirebase(data)
      // if (!res) {
      //   return false;
      // }
    } else {
      const res = await handleSubmitEvent(data)

      console.log('res', res);
      console.log('add new event!', data);
      // const res = await addEventToFirebase(data)
      // if (!res) {
      //   return false;
      // }
    }
    // router.push(`/dashboard/event/${eventId}?step=${step + 1}`)
  }

  const doesSlugExist = (slug: string, currentEventId?: string) => {
    const slugExists = events.some((event: any) => {
      // Check if the slug matches and it's not the current event being edited
      const exists = event?.slug === slug && event?.id !== currentEventId;
      return exists
    });
    if (!slugExists) {
      setExistingSlugError('')
    }

    return slugExists
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input placeholder={'Name'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description*</FormLabel>
                <FormControl>
                  <Input placeholder={'Description'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <p className="!mt-2 text-sm">This will be the event url: https://hallos.io/event/{slug}</p> */}

          {existingSlugError && <p className="!mt-2 text-sm text-red-600"> {existingSlugError}</p>}

          <div className='mb-[20px] flex flex-col md:flex-row '>
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <div className='w-full md:w-[50%] mr-[10px]'>
                  <FormItem>
                    <FormControl>
                      <div>
                        <FormLabel>Start Date*</FormLabel>
                        <input
                          {...field}
                          type='datetime-local'
                          id='startDate'
                          {...register("startDate")}
                          className='border border-gray-300 rounded-md p-2 w-full text-black'
                        />
                        <FormMessage />
                      </div>
                    </FormControl>
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <div className='w-full md:w-[50%] mr-[10px]'>
                  <FormItem>
                    <FormControl>
                      <div>
                        <FormLabel>End Date*</FormLabel>
                        <input
                          {...field}
                          type='datetime-local'
                          id='endDate'
                          {...register("endDate")}
                          className='border border-gray-300 rounded-md p-2 w-full text-black'
                        />
                        <FormMessage />
                      </div>
                    </FormControl>
                  </FormItem>
                </div>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ?
                <Loading />
                :
                <>
                  Next Step
                  {/* <IoArrowForward className="ml-2" /> */}
                </>
              }
            </Button>
          </div>
        </form>
      </Form>


    </div>
  )
}