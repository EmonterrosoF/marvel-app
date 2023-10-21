import { Accordion, AccordionItem } from "@nextui-org/react";
import { JavascriptIcon } from "../components/icons/JavascriptIcon";
import { TypescriptIcon } from "../components/icons/TypescriptIcon";
import { HtmlIcon } from "../components/icons/HtmlIcon";
import { CssIcon } from "../components/icons/CssIcon";
import { ReactIcon } from "../components/icons/ReactIcon";
import { TailwindIcon } from "../components/icons/TailwindIcon";
import { ReactRouter } from "../components/icons/ReactRouter";
import { ReactQuery } from "../components/icons/ReactQuery";
import { NextUi } from "../components/icons/NextUi";
import { FramerMotion } from "../components/icons/FramerMotion";
import { Participantes } from "../components/Participantes";

const itemClasses = {
  base: "py-0 w-full",
  title: "font-normal text-medium",
  trigger:
    "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
  indicator: "text-medium",
  content: "text-small px-2",
};

// Lenguajes:
//     Javascript
//     Typescript
//     Html
//     Css

// Framework de javascript:
//     React js
// Framework de css:
//     Tailwind css

// Librerias:
//     React router DOM
//     React query
//     Next UI
//     FrameMotion

const tecnologies = [
  {
    title: "JavaScript",
    subtitle: "Lenguaje de Programación",
    description:
      "JavaScript es un lenguaje de programación de alto nivel, interpretado y multiplataforma, comúnmente utilizado en el desarrollo web para crear contenido interactivo. Es dinámico, basado en prototipos y esencial para manipular HTML y CSS. Además, es conocido por su capacidad para manejar tareas asíncronas y cuenta con un amplio soporte de bibliotecas y frameworks que facilitan el desarrollo de aplicaciones web complejas.",
    icon: <JavascriptIcon />,
  },
  {
    title: "Typescript",
    subtitle: "Lenguaje de Programación",
    description:
      "TypeScript es un lenguaje de programación de alto nivel y de tipado estático que amplía las capacidades de JavaScript al agregar tipos de datos estáticos opcionales. Está diseñado para el desarrollo de aplicaciones a gran escala y facilita la detección temprana de errores, lo que ayuda a los desarrolladores a escribir código más robusto y mantenible. TypeScript se compila en JavaScript estándar y es compatible con la sintaxis y la semántica de JavaScript, lo que lo convierte en una extensión natural del desarrollo web basado en JavaScript. Además, es altamente escalable y se integra fácilmente con proyectos existentes de JavaScript.",
    icon: <TypescriptIcon />,
  },
  {
    title: "Html",
    subtitle: "Lenguaje de Programación",
    description:
      "HTML es un lenguaje de marcado que define la estructura y el contenido de una página web. Utiliza etiquetas para marcar diferentes elementos dentro del documento, como encabezados, párrafos, imágenes, enlaces y otros elementos. Es fundamental para la creación de contenido web, ya que proporciona la base sobre la cual se construye la apariencia y el funcionamiento de una página. HTML trabaja en conjunto con CSS (Cascading Style Sheets) y JavaScript para lograr un diseño atractivo y una funcionalidad interactiva en la web.",
    icon: <HtmlIcon />,
  },
  {
    title: "Css",
    subtitle: "Lenguaje de Hoja de Estilos",
    description:
      "CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para definir la presentación y el aspecto visual de documentos escritos en HTML y XML. Aquí tienes una descripción concisa de CSS: \n CSS es un componente esencial en el desarrollo web, ya que permite a los desarrolladores controlar la presentación de un sitio web, incluyendo el diseño, los colores, las fuentes y otros aspectos visuales. Proporciona un medio para separar el contenido de la presentación, lo que permite una mayor flexibilidad y facilidad de mantenimiento en el diseño de un sitio web. Al utilizar reglas y selectores, los desarrolladores pueden aplicar estilos específicos a elementos individuales o conjuntos de elementos en una página web. CSS se utiliza junto con HTML y a menudo con JavaScript para crear páginas web visualmente atractivas y receptivas.",
    icon: <CssIcon />,
  },
  {
    title: "React js",
    subtitle: "Framework de JavaScript",
    description:
      "React.js, comúnmente conocido como React, es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y de una sola página. Aquí tienes una descripción concisa de React.js: React.js es ampliamente reconocido por su eficiencia y rendimiento en la construcción de aplicaciones web. Utiliza un enfoque basado en componentes que permite a los desarrolladores dividir la interfaz de usuario en piezas reutilizables y fáciles de mantener. React utiliza JSX (JavaScript XML) para mezclar HTML con JavaScript, lo que facilita la creación de componentes de interfaz de usuario dinámicos. Además, su enfoque de representar el DOM virtualmente y actualizar selectivamente los componentes afectados lo convierte en una opción popular para aplicaciones web de alta velocidad y rendimiento. React también se beneficia de una comunidad activa y de una amplia gama de herramientas y bibliotecas complementarias, lo que lo convierte en una opción popular para el desarrollo de aplicaciones web modernas y dinámicas.",
    icon: <ReactIcon />,
  },
  {
    title: "Tailwind css",
    subtitle: "Framework de CSS",
    description:
      "Tailwind CSS es un framework de CSS de utilidad de código abierto que simplifica el diseño y la creación de interfaces de usuario personalizadas. Aquí tienes una descripción concisa de Tailwind CSS: Tailwind CSS se centra en la creación de interfaces de usuario altamente personalizadas mediante el uso de clases de utilidad predefinidas. A diferencia de otros frameworks de CSS, que se centran en componentes preestablecidos, Tailwind CSS proporciona clases CSS de bajo nivel que pueden aplicarse directamente a los elementos HTML. Esto permite a los desarrolladores diseñar y personalizar rápidamente el aspecto de sus aplicaciones sin la necesidad de escribir CSS personalizado. Tailwind CSS ofrece una amplia gama de clases de utilidad, como clases de espaciado, tipografía, colores y diseños de rejilla, lo que facilita la creación de diseños complejos y receptivos. Con su enfoque orientado a componentes y su flexibilidad para personalizar el diseño, Tailwind CSS se ha convertido en una herramienta popular entre los desarrolladores para crear interfaces de usuario atractivas y bien diseñadas.",
    icon: <TailwindIcon />,
  },
  {
    title: "React router DOM",
    subtitle: "Libreria de React js",
    description:
      "React Router Dom es una biblioteca de enrutamiento popular para aplicaciones web de React que permite la navegación entre diferentes componentes de la interfaz de usuario en función de la URL. Aquí tienes una descripción concisa de React Router Dom: React Router Dom es una extensión de React Router, diseñada específicamente para aplicaciones web que utilizan el DOM (Modelo de Objetos de Documento) para representar la estructura de sus páginas web. Proporciona un enrutamiento declarativo que permite a los desarrolladores definir rutas en sus aplicaciones web y mapear esas rutas a componentes específicos. React Router Dom ofrece una serie de componentes, como BrowserRouter, Route, Switch y Link, que facilitan la implementación de enrutamiento en una aplicación React. Además, admite la navegación entre diferentes vistas y la gestión del historial del navegador, lo que permite a los usuarios moverse hacia adelante y hacia atrás a través de las páginas visitadas previamente. Con su capacidad para mantener la sincronización entre la URL y los componentes de la interfaz de usuario, React Router Dom es una opción popular para el enrutamiento de aplicaciones web complejas de React.",
    icon: <ReactRouter />,
  },
  {
    title: "React query",
    subtitle: "Libreria de React js",
    description:
      "React Query es una biblioteca de administración de estados en React que proporciona una solución para la gestión de la caché y la obtención de datos de manera eficiente. Aquí tienes una descripción concisa de React Query: React Query simplifica la obtención y gestión de datos al proporcionar un mecanismo para realizar consultas a API de manera sencilla y eficiente. Esta biblioteca está diseñada para aplicaciones de React que necesitan manejar datos complejos y dinámicos. React Query facilita la realización de solicitudes a servidores, gestiona la caché de los resultados y proporciona una forma sencilla de mantener actualizados los datos mostrados en la interfaz de usuario. Además, React Query ofrece funcionalidades como el refresco automático de datos, la invalidación de caché y la gestión de errores, lo que simplifica el manejo de datos en tiempo real y la sincronización con el servidor. Con su enfoque en la simplicidad y la eficiencia, React Query se ha convertido en una opción popular para la gestión de estados y datos en aplicaciones web de React.",
    icon: <ReactQuery />,
  },
  {
    title: "Next UI",
    subtitle: "Libreria de React js",
    description:
      "Next UI se refiere a la biblioteca de componentes y estilos predefinidos disponible en Next.js, un framework de React para el desarrollo de aplicaciones web. Sin embargo, si te refieres a la librería 'Chakra UI' en lugar de 'Next UI', puedo darte una breve descripción. Chakra UI es una biblioteca de componentes de interfaz de usuario simple y modular para React que facilita la creación de interfaces de usuario atractivas y receptivas. Aquí tienes una descripción concisa de Chakra UI: Chakra UI ofrece una amplia gama de componentes listos para usar que permiten a los desarrolladores construir rápidamente interfaces de usuario elegantes y consistentes. La biblioteca se centra en la accesibilidad y la usabilidad, proporcionando componentes personalizables que se adaptan a diferentes estilos y diseños de aplicaciones. Chakra UI también ofrece soporte para temas y estilos globales, lo que facilita la personalización de la apariencia de los componentes para que coincidan con la identidad visual de la aplicación. Con su enfoque en la facilidad de uso y la flexibilidad de diseño, Chakra UI se ha convertido en una opción popular para desarrolladores que desean crear interfaces de usuario atractivas y de alto rendimiento en aplicaciones web basadas en React.",
    icon: <NextUi />,
  },
  {
    title: "FrameMotion",
    subtitle: "Libreria de React js",
    description:
      "ramer Motion es una biblioteca de animación de alto rendimiento y fácil de usar para React y React Native. Aquí tienes una descripción concisa de Framer Motion: Framer Motion se destaca por su capacidad para crear animaciones fluidas y interactivas en aplicaciones web y móviles. Permite a los desarrolladores agregar fácilmente efectos visuales atractivos y sofisticados a sus aplicaciones, lo que mejora la experiencia del usuario. La biblioteca se basa en componentes simples y una sintaxis clara, lo que facilita la implementación de animaciones complejas con poco esfuerzo. Framer Motion también admite una variedad de efectos, como animaciones de transición, movimientos de página y animaciones de respuesta a eventos del usuario. Con su enfoque en el rendimiento y la facilidad de uso, Framer Motion es una opción popular para desarrolladores que buscan mejorar la apariencia y la interactividad de sus aplicaciones React y React Native.",
    icon: <FramerMotion />,
  },
];
export const About = () => {
  return (
    <div>
      <section className="flex justify-center flex-col items-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text py-10">
          Tecnologias
        </h1>
        <div className=" w-full">
          {tecnologies.map((tecnology) => (
            <Accordion
              showDivider={false}
              className="p-2 flex flex-col gap-1 "
              variant="shadow"
              itemClasses={itemClasses}
            >
              <AccordionItem
                key="1"
                aria-label={tecnology.title}
                // startContent={<MonitorMobileIcon className="text-primary" />}
                startContent={
                  <span className="dark:text-white text-xs">
                    {tecnology.icon}
                  </span>
                }
                subtitle={
                  <p className="flex text-primary ml-1 ">
                    {tecnology.subtitle}
                  </p>
                }
                title={tecnology.title}
              >
                <p className="dark:text-slate-400">{tecnology.description}</p>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <Participantes />
      </section>
    </div>
  );
};
