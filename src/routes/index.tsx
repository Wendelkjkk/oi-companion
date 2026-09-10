import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  ExternalLink,
  Instagram,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatsappNumber = "5582988642056";
const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const projects = [
  {
    title: "Aurora Clínica",
    type: "Site institucional · Conceito",
    description:
      "Uma presença digital clara para uma clínica que precisava transmitir confiança antes mesmo do primeiro contato.",
    solution: "Estrutura focada em serviços, credibilidade e agendamento.",
    stack: "React · Tailwind · Responsivo",
    tone: "from-sky-500/20 via-cyan-400/10 to-white",
    icon: "✦",
  },
  {
    title: "Noma Studio",
    type: "Landing page · Conceito",
    description:
      "Uma landing page pensada para transformar visitantes curiosos em pessoas interessadas em conhecer o serviço.",
    solution: "Headline direta, prova visual e CTA distribuído pela página.",
    stack: "React · UX · SEO",
    tone: "from-violet-500/20 via-fuchsia-400/10 to-white",
    icon: "N",
  },
  {
    title: "Brava Móveis",
    type: "Site comercial · Conceito",
    description:
      "Um catálogo digital para apresentar produtos de forma organizada e facilitar o pedido de orçamento pelo WhatsApp.",
    solution: "Produtos em destaque, categorias simples e contato sem fricção.",
    stack: "React · Tailwind · WhatsApp",
    tone: "from-amber-500/20 via-orange-400/10 to-white",
    icon: "B",
  },
  {
    title: "Orbe Contábil",
    type: "Site institucional · Conceito",
    description:
      "Uma experiência mais moderna para um escritório que precisava parecer tão profissional online quanto já era no atendimento.",
    solution: "Arquitetura enxuta com serviços, diferenciais e contato rápido.",
    stack: "React · Performance · SEO",
    tone: "from-emerald-500/20 via-teal-400/10 to-white",
    icon: "O",
  },
  {
    title: "Vitta Fit",
    type: "Landing page · Conceito",
    description:
      "Uma página de campanha criada para apresentar uma oferta de forma rápida, visual e fácil de entender no celular.",
    solution: "Hierarquia visual, benefícios objetivos e chamadas para ação.",
    stack: "React · Mobile first · UX",
    tone: "from-rose-500/20 via-pink-400/10 to-white",
    icon: "V",
  },
  {
    title: "Casa Norte",
    type: "Site para negócio local · Conceito",
    description:
      "Um site simples para quem pesquisa no Google e precisa descobrir rapidamente o que a empresa faz e como entrar em contato.",
    solution: "Informação essencial, localização, serviços e CTA para WhatsApp.",
    stack: "React · SEO local · Responsivo",
    tone: "from-blue-500/20 via-indigo-400/10 to-white",
    icon: "C",
  },
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing pages",
    text: "Para campanhas, serviços e ofertas que precisam de uma página objetiva e focada em conversão.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sites profissionais",
    text: "Para empresas e profissionais que querem apresentar o negócio com credibilidade na internet.",
  },
  {
    icon: MousePointerClick,
    title: "Sites para negócios locais",
    text: "Para quem precisa ser encontrado, explicar o que faz e transformar visitas em contatos.",
  },
];

const steps = [
  ["01", "Você me conta a ideia", "Entendo seu negócio, objetivo e o que o site precisa fazer por você."],
  ["02", "Definimos a estrutura", "Organizo as informações para o visitante entender e agir sem se perder."],
  ["03", "Eu desenvolvo", "Transformo a ideia em um site responsivo, rápido e com aparência profissional."],
  ["04", "Você revisa", "Mostro o resultado e ajustamos os detalhes necessários antes da publicação."],
  ["05", "Seu site vai ao ar", "Depois da aprovação, deixo tudo pronto para você começar a divulgar."],
];

function Index() {
  const contactMessage =
    "Olá, Wendel! Vi seu portfólio e quero conversar sobre um site para o meu negócio.";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#101828] selection:bg-[#111827] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/5 bg-[#f7f8fa]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#111827] text-sm text-white">W</span>
            <span>Wendel<span className="text-slate-400">.</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#projetos" className="transition hover:text-slate-950">Projetos</a>
            <a href="#servicos" className="transition hover:text-slate-950">Serviços</a>
            <a href="#processo" className="transition hover:text-slate-950">Como funciona</a>
          </nav>
          <a
            href={whatsappLink(contactMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <MessageCircle size={16} />
            Falar comigo
          </a>
        </div>
      </header>

      <section id="inicio" className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative z-10 max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Disponível para novos projetos
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Seu negócio merece um site que passe confiança.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Eu sou Wendel, desenvolvedor web. Crio sites profissionais, rápidos e pensados para fazer seu negócio ser levado a sério — sem complicar e sem preço de agência.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(contactMessage)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Quero um site para meu negócio
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Ver projetos
              <ChevronRight size={17} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><Zap size={15} /> Sites rápidos</span>
            <span className="inline-flex items-center gap-2"><MonitorSmartphone size={15} /> 100% responsivos</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={15} /> Atendimento direto</span>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900/5 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-slate-900/5 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {[
            ["1 ano", "de experiência desenvolvendo na web"],
            ["R$ 100–500", "faixa inicial para projetos"],
            ["Direto com o dev", "sem intermediários no projeto"],
          ].map(([value, label]) => (
            <div key={value} className="px-5 py-7 text-center sm:px-8">
              <p className="text-xl font-bold tracking-tight text-slate-950">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Projetos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Sites que começam pela necessidade do negócio.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Os projetos abaixo são conceitos demonstrativos enquanto novos trabalhos entram no portfólio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-900/8 bg-white shadow-[0_12px_40px_-25px_rgba(15,23,42,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,.3)]">
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.tone}`}>
                <div className="absolute inset-6 rounded-2xl border border-white/70 bg-white/75 p-5 shadow-xl shadow-slate-900/5 backdrop-blur">
                  <div className="flex items-center justify-between border-b border-slate-900/8 pb-3">
                    <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-slate-300" /><i className="h-2 w-2 rounded-full bg-slate-200" /><i className="h-2 w-2 rounded-full bg-slate-100" /></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">conceito</span>
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="h-2 w-24 rounded bg-slate-900/15" />
                      <div className="mt-2 h-2 w-36 rounded bg-slate-900/7" />
                      <div className="mt-5 h-7 w-20 rounded-lg bg-slate-900/10" />
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-bold text-white">{project.icon}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                  </div>
                  <span className="mt-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">DEMO</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Abordagem</p>
                  <p className="mt-1.5 text-sm font-medium leading-5 text-slate-700">{project.solution}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium text-slate-400">{project.stack}</span>
                  <a href="#contato" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition group-hover:gap-2.5">
                    Ver conceito <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicos" className="bg-[#111827] text-white">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">O que eu faço</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Um site pensado para o momento do seu negócio.</h2>
            <p className="mt-5 leading-7 text-slate-400">Você não precisa de uma plataforma gigante. Precisa de uma presença digital que explique seu negócio, passe confiança e facilite o próximo contato.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-slate-950"><Icon size={20} /></div>
                  <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{service.text}</p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-300">
                    <li className="flex gap-2"><Check size={14} className="mt-0.5 text-emerald-400" /> Layout personalizado</li>
                    <li className="flex gap-2"><Check size={14} className="mt-0.5 text-emerald-400" /> Responsivo para celular</li>
                    <li className="flex gap-2"><Check size={14} className="mt-0.5 text-emerald-400" /> Botão de contato</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Como funciona</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Sem enrolação. Do primeiro papo ao site no ar.</h2>
            <p className="mt-5 max-w-md leading-7 text-slate-500">O objetivo é deixar o processo simples para você: explicar o que precisa, acompanhar a evolução e aprovar antes de publicar.</p>
          </div>
          <div className="divide-y divide-slate-900/8 rounded-3xl border border-slate-900/8 bg-white px-6">
            {steps.map(([number, title, text]) => (
              <div key={number} className="grid gap-4 py-6 sm:grid-cols-[48px_180px_1fr] sm:items-start">
                <span className="font-mono text-xs font-bold text-slate-400">{number}</span>
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900/5 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Clock3 className="text-slate-700" size={22} />
              <h3 className="mt-4 font-semibold">Prazo combinado</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">O prazo depende do projeto, mas você sabe o que esperar antes de começar.</p>
            </div>
            <div>
              <ShieldCheck className="text-slate-700" size={22} />
              <h3 className="mt-4 font-semibold">Sem surpresa no caminho</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Alinhamos escopo e valor antes do desenvolvimento para evitar mudanças inesperadas.</p>
            </div>
            <div>
              <Code2 className="text-slate-700" size={22} />
              <h3 className="mt-4 font-semibold">Feito para funcionar</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Código organizado, experiência mobile e atenção ao carregamento e SEO básico.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#111827] px-6 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <Sparkles className="mx-auto text-slate-400" size={24} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">Vamos colocar seu negócio na internet?</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Me conte o que você faz e o que espera do site. Eu te respondo pelo WhatsApp e a gente vê juntos o melhor caminho.</p>
            <a
              href={whatsappLink(contactMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
            <p className="mt-5 text-xs text-slate-500">Resposta direta · orçamento conforme o projeto · sem compromisso</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold tracking-tight">Wendel<span className="text-slate-400">.</span></p>
            <p className="mt-1 text-xs text-slate-400">Sites profissionais para negócios que querem crescer.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href={whatsappLink(contactMessage)} target="_blank" rel="noreferrer" className="transition hover:text-slate-950">WhatsApp</a>
            <a href="#inicio" className="transition hover:text-slate-950">Voltar ao topo</a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink(contactMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Wendel pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#111827] text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"
      >
        <MessageCircle size={23} />
      </a>
    </main>
  );
}
