export default function Home() {
	return (
		<main className='px-32 py-24'>
			{/*  */}
			<section>
				<h1 className='text-6xl font-bold mb-5'>
					Hierarchia budowy organizmu
				</h1>
				<section className='grid grid-cols-3 gap-3'>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Komórka</h1>
						<p className='text-lg'>
							Jest podstawową jednostką budulcową organizmu.
							Wszystkie procesy życiowe zachodzą na tym poziomie.
							Komórki mogą mieć różne funkcje i specjalizacje,
							takie jak komórki mięśniowe, nerwowe, komórki krwi,
							itp.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Tkanka</h1>
						<p className='text-lg'>
							Komórki o podobnych funkcjach grupują się w tkanki.
							Przykłady to tkanka mięśniowa, tkanka nerwowa,
							tkanka kostna i wiele innych. Tkanki tworzą
							struktury i narządy organizmu.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Narząd</h1>
						<p className='text-lg'>
							Narządy to struktury złożone z różnych rodzajów
							tkanek, które współpracują, aby wykonywać określone
							funkcje. Przykłady narządów to serce, mózg, wątroba,
							płuca i wiele innych.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Układ narządów</h1>
						<p className='text-lg'>
							Układy narządów to grupy narządów, które
							współpracują w realizacji określonych funkcji w
							organizmie. Przykłady to układ krążenia, układ
							pokarmowy, układ oddechowy itp.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Organizm</h1>
						<p className='text-lg'>
							Organizm to cały organizm, który składa się z
							różnych układów narządów. To jest najwyższy poziom
							hierarchii, na którym zachodzi działanie wszystkich
							niższych poziomów organizacji. Przykłady organizmów
							to ludzie, zwierzęta, rośliny itp.
						</p>
					</div>
				</section>
			</section>
			{/*  */}
			<section>
				<h1 className='text-6xl font-bold mb-5 mt-10'>Tkanki zwierzęce</h1>
				<section className='grid grid-cols-3 gap-3'>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Tkank nabłonkowa</h1>
						<p className='text-lg'>
							- zwarty układ komórek
              - komórki ułożone na błonie podstawnej
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Tkanka mięśniowa</h1>
						<p className='text-lg'>
							- wydłużone komórki lub włokna mięśniowe
              - kórki i włókna mięśniowe mają zdolność kurczenia się
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Tkanka nerwowa</h1>
						<p className='text-lg'>
							- neurony i komórki glejowe
              - komórki glejowe pełnią funkcje podporowe i odżywcze dla neuronów
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Tkanka łączna</h1>
						<p className='text-lg'>
							- luźny układ
              - dużo substancji międzykomórkowej
						</p>
					</div>
				</section>
			</section>
			{/*  */}
			<section>
				<h1 className='text-6xl font-bold mb-5 mt-10'>
					Rodzaj ukłądu narądów
				</h1>
				<section className='grid grid-cols-3 gap-3'>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Układ pokarmowy</h1>
						<p className='text-lg'>
							Ten układ obejmuje narządy i struktury zaangażowane
							w trawienie i przyswajanie pożywienia. Składa się z
							narządów takich jak przełyk, żołądek, wątroba,
							trzustka, jelita i inne.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>
							Układ krążenia (sercowo-naczyniowy)
						</h1>
						<p className='text-lg'>
							Ten układ obejmuje serce i naczynia krwionośne
							(tętnice, żyły i naczynia limfatyczne). Jest
							odpowiedzialny za pompowanie krwi i transportowanie
							jej oraz substancji odżywczych i tlenu do tkanek
							oraz usuwanie produktów przemiany materii i
							dwutlenku węgla.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Układ oddechowy</h1>
						<p className='text-lg'>
							Ten układ obejmuje narządy i struktury zaangażowane
							w wymianę gazową, w tym płuca i oskrzela. Jest
							odpowiedzialny za pobieranie tlenu i usuwanie
							dwutlenku węgla z organizmu.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>
							Układ wydalniczy (moczowo-płciowy)
						</h1>
						<p className='text-lg'>
							Ten układ zawiera narządy takie jak nerki, pęcherz
							moczowy i narządy płciowe. Jest odpowiedzialny za
							usuwanie zbędnych produktów metabolicznych i
							regulację składu cieczy ustrojowych.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Układ nerwowy</h1>
						<p className='text-lg'>
							Ten układ obejmuje mózg, rdzeń kręgowy i nerwy. Jest
							odpowiedzialny za przesyłanie informacji, kontrolę
							ruchu, myślenie, emocje i wiele innych funkcji.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>
							Układ hormonalny (endokrynologiczny)
						</h1>
						<p className='text-lg'>
							Ten układ składa się z gruczołów wydzielania
							wewnętrznego, takich jak przysadka mózgowa,
							tarczyca, nadnercza i trzustka, które wytwarzają
							hormony, regulujące wiele procesów fizjologicznych w
							organizmie.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>
							Układ kostny i mięśniowy
						</h1>
						<p className='text-lg'>
							Ten układ obejmuje kości i mięśnie. Kości stanowią
							strukturę podporową organizmu, a mięśnie są
							odpowiedzialne za ruch.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>
							Układ immunologiczny
						</h1>
						<p className='text-lg'>
							Ten układ skupia się na obronie organizmu przed
							infekcjami i chorobami. Obejmuje narządy takie jak
							śledziona, grasica oraz różne komórki i białka
							odpornościowe.
						</p>
					</div>
					<div className='flex flex-col border-4 p-5 rounded-2xl border-green-200'>
						<h1 className='text-4xl font-bold'>Układ rozrodczy</h1>
						<p className='text-lg'>
							Ten układ jest odpowiedzialny za rozmnażanie.
							Obejmuje narządy płciowe i struktury związane z
							procesem reprodukcji.
						</p>
					</div>
				</section>
			</section>
			{/*  */}
		</main>
	);
}
