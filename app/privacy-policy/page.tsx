import PageTitle from "@/components/PageTitle";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-11">
      <PageTitle>Privacy Policy</PageTitle>
      <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Data administrator</h2>
            <p className="text-lg leading-relaxed mb-4">
            The data administrator is the individual person Szymon Nawrocki -{" "}
              <a href="mailto:kontakt@szymonnawrocki.dev">kontakt@szymonnawrocki.dev</a>
            </p>
          <h2 className="text-xl font-bold mb-2">Cookies Files
          </h2>
            <p className="text-lg leading-relaxed mb-4">
            The website uses cookies to ensure correct operation and to keep statistics on, among other things, the number of visits - Vercel Analytics (explained below).
            </p>
          <h2 className="text-xl font-bold mb-2">When is your data collected?</h2>
            <p className="text-lg leading-relaxed mb-4">
            Your data is collected when you use the contact form.
            </p>
          <h2 className="text-xl font-bold mb-2">Purposes of data processing</h2>
          <p className="text-lg leading-relaxed mb-4">
          Your data collected via the contact form is only used for contact purposes and is not shared with anyone.
            </p>
            <p className="text-lg leading-relaxed mb-4">
            The use of the contact form is voluntary.
            </p>
          <h2 className="text-xl font-bold mb-2">Vercel Analytics</h2>
            <p className="text-lg leading-relaxed mb-4">
            The site uses Vercel Analytics to collect and analyse information about the site (number of monthly visits, where traffic comes to the site from search engines, social media links, etc.). Information about people using the site is sent to Vercel for analysis, but the company does not send personally identifiable information such as IP address.
            </p>
          <h2 className="text-xl font-bold mb-2">Other information</h2>
            <p className="text-lg leading-relaxed">
            If you have any questions, please contact me at{" "}
          <a href="mailto:kontakt@szymonnawrocki.dev">kontakt@szymonnawrocki.dev</a>
            </p>
      </div>
    </div>
  );
}
