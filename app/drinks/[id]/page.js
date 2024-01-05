import Link from "next/link";
import Image from "next/image";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImg from "./drink.jpg";

const getSingleDrink = async (url, idDrink) => {
    const res = await fetch(url + idDrink);
    if (!res.ok) {
        throw new Error("failed to fetch drink...");
    }

    const data = await res.json();

    return data.drinks;
};

const singleDrinkPage = async ({ params }) => {
    const drink = await getSingleDrink(URL, params.id);
    const title = drink[0].strDrink;
    const imgSrc = drink[0].strDrinkThumb;

    return (
        <div>
            <Link href="/drinks" className="btn btn-accent text-2xl mt-8 mb-12">
                Back to Drinks
            </Link>
            {/* <img src={imgSrc} alt='' /> */}
            {/* <Image
                src={drinkImg}
                alt="red drink"
                className="w-48 h-48 rounded mb-8"
            /> */}

            <Image
                src={imgSrc}
                width={300}
                height={300}
                priority
                className="w-48 h-48 rounded-lg shadow-lg mb-8"
            />
            <h1 className="text-6xl">{title}</h1>
        </div>
    );
};

export default singleDrinkPage;
