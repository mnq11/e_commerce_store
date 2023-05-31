// app/about/page.jsx

"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { isLoaded, isSignedIn } = useUser();
  useRouter();
  return (
    <section className="h-full" dir="ltr">

    </section>

  );
};

export default Page;
