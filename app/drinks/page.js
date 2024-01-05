import Link from "next/link";

import DrinksList from "../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    // throw error if res was not ok
    if (!response.ok) {
        throw new Error("there was an error fetching drinks");
    }
    const data = await response.json();
    return data.drinks;
};

const DrinksPage = async () => {
    const drinks = await fetchDrinks();

    return (
        <>
            <DrinksList drinks={drinks} />
        </>
    );
};

export default DrinksPage;
