import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
    return (
        <ul className="grid grid-cols-2 gap-4 mt-6">
            {drinks.map((drink) => {
                return (
                    <li key={drink.idDrink}>
                        <div className="relative h-48 mb-4">
                            <Image
                                src={drink.strDrinkThumb}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200) 50vw"
                                className="object-cover rounded-md"
                                alt={drink.strDrink}
                            ></Image>
                        </div>
                        <Link
                            href={`/drinks/${drink.idDrink}`}
                            className="text-xl font-medium "
                        >
                            {drink.strDrink}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default DrinksList;
