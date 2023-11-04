import logo from "../../public/ifpb-logo-md.svg"

export function IntroPageMd() {
  return (
    <div className="min-h-screen to-green-500 from-cyan-500 bg-gradient-to-b justify-center items-center">
      <div className="gap-24 mt-6">
        <h1 className="text-white text-5xl font-bold text-center">IFernShip</h1>
        <img src={logo} alt="IFPB" />
      </div>
    </div>
  );
}
