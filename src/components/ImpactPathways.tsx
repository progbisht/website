"use client";

interface ImpactCardProps {
  popular?: boolean;
  pathName: string;
  pathDescription: string;
  features: string[];
}

export function ImpactCard(props: ImpactCardProps) {
  return (
    <div className={`h-full `}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-black border border-white/30 shadow shadow-black/80">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Start Creating Impact
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/50 font-bold text-4xl">
              {props.pathName}
            </span>
          </div>
          <div className="text-sm text-white/70 mb-5">
            {props.pathDescription}
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#5D2CA8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#5D2CA2] focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Ways to Make a Difference:
          </a>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function ImpactPathways() {
  return (
    <div>
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16"></div>

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <ImpactCard
          pathName="Individual Action"
          pathDescription="Small steps lead to big changes. Start your impact journey with your actions."
          features={[
            "Volunteer at local nonprofits and shelters",
            "Reduce your carbon footprint daily",
            "Mentor youth in your neighborhood",
            "Support local businesses and artisans",
            "Share knowledge through teaching",
          ]}
        />

        {/* Pricing tab 2 */}
        <ImpactCard
          popular={true}
          pathName="Community Building"
          pathDescription="Unite people around shared goals. Amplify your impact by bringing communities together for collective action."
          features={[
            "Organize community clean-up events",
            "Start neighborhood support networks",
            "Launch awareness campaigns for causes",
            "Create safe spaces for dialogue",
            "Build local resource sharing programs",
            "Foster inclusive community events",
          ]}
        />

        {/* Pricing tab 3 */}
        <ImpactCard
          pathName="Systemic Change"
          pathDescription="Transform structures and systems. Create lasting impact through advocacy, innovation, and sustainable solutions."
          features={[
            "Advocate for policy reforms",
            "Fund sustainable social enterprises",
            "Develop innovative solutions to problems",
            "Partner with NGOs and institutions",
            "Create employment opportunities",
            "Champion environmental conservation",
            "Promote education and healthcare access",
          ]}
        />
      </div>
    </div>
  );
}
