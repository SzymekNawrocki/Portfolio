"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/Button";
import { Alert, AlertType } from "@/components/Alert";

interface Iform {
  email: string;
  subject: string;
  message: string;
  privatePolicy: boolean;
}

const messages = {
  email: {
    notAllowed: "Provision of a temporary e-mail address is not permitted!",
  },
  subject: {
    min: "The topic must be longer.",
  },
  message: {
    min: "The message is to short.",
  },
  privatePolicy: {
    accept: "Consent is required.",
  },
};

const isEmailAllowed = (email: string) => {
  const notAllowedDomains = JSON.parse(
    process.env.NEXT_PUBLIC_NOT_ALLOWED_EMAIL_DOMAINS as string
  );

  return !notAllowedDomains.some((domain: string) =>
    email.endsWith(`@${domain}`)
  );
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => isEmailAllowed(email), {
      message: messages.email.notAllowed,
    }),
  subject: z.string().min(5, { message: messages.subject.min }),
  message: z.string().min(25, { message: messages.message.min }),
  privatePolicy: z.boolean().refine((accept) => accept === true, {
    message: messages.privatePolicy.accept,
  }),
});

const formDefaultValues: Iform = {
  email: "",
  subject: "",
  message: "",
  privatePolicy: false,
};

export function ContactForm() {
  const form = useForm<Iform>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [alertInfo, setAlertInfo] = useState<string>("");
  const [alertType, setAlertType] = useState<AlertType | undefined>();

  const sendMessage = async (data: Iform) => {
    setAlertVisible(true);
    setAlertType("loading");
    setAlertTitle("Wysyłanie wiadomości...");
    setAlertInfo("");

    const emailResponse = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (emailResponse.status === 200) {
      form.reset();
      setAlertType("success");
      setAlertTitle("Succes!");
      setAlertInfo("The message has been sent.");
      setTimeout(() => {
        setAlertVisible(false);
      }, 6500);
    } else {
      setAlertType("error");
      setAlertTitle("Something went wrong!");
      setAlertInfo("The message could not be sent. Please try again.");
      setTimeout(() => {
        setAlertVisible(false);
      }, 6500);
    }
  };

  return (
    <>
      <Alert
        visible={alertVisible}
        type={alertType}
        title={alertTitle}
        info={alertInfo}
      />
      <FormProvider {...form}>
        <form className="mt-8 w-full space-y-6" onSubmit={form.handleSubmit(sendMessage)}>
          <FormField
            type="email"
            id="email"
            label="E-mail Address"
            required={true}
          />
          <FormField 
          id="subject" 
          label="Topic" 
          required={true} />
          <FormField
            type="textarea"
            id="message"
            label="Message"
            required={true}
          />
          <FormField
            type="checkbox"
            id="privatePolicy"
            label="I accept the privacy policy"
            required={true}
          >
            I accept the{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-semibold text-primary hover:underline"
            >
              privacy policy
            </Link>
            .
          </FormField>
          <Button wFull={true} disabled={alertType === "loading"}>
            Send Message
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
