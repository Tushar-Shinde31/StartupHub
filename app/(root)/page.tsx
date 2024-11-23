import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home( { searchParams } : {
  searchParams: Promise<{qurey?: string}>
}) {
  const query = (await searchParams).qurey;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id : 1, name : 'Tushar'},
    _id : 1,
    description: "This is a description",
    image: 
       "https://www.bing.com/images/search?view=detailV2&ccid=HrXwEDAO&id=BA1E5B39FE3590B911EE2A3214C6EC666C39DD1B&thid=OIP.HrXwEDAO--wa_P-AtB-_nwHaE8&mediaurl=https%3a%2f%2fjocyls.com%2fwp-content%2fuploads%2f2023%2f04%2ffilipino-food-1024x683.png&exph=683&expw=1024&q=food&simid=608001717441270522&FORM=IRPRST&ck=73E5B051334F3E727D6BAD463F0DABBC&selectedIndex=0&itb=0",
       category: "Food",
       title: "we Robots"
  },
]

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

   <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search Result for "${query}"` : `All Startups`}
    </p>

    <ul className="mt-7 card_grid">
       {posts?.length > 0 ? (
        posts.map((post: StartupCardType, index : number) => (
          <StartupCard key={post?._id} post={post}/>
        ))
       ) : (
        <p className="no-results">No startups found</p>
       )}
    </ul>
   </section>

   </>
  );
}
