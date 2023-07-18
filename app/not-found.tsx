"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-auto bg-darkPurple text-white">
      <div className="flex flex-col mx-auto items-center justify-center px-4">
        <h1 className="text-[100px] md:text-[130px] leading-none">404</h1>
        <p className="text-center text-lg md:text-xl max-w-lg font-thin">
          Sorry.. We searched high and low but couldn't find what you're looking
          for. Let's find a better place for you to go.
        </p>
        <button
          onClick={() => router.back()}
          className="btn-md-orange px-3 text-white hover:bg-grey mt-5"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
