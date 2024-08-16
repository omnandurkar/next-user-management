import { OrbitingCirclesDemo } from "@/components/magic-comp/orbit-comp";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
// import TypingAnimation from "@/components/magicui/typing-animation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const color = "#ffffff";
  return (
    <div className="p-10 relative min-h-screen bg-gradient-to-r bg-black flex flex-col space-y-10 justify-center items-center  overflow-hidden">

      {/* <TypingAnimation
        className="pointer-events-none whitespace-pre-wrap drop-shadow-lg bg-gradient-to-b to-gray-500 from-gray-200/80 bg-clip-text text-center text-3xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
        text="Welcome To Om Notes"
      /> */}

      <OrbitingCirclesDemo />

      <div className="relative z-10">
        <Link href='/user-management'>

          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Dive In...
            </span>
          </ShimmerButton>
        </Link>
      </div>


      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      {/* <GlobeDemo /> */}


    </div>
  );
}
