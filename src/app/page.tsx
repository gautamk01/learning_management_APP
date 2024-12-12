import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "./(nondashboard)/landing/page";


export default function Home() {
  return (
    <div className="nondashboardlayout">
      <NonDashboardNavbar />
      <main className=" nondashboard-layout__main">
        <Landing />
      </main>
    </div>
  );
}
