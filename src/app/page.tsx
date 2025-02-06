import Image from "next/image";
import Navbar from "./components/navbar";
import Form from "./components/form"

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="justify-center">
      <Form />
    </div>
    </>
  );
}
