import data from "@/utils/data";
import Card from "@/components/Card";
import Link from "next/link";


export default function Home() {
  function getRandomObjects(arr, n) {
    const result = new Set();

    while (result.size < n) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.add(arr[randomIndex]);
    }

    return Array.from(result);
  }
  return (
    <div className="flex flex-col w-full gap-10 px-4 py-4 lg:py-8 md:px-8 lg:px-20 xl:px-48">

      <div className="flex flex-col gap-4 py-4 md:gap-6 lg:gap-8 xl:gap-10">

        <div className="sticky w-full">
          <h1 className="text-3xl font-bold text-black lg:text-4xl font-montserrat">Best Sellers</h1>
        </div>

        <div className="w-full overflow-y-auto">
          <div className="flex items-center gap-10">
            {
              data.filter((item) => item.average_rating > 4.0).slice(0, 30).map((item) => {
                return (
                  <Card key={item.uniq_id} item={item} />
                )
              })
            }
          </div>
        </div>

      </div>


      <div className="flex flex-col gap-4 py-4 md:gap-6 lg:gap-8 xl:gap-10">

        <div className="sticky w-full">
          <h1 className="text-3xl font-bold text-black lg:text-4xl font-montserrat">Explore Our Products</h1>
        </div>


        <div className="grid w-full grid-cols-2 gap-10 lg:grid-cols-5">
          {
            getRandomObjects(data, 10).map((item) => {
              return (
                <Card key={item.uniq_id} item={item} />
              )
            })
          }
        </div>


        <div className="flex items-center justify-center w-full">

          <Link href={'/allProducts'} className="bg-[#DB4444] text-center text-white font-montserrat lg:text-xl p-4 rounded w-full lg:w-1/3">

            View All Products

          </Link>

        </div>


      </div>




    </div>
  );
}
