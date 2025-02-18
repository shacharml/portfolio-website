import { useRef } from "react";
import { MILITARY_SERVICE } from "../../constants";

const Military = () => {
  const militaryRef = useRef(null);
  return (
    <section className="py-16" id="military" ref={militaryRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
          Military Service
        </h2>
        <div className="flex flex-col space-y-12">
          {MILITARY_SERVICE.map((mil, index) => (
            <div
              key={index}
              className="flex flex-col-reverse md:flex-row md:items-center md:justify-between"
              >
                <div className="w-full text-sm font-semibold text-stone-300 order-1 md:order-none md:w-1/4 lg:text-lg">
                {mil.yearRange}
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-lg lg:text-2xl">
                  {mil.role}
                </h3>
                <p className="mb-4 text-sm lg:text-base">{mil.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Military;
