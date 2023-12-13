export function SplashPage() {
  return (
    <div className="min-h-screen to-green-500 from-cyan-500 bg-gradient-to-b justify-center items-center">
      <div className="gap-24 items-center justify-around animate-pulse">
        <h1 className="text-white text-4xl font-bold text-center hidden sm:flex">
          IFernShip
        </h1>
        <img alt="IFPB" width={100} src="/ifpb-logo-white.svg" />
      </div>
    </div>
  );
}
