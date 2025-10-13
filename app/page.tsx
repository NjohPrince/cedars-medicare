import DoctorsTemplate from "@/components/templates/home/doctors/doctors.template";
import HomeHeroTemplate from "@/components/templates/home/home-hero/home-hero.template";

export default function Home() {
  return (
    <>
      <HomeHeroTemplate />
      <DoctorsTemplate />
    </>
  );
}
