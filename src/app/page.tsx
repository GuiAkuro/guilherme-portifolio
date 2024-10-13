import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-neutral-900 h-screen overflow-auto">
      <header>
        <div className="container mx-auto flex justify-between py-6 items-center">
          <Link href="/">
            <div className="text-white font-bold uppercase text-lg bg-neutral-700 p-2 pointer-events-none rounded">
              go
            </div>
          </Link>

          <div className="flex gap-12">
            <ul className="flex items-center text-neutral-300 gap-10">
              <li>
                <Link href="/">Sobre mim</Link>
              </li>
              <li>
                <Link href="/">Meus projetos</Link>
              </li>
              <li>
                <Link href="/">Currículo</Link>
              </li>
            </ul>

            <Link
              className="inline-flex items-center px-4 rounded uppercase text-sm font-semibold h-12 bg-neutral-100"
              href="/"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-700 rounded md:order-last h-[300px] md:h-[700px]"></div>

          <div className="flex flex-col justify-center text-neutral-300">
            <div className="mb-8">
              <div className="mb-2  ">Oi, meu nome é</div>
              <h1 className="text-6xl font-bold">Guilherme Oliveira</h1>
            </div>

            <div className="max-w-2xl">
              Apaixonado em front-end e experiência do usuário (UX), comecei
              minha carreira como analista de sistemas na Universidade de
              Uberaba onde me formei e hoje atuo como engenheiro de software em
              uma das maiores empresas do setor.
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                className="inline-flex px-4 items-center h-12 bg-green-500 text-neutral-900 uppercase text-sm font-semibold rounded"
                href="/"
              >
                Entrar em contato
              </Link>
              <Link
                className="inline-flex px-4 items-center h-12 bg-neutral-100 text-neutral-900 uppercase text-sm font-semibold rounded"
                href="/"
              >
                Ver meu Github
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-12">
        <h2 className="text-center text-3xl font-bold text-neutral-300">
          Meu Portifólio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded bg-neutral-700 h-[350px]"></div>
          <div className="rounded bg-neutral-700 h-[350px]"></div>
          <div className="rounded bg-neutral-700 h-[350px]"></div>
          <div className="rounded bg-neutral-700 h-[350px]"></div>
        </div>
      </div>
    </div>
  );
}
