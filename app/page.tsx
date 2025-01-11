import Dependencies from "@/components/dependencies";
import Hero from "@/components/hero";
import Installation from "@/components/installation";
import DialogCode from "@/components/manual";
import Playground from "@/components/playground";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-12 p-4">
      <Hero />
      <Playground />
      <Dependencies />
      <Installation />
      <DialogCode />
      <hr />
      <SiteFooter />
    </div>
  );
}
