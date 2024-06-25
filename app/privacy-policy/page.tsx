import PageTitle from "@/components/PageTitle";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-11">
      <PageTitle>Polityka Prywatności</PageTitle>
      <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Administrator danych</h2>
            <p className="text-lg leading-relaxed mb-4">
            Administratorem danych jest osoba fizyczna Szymon Nawrocki -{" "}
              <a href="mailto:kontakt@szymonnawrocki.dev">kontakt@szymonnawrocki.dev</a>
            </p>
          <h2 className="text-xl font-bold mb-2">Pliki cookies
          </h2>
            <p className="text-lg leading-relaxed mb-4">
            Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania oraz prowadzenia danych statystycznych dotyczących m.in. liczby odwiedzin - Vercel Analytics (wyjaśnienie niżej).
            </p>
          <h2 className="text-xl font-bold mb-2">Kiedy zbierane są Twoje dane?</h2>
            <p className="text-lg leading-relaxed mb-4">
            Twoje dane zbierane są podczas korzystania z formularza kontaktowego.
            </p>
          <h2 className="text-xl font-bold mb-2">Cele przetwarzania danych</h2>
          <p className="text-lg leading-relaxed mb-4">
          Twoje dane zebrane przez formularz kontaktowy są używane jedynie w celach kontaktowych i nie są nikomu udostępniane.
            </p>
            <p className="text-lg leading-relaxed mb-4">
            Korzystanie z formularza kontaktowego jest dobrowolne.
            </p>
          <h2 className="text-xl font-bold mb-2">Vercel Analytics</h2>
            <p className="text-lg leading-relaxed mb-4">
            Strona korzysta z usługi Vercel Analytics do zbierania i analizowania informacji o serwisie (ilość miesięcznych odwiedzin, skąd ruch trafia na stronę z wyszukiwarek, z linków w social media itp.). Informacje o osobach korzystających z serwisu są przesyłane do Vercel w celu analizy, ale firma nie przesyła informacji umożliwiających identyfikację danej osoby, takich jak adres IP.
            </p>
          <h2 className="text-xl font-bold mb-2">Pozostałe informacje</h2>
            <p className="text-lg leading-relaxed">
          W razie jakichkolwiek pytań proszę o kontakt na{" "}
          <a href="mailto:kontakt@szymonnawrocki.dev">kontakt@szymonnawrocki.dev</a>
            </p>
      </div>
    </div>
  );
}
