'use client'
import { useEffect, useState } from "react"
// import { Step1 } from "./Step1"
// import { Step2 } from "./Step2"
// import { Step3 } from "./Step3";
// import { Step4 } from "./Step4";
// import { EventType, UserData } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Step1 } from "./dashboard/Step1";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface EventFormProps {
  id?: string
}

export const EventForm = ({ id }: EventFormProps) => {
  const [step, setStep] = useState(1)
  const [eventInfo, setEventInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();


  console.log('searchParams', searchParams);

  useEffect(() => {
    const stepParam = searchParams.get('step');

    console.log('stepParam', stepParam);

    if (stepParam) {
      setStep(parseInt(stepParam, 10));
    }
  }, [searchParams]);

  const stepTitles = ['Step 1', 'Step 2', 'Step 3']

  const isCreateEvent = true//!router.query.step

  return (
    <div className='w-full mx-[15px] md:mt-0 mt-2'>
      {isCreateEvent && <h1 className="text-2xl">{id ? 'Edit event' : 'Create event'}</h1>}

      {/* <div>
        <Breadcrumbs steps={stepTitles} currentStep={step} setStep={(step) => { setStep(step) }} />
      </div> */}

      <div className="max-w-[1200px] !w-full mt-[0px] mb-[80px] ">
        {step > 1 &&
          <Button onClick={() => {
            setStep(step - 1)
            // router.query.eventId = id;
            //router.push(`/dashboard/event/${id}/?step=${step - 1}`)
            //console.log('step!!', step);
            router.push(`/dashboard/event/${id}/?step=${step - 1}`);
          }}
            className="mb-[10px]"
          >
            Back
          </Button>
        }

        <h2 className="text-3xl font-bold mb-[10px]">{stepTitles[step - 1]}</h2>

        {step == 1 && <Step1 setStep={setStep} step={step} eventInfo={eventInfo} userInfo={userInfo} id={id} isCreateEvent />}
        {/*{step == 2 && <Step2 setStep={setStep} step={step} eventInfo={eventInfo} userInfo={userInfo} id={id} />}
        {step == 3 && <Step3 setStep={setStep} step={step} eventInfo={eventInfo} id={id} />}
        {checkIsAdmin() && step == 4 && <Step4 setStep={setStep} step={step} eventInfo={eventInfo} id={id} />} */}
      </div>
    </div>
  )
}