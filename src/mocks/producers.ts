import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jennyJack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";

const getRandomDistance = (min: number, max: number) : number  => {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}


const producers = {
    title: "Producers",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${getRandomDistance(1, 500)}`,
            stars: getRandomDistance(1,5)
        },
        {
            name: "Grow",
            image: grow,
            distance: `${getRandomDistance(1, 500)}`,
            stars: getRandomDistance(1,5)
        },
        {
            name: "Jenny Jack",
            image: jennyJack,
            distance: `${getRandomDistance(1, 500)}`,
            stars: getRandomDistance(1,5)
        },
        {
            name: "Potager",
            image: potager,
            distance: `${getRandomDistance(1, 500)}`,
            stars: getRandomDistance(1,5)
        },
        {
            name: "Salad",
            image: salad,
            distance: `${getRandomDistance(1, 500)}`,
            stars: getRandomDistance(1,5)
        }
    ]
};

export default producers;