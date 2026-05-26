const articles = [
  {
    id: 1,
    slug: 'understanding-css-clamp',
    date: '2026-05-20',
    en: {
      title: 'Understanding CSS clamp() for Fluid Typography',
      preview: 'CSS clamp() revolutionizes how we approach responsive typography. This mathematical function eliminates the need for countless media queries, providing smooth scaling between defined minimum and maximum values. Learn how to master this powerful CSS feature and transform your designs.',
      sections: [
        {
          title: 'What is CSS clamp()?',
          text: 'The clamp() function in CSS is a mathematical function that takes three parameters: a minimum value, a preferred value, and a maximum value. The browser calculates the ideal value based on the current viewport width and clamps it between the defined minimum and maximum. This creates fluid, responsive designs without a single media query. The syntax is simple: clamp(min, preferred, max). The preferred value is typically expressed using viewport-relative units like vw, allowing the value to scale proportionally with the viewport. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          title: 'Why Use clamp() Instead of Media Queries?',
          text: 'Traditional media queries require developers to define explicit breakpoints where font sizes jump from one value to another. This creates a staircase effect that feels rigid and unnatural. With clamp(), text scales smoothly between boundaries, creating a seamless experience across all device sizes. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
          title: 'Practical Examples and Use Cases',
          text: 'From hero headings to body text, clamp() can handle any typography need. For a typical heading, you might use clamp(2rem, 5vw, 4rem) to scale between 32px and 64px based on viewport width. For body text, clamp(1rem, 2vw + 0.5rem, 1.25rem) ensures readability across devices. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        }
      ]
    },
    es: {
      title: 'Entendiendo CSS clamp() para Tipografía Fluida',
      preview: 'CSS clamp() revoluciona la forma en que abordamos la tipografía responsiva. Esta función matemática elimina la necesidad de innumerables media queries, proporcionando un escalado suave entre valores mínimos y máximos definidos. Aprende a dominar esta potente característica de CSS y transforma tus diseños.',
      sections: [
        {
          title: '¿Qué es CSS clamp()?',
          text: 'La función clamp() en CSS es una función matemática que toma tres parámetros: un valor mínimo, un valor preferido y un valor máximo. El navegador calcula el valor ideal basado en el ancho actual del viewport y lo sujeta entre el mínimo y máximo definidos. Esto crea diseños fluidos y responsivos sin una sola media query. La sintaxis es simple: clamp(min, preferido, max). El valor preferido se expresa típicamente usando unidades relativas al viewport como vw, permitiendo que el valor escale proporcionalmente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: '¿Por Qué Usar clamp() en Lugar de Media Queries?',
          text: 'Las media queries tradicionales requieren que los desarrolladores definan breakpoints explícitos donde los tamaños de fuente saltan de un valor a otro. Esto crea un efecto escalonado que se siente rígido y antinatural. Con clamp(), el texto escala suavemente entre límites, creando una experiencia fluida en todos los tamaños de dispositivo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
          title: 'Ejemplos Prácticos y Casos de Uso',
          text: 'Desde encabezados hero hasta texto de cuerpo, clamp() puede manejar cualquier necesidad tipográfica. Para un encabezado típico, podrías usar clamp(2rem, 5vw, 4rem) para escalar entre 32px y 64px según el ancho del viewport. Para texto de cuerpo, clamp(1rem, 2vw + 0.5rem, 1.25rem) asegura legibilidad en todos los dispositivos. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        }
      ]
    },
    pt: {
      title: 'Entendendo CSS clamp() para Tipografia Fluida',
      preview: 'CSS clamp() revoluciona a forma como abordamos a tipografia responsiva. Esta função matemática elimina a necessidade de inúmeras media queries, proporcionando escalonamento suave entre valores mínimos e máximos definidos. Aprenda a dominar este poderoso recurso CSS e transforme seus designs.',
      sections: [
        {
          title: 'O Que é CSS clamp()?',
          text: 'A função clamp() em CSS é uma função matemática que recebe três parâmetros: um valor mínimo, um valor preferido e um valor máximo. O navegador calcula o valor ideal com base na largura atual da viewport e o fixa entre o mínimo e o máximo definidos. Isso cria designs fluidos e responsivos sem uma única media query. A sintaxe é simples: clamp(min, preferido, max). O valor preferido é tipicamente expresso usando unidades relativas à viewport como vw, permitindo que o valor escale proporcionalmente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Por Que Usar clamp() em Vez de Media Queries?',
          text: 'As media queries tradicionais exigem que os desenvolvedores definam breakpoints explícitos onde os tamanhos de fonte saltam de um valor para outro. Isso cria um efeito escalonado que parece rígido e artificial. Com clamp(), o texto escala suavemente entre limites, criando uma experiência fluida em todos os tamanhos de dispositivo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
          title: 'Exemplos Práticos e Casos de Uso',
          text: 'De cabeçalhos hero a texto de corpo, clamp() pode lidar com qualquer necessidade tipográfica. Para um cabeçalho típico, você pode usar clamp(2rem, 5vw, 4rem) para escalar entre 32px e 64px com base na largura da viewport. Para texto de corpo, clamp(1rem, 2vw + 0.5rem, 1.25rem) garante legibilidade em todos os dispositivos. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'rem-vs-em-units',
    date: '2026-05-15',
    en: {
      title: 'rem vs em: Choosing the Right Relative Unit',
      preview: 'The choice between rem and em units can make or break your design system. While both are relative units, they behave fundamentally differently. Understanding when to use each one is crucial for building scalable, maintainable CSS architectures that respect user preferences and accessibility standards.',
      sections: [
        {
          title: 'The Fundamental Difference',
          text: 'Both rem and em are relative CSS units, but they reference different things. rem stands for "root em" and is always relative to the root element\'s font size, which is typically defined on the html element. In most browsers this defaults to 16px. em, on the other hand, is relative to the font size of the parent element, which means it compounds through nested elements. This compounding behavior is the source of both the power and the danger of em units. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'When to Use rem',
          text: 'rem units excel for defining consistent, predictable sizing across your entire application. Use rem for font sizes, margins, padding, and any spacing that should remain consistent regardless of nesting. Since rem always references the root font size, it prevents the cascading size issues that can plague em-based layouts. This makes your code more predictable and easier to debug. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'When to Use em',
          text: 'em really shines in component-level styling where you want elements to scale proportionally to their container. For example, if you have a button component and you want the icon inside to scale with the button text size, using em for the icon dimensions ensures they always maintain the right proportion. Similarly, em is perfect for media query breakpoints because it scales with the user\'s font size preference. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        }
      ]
    },
    es: {
      title: 'rem vs em: Eligiendo la Unidad Relativa Correcta',
      preview: 'La elección entre unidades rem y em puede hacer o deshacer tu sistema de diseño. Aunque ambas son unidades relativas, se comportan de manera fundamentalmente diferente. Entender cuándo usar cada una es crucial para construir arquitecturas CSS escalables y mantenibles.',
      sections: [
        {
          title: 'La Diferencia Fundamental',
          text: 'Tanto rem como em son unidades CSS relativas, pero hacen referencia a cosas diferentes. rem significa "root em" y siempre es relativo al tamaño de fuente del elemento raíz, típicamente definido en el elemento html. En la mayoría de los navegadores, esto es 16px por defecto. em, por otro lado, es relativo al tamaño de fuente del elemento padre, lo que significa que se acumula a través de elementos anidados. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          title: 'Cuándo Usar rem',
          text: 'Las unidades rem sobresalen para definir tamaños consistentes y predecibles en toda tu aplicación. Usa rem para tamaños de fuente, márgenes, padding y cualquier espaciado que deba permanecer consistente independientemente del anidamiento. Como rem siempre hace referencia al tamaño de fuente raíz, previene los problemas de cascada que pueden afectar a los diseños basados en em. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          title: 'Cuándo Usar em',
          text: 'em realmente brilla en el estilo a nivel de componente donde quieres que los elementos escalen proporcionalmente a su contenedor. Por ejemplo, si tienes un componente de botón y quieres que el icono interior escale con el tamaño del texto del botón, usar em para las dimensiones del icono asegura que siempre mantengan la proporción correcta. Similarmente, em es perfecto para breakpoints de media queries porque escala con la preferencia de tamaño de fuente del usuario.'
        }
      ]
    },
    pt: {
      title: 'rem vs em: Escolhendo a Unidade Relativa Correta',
      preview: 'A escolha entre unidades rem e em pode fazer ou quebrar seu sistema de design. Embora ambas sejam unidades relativas, elas se comportam de maneira fundamentalmente diferente. Entender quando usar cada uma é crucial para construir arquiteturas CSS escaláveis e manteníveis.',
      sections: [
        {
          title: 'A Diferença Fundamental',
          text: 'Tanto rem quanto em são unidades CSS relativas, mas referenciam coisas diferentes. rem significa "root em" e é sempre relativo ao tamanho da fonte do elemento raiz, tipicamente definido no elemento html. Na maioria dos navegadores, isso é 16px por padrão. em, por outro lado, é relativo ao tamanho da fonte do elemento pai, o que significa que se acumula através de elementos aninhados. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Quando Usar rem',
          text: 'Unidades rem se destacam para definir tamanhos consistentes e previsíveis em toda sua aplicação. Use rem para tamanhos de fonte, margens, padding e qualquer espaçamento que deva permanecer consistente independentemente do aninhamento. Como rem sempre referencia o tamanho da fonte raiz, previne os problemas de cascata que podem afetar layouts baseados em em. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          title: 'Quando Usar em',
          text: 'em realmente brilha no estilo em nível de componente onde você quer que os elementos escalem proporcionalmente ao seu contêiner. Por exemplo, se você tem um componente de botão e quer que o ícone dentro escale com o tamanho do texto do botão, usar em para as dimensões do ícone garante que eles sempre mantenham a proporção correta. Similarmente, em é perfeito para breakpoints de media queries porque escala com a preferência de tamanho de fonte do usuário.'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'viewport-units-guide',
    date: '2026-05-10',
    en: {
      title: 'A Complete Guide to Viewport Units: vh, vw, vmin, and vmax',
      preview: 'Viewport units opened up new possibilities in responsive design. From full-screen hero sections to fluid typography, understanding vh, vw, vmin, and vmax is essential for modern CSS. This guide covers everything from basic usage to advanced techniques that will level up your layouts.',
      sections: [
        {
          title: 'The Four Viewport Units Explained',
          text: 'CSS offers four viewport-relative units: vw (viewport width), vh (viewport height), vmin (viewport minimum), and vmax (viewport maximum). 1vw equals 1% of the viewport width, while 1vh equals 1% of the viewport height. vmin takes the smaller of vw or vh, and vmax takes the larger. These units are dynamic and recalculate whenever the viewport resizes, making them incredibly powerful for responsive design. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Common Use Cases and Patterns',
          text: 'Full-screen hero sections are a classic use case for vh: setting height: 100vh creates a section that perfectly fills the screen. For fluid typography, vw is combined with clamp() to create text that scales with viewport width. vmin is excellent for maintaining aspect ratios on elements that should be square, while vmax is useful for creating overlays and modals that must cover the entire viewport. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Pitfalls and Best Practices',
          text: 'Mobile browsers present a unique challenge with viewport units because the address bar appears and disappears, changing the actual viewport height. The new dvh, svh, and lvh units (dynamic, small, and large viewport heights) address this issue. Always test on real mobile devices, and consider using dvh for full-height layouts. Provide fallbacks for older browsers that may not support newer viewport units. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    es: {
      title: 'Guía Completa de Unidades de Viewport: vh, vw, vmin y vmax',
      preview: 'Las unidades de viewport abrieron nuevas posibilidades en el diseño responsivo. Desde secciones hero a pantalla completa hasta tipografía fluida, entender vh, vw, vmin y vmax es esencial para CSS moderno. Esta guía cubre desde uso básico hasta técnicas avanzadas.',
      sections: [
        {
          title: 'Las Cuatro Unidades de Viewport Explicadas',
          text: 'CSS ofrece cuatro unidades relativas al viewport: vw (ancho del viewport), vh (alto del viewport), vmin (mínimo del viewport) y vmax (máximo del viewport). 1vw equivale al 1% del ancho del viewport, mientras que 1vh equivale al 1% de la altura. vmin toma el menor entre vw o vh, y vmax toma el mayor. Estas unidades son dinámicas y se recalculan cada vez que el viewport cambia de tamaño. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Casos de Uso Comunes y Patrones',
          text: 'Las secciones hero a pantalla completa son un caso de uso clásico para vh: establecer height: 100vh crea una sección que llena perfectamente la pantalla. Para tipografía fluida, vw se combina con clamp() para crear texto que escala con el ancho del viewport. vmin es excelente para mantener relaciones de aspecto en elementos cuadrados, mientras que vmax es útil para crear overlays y modales que deben cubrir todo el viewport.'
        },
        {
          title: 'Trampas y Mejores Prácticas',
          text: 'Los navegadores móviles presentan un desafío único con las unidades de viewport porque la barra de direcciones aparece y desaparece, cambiando la altura real del viewport. Las nuevas unidades dvh, svh y lvh (alturas de viewport dinámica, pequeña y grande) abordan este problema. Siempre prueba en dispositivos móviles reales y considera usar dvh para diseños a altura completa. Proporciona fallbacks para navegadores antiguos.'
        }
      ]
    },
    pt: {
      title: 'Guia Completo de Unidades de Viewport: vh, vw, vmin e vmax',
      preview: 'As unidades de viewport abriram novas possibilidades no design responsivo. De seções hero em tela cheia à tipografia fluida, entender vh, vw, vmin e vmax é essencial para CSS moderno. Este guia cobre desde uso básico até técnicas avançadas.',
      sections: [
        {
          title: 'As Quatro Unidades de Viewport Explicadas',
          text: 'CSS oferece quatro unidades relativas à viewport: vw (largura da viewport), vh (altura da viewport), vmin (mínimo da viewport) e vmax (máximo da viewport). 1vw equivale a 1% da largura da viewport, enquanto 1vh equivale a 1% da altura. vmin pega o menor entre vw ou vh, e vmax pega o maior. Essas unidades são dinâmicas e recalculam sempre que a viewport redimensiona. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Casos de Uso Comuns e Padrões',
          text: 'Seções hero em tela cheia são um caso de uso clássico para vh: definir height: 100vh cria uma seção que preenche perfeitamente a tela. Para tipografia fluida, vw é combinado com clamp() para criar texto que escala com a largura da viewport. vmin é excelente para manter proporções em elementos quadrados, enquanto vmax é útil para criar overlays e modais que devem cobrir toda a viewport.'
        },
        {
          title: 'Armadilhas e Melhores Práticas',
          text: 'Navegadores móveis apresentam um desafio único com unidades de viewport porque a barra de endereço aparece e desaparece, alterando a altura real da viewport. As novas unidades dvh, svh e lvh (alturas de viewport dinâmica, pequena e grande) abordam este problema. Sempre teste em dispositivos móveis reais e considere usar dvh para layouts de altura total. Forneça fallbacks para navegadores antigos.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'typography-accessibility',
    date: '2026-05-05',
    en: {
      title: 'Typography and Accessibility: Best Practices for Inclusive Design',
      preview: 'Accessible typography goes beyond just readable fonts. It encompasses contrast ratios, font sizing strategies, line spacing, and text alignment choices that affect millions of users. Discover how to make your text truly inclusive while maintaining beautiful, professional design.',
      sections: [
        {
          title: 'Understanding WCAG Type Requirements',
          text: 'The Web Content Accessibility Guidelines (WCAG) define specific requirements for text accessibility. Normal text must have a contrast ratio of at least 4.5:1 against its background, while large text (18px bold or 24px regular) requires 3:1. Text must be resizable up to 200% without loss of content or functionality. Line height should be at least 1.5 within paragraphs, and paragraph spacing should be at least 1.5 times larger than line spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Choosing Accessible Font Combinations',
          text: 'Not all fonts are created equal when it comes to readability. Sans-serif fonts like Open Sans, Roboto, and Inter are generally more readable on screens. Avoid using decorative or script fonts for body text. Ensure your font stack includes a reliable fallback. Font size should never be smaller than 16px (1rem) for body text. Use relative units like rem and em so users can scale text according to their preferences. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        },
        {
          title: 'Designing for Dyslexia and Visual Impairments',
          text: 'Approximately 10% of the population has dyslexia. Design choices like avoiding justified text, using adequate letter spacing, and avoiding all-caps for long text blocks can dramatically improve readability. Consider providing a dyslexia-friendly mode with specialized fonts like OpenDyslexic. For users with low vision, ensure that zooming your page to 400% does not cause content to overlap or disappear. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    es: {
      title: 'Tipografía y Accesibilidad: Mejores Prácticas para Diseño Inclusivo',
      preview: 'La tipografía accesible va más allá de fuentes legibles. Abarca ratios de contraste, estrategias de tamaño de fuente, espaciado de líneas y elecciones de alineación de texto que afectan a millones de usuarios. Descubre cómo hacer tu texto verdaderamente inclusivo.',
      sections: [
        {
          title: 'Entendiendo los Requisitos WCAG para Texto',
          text: 'Las Pautas de Accesibilidad de Contenido Web (WCAG) definen requisitos específicos para accesibilidad de texto. El texto normal debe tener un ratio de contraste de al menos 4.5:1 contra su fondo, mientras que el texto grande (18px negrita o 24px regular) requiere 3:1. El texto debe ser redimensionable hasta 200% sin pérdida de contenido o funcionalidad. El interlineado debe ser al menos 1.5 dentro de párrafos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Eligiendo Combinaciones de Fuentes Accesibles',
          text: 'No todas las fuentes son iguales en cuanto a legibilidad. Las fuentes sans-serif como Open Sans, Roboto e Inter son generalmente más legibles en pantallas. Evita usar fuentes decorativas o script para texto de cuerpo. Asegúrate de que tu pila de fuentes incluya un fallback confiable. El tamaño de fuente nunca debe ser menor a 16px (1rem) para texto de cuerpo. Usa unidades relativas como rem y em.'
        },
        {
          title: 'Diseñando para Dislexia y Discapacidad Visual',
          text: 'Aproximadamente el 10% de la población tiene dislexia. Decisiones de diseño como evitar texto justificado, usar espaciado de letras adecuado y evitar mayúsculas para bloques largos de texto pueden mejorar dramáticamente la legibilidad. Considera ofrecer un modo amigable para dislexia con fuentes especializadas como OpenDyslexic. Para usuarios con baja visión, asegura que hacer zoom al 400% no cause que el contenido se superponga o desaparezca.'
        }
      ]
    },
    pt: {
      title: 'Tipografia e Acessibilidade: Melhores Práticas para Design Inclusivo',
      preview: 'Tipografia acessível vai além de fontes legíveis. Abrange taxas de contraste, estratégias de dimensionamento de fonte, espaçamento de linhas e escolhas de alinhamento de texto que afetam milhões de usuários. Descubra como tornar seu texto verdadeiramente inclusivo.',
      sections: [
        {
          title: 'Entendendo os Requisitos WCAG para Texto',
          text: 'As Diretrizes de Acessibilidade de Conteúdo Web (WCAG) definem requisitos específicos para acessibilidade de texto. Texto normal deve ter uma taxa de contraste de pelo menos 4.5:1 contra seu fundo, enquanto texto grande (18px negrito ou 24px regular) requer 3:1. O texto deve ser redimensionável até 200% sem perda de conteúdo ou funcionalidade. A altura da linha deve ser pelo menos 1.5 dentro de parágrafos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Escolhendo Combinações de Fontes Acessíveis',
          text: 'Nem todas as fontes são iguais quando se trata de legibilidade. Fontes sans-serif como Open Sans, Roboto e Inter são geralmente mais legíveis em telas. Evite usar fontes decorativas ou script para texto de corpo. Garanta que sua pilha de fontes inclua um fallback confiável. O tamanho da fonte nunca deve ser menor que 16px (1rem) para texto de corpo. Use unidades relativas como rem e em.'
        },
        {
          title: 'Projetando para Dislexia e Deficiências Visuais',
          text: 'Aproximadamente 10% da população tem dislexia. Escolhas de design como evitar texto justificado, usar espaçamento de letras adequado e evitar maiúsculas para blocos longos de texto podem melhorar dramaticamente a legibilidade. Considere fornecer um modo amigável para dislexia com fontes especializadas como OpenDyslexic. Para usuários com baixa visão, garanta que ampliar sua página para 400% não cause sobreposição ou desaparecimento de conteúdo.'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'css-logical-properties',
    date: '2026-04-28',
    en: {
      title: 'CSS Logical Properties: Writing Mode-Agnostic Styles',
      preview: 'As the web becomes increasingly multilingual, supporting different writing modes like right-to-left and vertical text is more important than ever. CSS logical properties provide a powerful abstraction that makes your styles direction-agnostic by default.',
      sections: [
        {
          title: 'From Physical to Logical Properties',
          text: 'Traditional CSS uses physical properties like margin-left, padding-right, and border-top that assume a top-to-bottom, left-to-right writing mode. CSS logical properties replace these with direction-relative alternatives: margin-inline-start, padding-block-end, border-block-start, and so on. "Inline" refers to the text flow direction, and "block" refers to the perpendicular direction. This abstraction means your styles automatically adapt to any writing mode. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Migrating Existing Projects',
          text: 'Converting an existing codebase to logical properties can be done incrementally. Start with the most impactful properties: margin, padding, border, and text alignment. Replace left/right with inline-start/inline-end, and top/bottom with block-start/block-end. Use shorthand like margin-inline and padding-block when both ends share the same value. Tools like postcss-logical can automate much of this conversion. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        },
        {
          title: 'Browser Support and Fallback Strategy',
          text: 'CSS logical properties have excellent browser support across all modern browsers, including Chrome, Firefox, Safari, and Edge. For older browsers, stick with physical properties as fallbacks: declare physical properties first, then override with logical properties. Browsers that understand logical properties will use them, while older browsers will gracefully fall back to physical values. This progressive enhancement approach ensures broad compatibility. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    es: {
      title: 'Propiedades Lógicas CSS: Estilos Agnósticos al Modo de Escritura',
      preview: 'A medida que la web se vuelve cada vez más multilingüe, soportar diferentes modos de escritura como derecha a izquierda y texto vertical es más importante que nunca. Las propiedades lógicas CSS proporcionan una poderosa abstracción que hace tus estilos agnósticos a la dirección.',
      sections: [
        {
          title: 'De Propiedades Físicas a Lógicas',
          text: 'CSS tradicional usa propiedades físicas como margin-left, padding-right y border-top que asumen un modo de escritura de arriba a abajo, izquierda a derecha. Las propiedades lógicas CSS reemplazan estas con alternativas relativas a la dirección: margin-inline-start, padding-block-end, border-block-start, etc. "Inline" se refiere a la dirección del flujo de texto, y "block" a la dirección perpendicular. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Migrando Proyectos Existentes',
          text: 'Convertir un código existente a propiedades lógicas puede hacerse incrementalmente. Comienza con las propiedades de mayor impacto: margin, padding, border y alineación de texto. Reemplaza left/right con inline-start/inline-end, y top/bottom con block-start/block-end. Usa atajos como margin-inline y padding-block cuando ambos extremos comparten el mismo valor. Herramientas como postcss-logical pueden automatizar gran parte de esta conversión.'
        },
        {
          title: 'Soporte de Navegadores y Estrategia de Fallback',
          text: 'Las propiedades lógicas CSS tienen excelente soporte en todos los navegadores modernos, incluyendo Chrome, Firefox, Safari y Edge. Para navegadores antiguos, usa propiedades físicas como fallback: declara propiedades físicas primero, luego sobrescribe con propiedades lógicas. Los navegadores que entienden propiedades lógicas las usarán, mientras que los antiguos usarán los valores físicos. Este enfoque de mejora progresiva asegura amplia compatibilidad.'
        }
      ]
    },
    pt: {
      title: 'Propriedades Lógicas CSS: Estilos Agnósticos ao Modo de Escrita',
      preview: 'À medida que a web se torna cada vez mais multilíngue, suportar diferentes modos de escrita como direita para esquerda e texto vertical é mais importante do que nunca. As propriedades lógicas CSS fornecem uma abstração poderosa que torna seus estilos agnósticos à direção.',
      sections: [
        {
          title: 'De Propriedades Físicas para Lógicas',
          text: 'CSS tradicional usa propriedades físicas como margin-left, padding-right e border-top que assumem um modo de escrita de cima para baixo, esquerda para direita. As propriedades lógicas CSS substituem estas por alternativas relativas à direção: margin-inline-start, padding-block-end, border-block-start, etc. "Inline" refere-se à direção do fluxo de texto, e "block" à direção perpendicular. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Migrando Projetos Existentes',
          text: 'Converter um código existente para propriedades lógicas pode ser feito incrementalmente. Comece com as propriedades de maior impacto: margin, padding, border e alinhamento de texto. Substitua left/right por inline-start/inline-end, e top/bottom por block-start/block-end. Use atalhos como margin-inline e padding-block quando ambas as extremidades compartilham o mesmo valor. Ferramentas como postcss-logical podem automatizar grande parte desta conversão.'
        },
        {
          title: 'Suporte de Navegadores e Estratégia de Fallback',
          text: 'As propriedades lógicas CSS têm excelente suporte em todos os navegadores modernos, incluindo Chrome, Firefox, Safari e Edge. Para navegadores antigos, use propriedades físicas como fallback: declare propriedades físicas primeiro, depois sobrescreva com propriedades lógicas. Navegadores que entendem propriedades lógicas as usarão, enquanto os antigos usarão os valores físicos. Esta abordagem de melhoria progressiva garante ampla compatibilidade.'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'variable-fonts-web',
    date: '2026-04-20',
    en: {
      title: 'Variable Fonts: The Future of Web Typography',
      preview: 'Variable fonts represent a fundamental shift in how we deliver typography on the web. Instead of loading multiple font files for different weights and styles, a single variable font file contains an entire family of variations, dramatically reducing page load while enabling unprecedented creative control.',
      sections: [
        {
          title: 'What Are Variable Fonts?',
          text: 'Variable fonts are an evolution of the OpenType font specification that allows a single font file to contain multiple axes of variation. Common axes include weight (wght), width (wdth), slant (slnt), italic (ital), and optical size (opsz). Font designers can also create custom axes for any property they wish to vary. This means one file can replace five or more traditional font files, significantly reducing HTTP requests and total download size. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'CSS Implementation and Properties',
          text: 'Variable fonts are controlled through the font-variation-settings CSS property or the higher-level font-weight, font-stretch, and font-style properties. For custom axes, font-variation-settings is required. The syntax uses four-character tags: font-variation-settings: "wght" 700, "wdth" 85. You can also use the shorthand font property with variable font axes. Animating between axis values creates smooth typographic transitions previously impossible on the web. Ut enim ad minim veniam.'
        },
        {
          title: 'Performance and Practical Considerations',
          text: 'While variable fonts reduce total file count, the single file can be larger than individual static fonts. Using subset and range features can help optimize delivery. Services like Google Fonts now offer variable versions of many popular typefaces. Always provide static font fallbacks for older browsers. The browser support for variable fonts is excellent across all modern browsers since 2018. Consider using font-display: swap to ensure text remains visible during font loading. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    es: {
      title: 'Fuentes Variables: El Futuro de la Tipografía Web',
      preview: 'Las fuentes variables representan un cambio fundamental en cómo entregamos tipografía en la web. En lugar de cargar múltiples archivos para diferentes pesos y estilos, un solo archivo de fuente variable contiene toda una familia de variaciones, reduciendo drásticamente la carga de página.',
      sections: [
        {
          title: '¿Qué Son las Fuentes Variables?',
          text: 'Las fuentes variables son una evolución de la especificación OpenType que permite que un solo archivo de fuente contenga múltiples ejes de variación. Los ejes comunes incluyen peso (wght), ancho (wdth), inclinación (slnt), itálica (ital) y tamaño óptico (opsz). Los diseñadores de fuentes también pueden crear ejes personalizados. Esto significa que un archivo puede reemplazar cinco o más archivos de fuente tradicionales. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Implementación CSS y Propiedades',
          text: 'Las fuentes variables se controlan a través de la propiedad CSS font-variation-settings o las propiedades de nivel superior font-weight, font-stretch y font-style. Para ejes personalizados, se requiere font-variation-settings. La sintaxis usa etiquetas de cuatro caracteres: font-variation-settings: "wght" 700, "wdth" 85. También puedes usar la propiedad abreviada font con ejes de fuente variable. Animar entre valores de ejes crea transiciones tipográficas suaves.'
        },
        {
          title: 'Rendimiento y Consideraciones Prácticas',
          text: 'Aunque las fuentes variables reducen el número total de archivos, el archivo único puede ser más grande que las fuentes estáticas individuales. Las funciones de subset y range pueden ayudar a optimizar la entrega. Servicios como Google Fonts ahora ofrecen versiones variables de muchas tipografías populares. Siempre proporciona fallbacks de fuentes estáticas para navegadores antiguos. El soporte de navegadores para fuentes variables es excelente en todos los navegadores modernos desde 2018.'
        }
      ]
    },
    pt: {
      title: 'Fontes Variáveis: O Futuro da Tipografia Web',
      preview: 'As fontes variáveis representam uma mudança fundamental em como entregamos tipografia na web. Em vez de carregar múltiplos arquivos para diferentes pesos e estilos, um único arquivo de fonte variável contém uma família inteira de variações, reduzindo drasticamente o carregamento da página.',
      sections: [
        {
          title: 'O Que São Fontes Variáveis?',
          text: 'As fontes variáveis são uma evolução da especificação OpenType que permite que um único arquivo de fonte contenha múltiplos eixos de variação. Eixos comuns incluem peso (wght), largura (wdth), inclinação (slnt), itálico (ital) e tamanho ótico (opsz). Designers de fontes também podem criar eixos personalizados. Isso significa que um arquivo pode substituir cinco ou mais arquivos de fonte tradicionais. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Implementação CSS e Propriedades',
          text: 'As fontes variáveis são controladas através da propriedade CSS font-variation-settings ou das propriedades de nível superior font-weight, font-stretch e font-style. Para eixos personalizados, font-variation-settings é necessário. A sintaxe usa tags de quatro caracteres: font-variation-settings: "wght" 700, "wdth" 85. Você também pode usar a propriedade abreviada font com eixos de fonte variável. Animar entre valores de eixos cria transições tipográficas suaves.'
        },
        {
          title: 'Desempenho e Considerações Práticas',
          text: 'Embora as fontes variáveis reduzam o número total de arquivos, o arquivo único pode ser maior que as fontes estáticas individuais. Recursos de subset e range podem ajudar a otimizar a entrega. Serviços como Google Fonts agora oferecem versões variáveis de muitas tipografias populares. Sempre forneça fallbacks de fontes estáticas para navegadores antigos. O suporte de navegadores para fontes variáveis é excelente em todos os navegadores modernos desde 2018.'
        }
      ]
    }
  }
];

export default articles;
