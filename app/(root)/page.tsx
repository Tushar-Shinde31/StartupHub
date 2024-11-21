import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home( { searchParams } : {
  searchParams: Promise<{qurey?: string}>
}) {
  const query = (await searchParams).qurey;

  return (
   <>
   <section className="pink_container">
   <h1 className="heading">Pitch Your StartUp, <br />
   Connect With Enterpernuers</h1>

   <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Pitches, and Get Notioced in Virtual Compititions.
   </p>

    <SearchForm query = {query}/>
   </section>

   </>
  );
}
