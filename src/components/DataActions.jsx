import DataAction from './DataAction';

/* eslint-disable @next/next/no-img-element */
const DataActions = () => {
  return (
    <section className="bg-ramosGrey rounded-ramos p-20 pr-0 pb-40 relative overflow-hidden">
      <div className="flex justify-between">
        <div className="z-10">
          <p className="font-medium text-4xl mb-28">
            Turning data into real <br /> actions and ideas.
          </p>

          <DataAction title="Instant Insights" />
          <DataAction title="AI Technology" />
          <DataAction title="Easy Integration" />
        </div>
        <div className="z-10">
          <img src="img/phone-laptop.png" alt="" width={800} />
        </div>
      </div>

      <p className="ramos-big text-ramosOrange font-bold absolute -bottom-28 bg-ramosGrey bg-[linear-gradient(to_left,#e6e6e6_1px,transparent_1px),linear-gradient(to_top,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem]">
        Ramos
      </p>
    </section>
  );
};

export default DataActions;
