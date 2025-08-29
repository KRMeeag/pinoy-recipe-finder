const HeroSectionHome = () => {
  return (
    <div>
      <section id="hero-section" className="h-screen bg-accent">
        <div className="h-16 md:hidden"></div>
        <div className="container mx-auto h-full text-gray-50 relative">
          <div className="w-64 h-64 absolute"></div>
          <div className="flex flex-col items-center justify-center h-full gap-5 md:flex-row">
            {/* Content */}
            <div className="w-full space-y-5 p-6 md:w-2/5">
              <h1 className="text-7xl psr">
                Cook your favorite Filipino Food!
              </h1>
              <p>
                Taste the Philippines here at Cook-oo. Browse the vast catalogue
                of Filipino Recipes!
              </p>
              <a href="#searchBar">
                <button className="btn btn-primary px-5 py-5">
                  Start Browsing
                </button>
              </a>
            </div>
            {/* Image */}
            <div className="w-3/4 relative hidden md:inline md:w-3/5">
              <img src="/assets/sinigang.png" />
              <div className="absolute top-5 right-0 opacity-30 lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
                  <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />
                </svg>
              </div>
              <div className="absolute bottom-9 left-5 opacity-30 lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
                  <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11" />
                </svg>
              </div>
              <div className="absolute top-7 left-10 opacity-30 lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10" />
                </svg>
              </div>
              <div className="absolute bottom-2 right-10 opacity-30 lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M7 21h10m-5 0a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9" />
                  <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.5 2.5 0 0 1 .03 1.1M13 12l4-4" />
                  <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSectionHome;
