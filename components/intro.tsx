const introLottery = [
  "Sometimes I like to write whatever it is I'm thinking about.",
  "Have we met before?",
  "blog"
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Occasionally.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        { introLottery[getRandomInt(introLottery.length)] }
      </h4>
    </section>
  )
}

export default Intro
