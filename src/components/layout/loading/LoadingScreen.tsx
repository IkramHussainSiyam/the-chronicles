import LoadingText from "./LoadingText";

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 z-[9999] w-screen h-screen grid place-items-center bg-accent">
      <LoadingText
        showDots
        className="text-4xl sm:text-7xl lg:text-8xl font-title font-medium before:content-['Wait_a_moment...']"
      />
    </div>
  );
}
