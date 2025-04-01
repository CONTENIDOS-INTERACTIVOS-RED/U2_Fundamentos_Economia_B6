<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Clases de mercado'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") En economía, los mercados se clasifican en función de la cantidad de oferentes y demandantes, así como del grado de control que estos tienen sobre los precios y las condiciones de intercambio. La estructura del mercado influye en la eficiencia económica, la distribución de los recursos y la capacidad de los consumidores para acceder a bienes y servicios a precios competitivos (Acemoglu, Laibson & List, 2017).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Las principales estructuras de mercado incluyen el monopolio, oligopolio y competencia perfecta, aunque también existen otras formas intermedias como la competencia monopolística. Cada una de estas estructuras presenta características específicas que afectan el comportamiento de los agentes económicos y el desarrollo de las industrias en las que operan.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Monopolio
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1(data-aos="fade-left").align-content-center 
        p El monopolio es una estructura de mercado en la que una única empresa controla la producción y comercialización de un bien o servicio, sin competencia directa. En este escenario, la empresa monopolista tiene el poder de influir en los precios, restringir la oferta y maximizar su beneficio sin la presión de otros competidores. Este fenómeno puede surgir por múltiples razones y, dependiendo del contexto, puede generar tanto beneficios como distorsiones en la economía. 
        p La existencia de monopolios puede derivarse de diversas circunstancias:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Presencia de barreras de entrada
              p Estas impiden el acceso de nuevos competidores. Estas barreras pueden ser de carácter tecnológico, económico, legal o estratégico. Un claro ejemplo se encuentra en sectores que requieren una inversión inicial muy elevada, como la distribución de electricidad o el abastecimiento de agua potable. La necesidad de una infraestructura costosa y la imposibilidad de replicarla fácilmente, impiden la aparición de nuevos oferentes en estos mercados (cue mancera, 2015).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Control exclusivo sobre un recurso esencial
              p Cuando una empresa posee la única fuente de una materia prima fundamental para la producción de un bien, puede establecer condiciones monopólicas en el mercado. Un caso emblemático es el de la empresa de beers, que durante años controló la producción y comercialización de diamantes a nivel mundial, estableciendo precios y limitando la oferta, para mantener su dominio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Promovidos o respaldados por el Estado
              p En algunos casos, los monopolios son promovidos o respaldados por el Estado a través de concesiones, licencias o patentes, que restringen la competencia. Este fenómeno es común en sectores estratégicos como la producción de energía, telecomunicaciones o transporte público. En estos casos, el gobierno puede considerar que la existencia de un monopolio es necesaria para garantizar la estabilidad del servicio y evitar la fragmentación del mercado. Un ejemplo de ello son las compañías estatales que administran redes de electricidad o gas en muchos países, donde la competencia podría generar ineficiencias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Monopolios naturales
              p Estos surgen cuando una empresa se vuelve extremadamente eficiente en la producción de un bien o servicio, eliminando gradualmente a sus competidores mediante ventajas de costos y economías de escala. Esto ocurre en mercados donde los costos fijos son elevados y la producción a gran escala reduce significativamente el costo unitario, haciendo inviable la entrada de nuevos competidores.
    
    p.mb-4 Adicionalmente, el monopolio presenta una serie de características que lo distinguen de otras estructuras de mercado:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Característica 1") En primer lugar, existe un único productor que domina la oferta del bien o servicio, sin competencia directa. Al no haber otros oferentes, la empresa tiene un control absoluto sobre el suministro del producto.
          p(numero="2" titulo="Característica 2") Otra característica fundamental es que no existen sustitutos cercanos. Esto significa que los consumidores no pueden encontrar alternativas viables para reemplazar el producto o servicio del monopolista. Por ejemplo, si una empresa tiene el monopolio del suministro de agua potable en una región, los consumidores no tienen otra opción que adquirir el servicio a la tarifa impuesta por la empresa.
          p(numero="3" titulo="Característica 3") Además, el monopolio posee la capacidad de fijar precios sin que haya presiones competitivas que lo obliguen a reducirlos. Sin embargo, aunque la empresa pueda establecer precios elevados, también debe considerar la elasticidad de la demanda, dado que precios demasiado altos pueden reducir el consumo y disminuir sus ingresos.
          p(numero="4" titulo="Característica 4") Por otro lado, existen altas barreras de entrada que dificultan o impiden la llegada de nuevos competidores al mercado. Estas barreras pueden deberse a regulaciones gubernamentales, altos costos de inversión, patentes exclusivas o ventajas tecnológicas que otorgan a la empresa dominante un acceso privilegiado a recursos claves.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Un caso típico de monopolio se da en sectores de servicios públicos esenciales, como el suministro de electricidad y agua potable. Debido a los altos costos de infraestructura y la imposibilidad de construir múltiples redes de distribución, estas industrias suelen operar bajo condiciones monopólicas. Para evitar abusos, los gobiernos regulan sus tarifas y establecen normativas que garantizan el acceso equitativo a los consumidores.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Otro ejemplo claro se encuentra en el sector farmacéutico, donde algunas empresas poseen patentes exclusivas sobre medicamentos. Estas patentes les otorgan el derecho a ser los únicos fabricantes y comercializadores de un determinado fármaco durante un período de tiempo, permitiéndoles recuperar sus costos de investigación y desarrollo. Sin embargo, esta exclusividad también puede derivar en precios elevados para los consumidores, lo que genera debates sobre la accesibilidad a los medicamentos.

    p.mb-4 Por otra parte, es necesario saber que los monopolios pueden generar diversas consecuencias, tanto positivas como negativas, en la economía y en el bienestar de los consumidores:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Aumentar los precios") Se pueden aumentar los precios debido a la falta de competencia. Al ser el único proveedor del bien o servicio, el monopolista puede establecer tarifas más elevadas que las que existirían en un mercado con múltiples oferentes. Esto puede afectar negativamente el poder adquisitivo de los consumidores y reducir su acceso a bienes esenciales.
          p(numero="2" titulo="Reducir la innovación") El monopolio puede reducir la innovación, puesto que la ausencia de competencia elimina la presión para mejorar productos o desarrollar nuevas tecnologías. En mercados altamente competitivos, las empresas están incentivadas a innovar para diferenciarse y atraer clientes. En cambio, en un monopolio, la empresa dominante no enfrenta este desafío, lo que puede llevar a una menor inversión en investigación y desarrollo.
          p(numero="3" titulo="Ineficiencia en la asignación de recursos") En un mercado competitivo, las empresas buscan optimizar sus procesos productivos para minimizar costos y maximizar beneficios. Sin embargo, en un monopolio, la falta de presión competitiva puede llevar a una asignación ineficiente de los recursos, resultando en menores niveles de producción y mayores costos para la sociedad.
          p(numero="4" titulo="Desigualdades") Por otro lado, la concentración del poder económico en una sola empresa, puede generar desigualdades en la distribución de ingresos y en la toma de decisiones de mercado. Un monopolista con un control absoluto, puede influir en políticas públicas y manipular condiciones de mercado en su beneficio, afectando la equidad del sistema económico.
    
    p.mb-4 Dado que los monopolios pueden generar efectos negativos sobre la economía y la sociedad, muchos gobiernos han desarrollado mecanismos para regular su funcionamiento y limitar su impacto. Conozcamos algunos de estos métodos y estrategias:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/11.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.2%" y="65.5%" numero="+").pst
                h5 Control de precios
                p Uno de los métodos más comunes es el control de precios, aplicado en sectores estratégicos como la energía y el transporte público. En estos casos, el Estado establece tarifas máximas para evitar abusos y garantizar la accesibilidad de los consumidores.
    
              .bg-color-white.box-shadow.p-3(x="17.7%" y="18%" numero="+")
                h5 Desmonopolización
                p Otra estrategia es la desmonopolización, que consiste en dividir grandes empresas en unidades más pequeñas para fomentar la competencia. Un ejemplo de esto fue la fragmentación de AT&T en Estados Unidos en 1984, lo que permitió la entrada de nuevos competidores en el sector de telecomunicaciones.
    
              .bg-color-white.box-shadow.p-3(x="81%" y="17%" numero="+")
                h5 Competencia
                p Los gobiernos pueden fomentar la competencia a través de licitaciones y concesiones, permitiendo que nuevas empresas participen en mercados tradicionalmente monopolizados. Esto se ha visto en industrias como las telecomunicaciones, donde la apertura del mercado ha impulsado la competencia y reducido los costos para los consumidores.
    
              .bg-color-white.box-shadow.p-3(x="92.8%" y="64.8%" numero="+")
                h5 Protección al consumidor
                p Existen organismos de protección al consumidor, que supervisan la calidad del servicio y establecen normativas para evitar prácticas abusivas por parte de los monopolistas. Estas regulaciones buscan equilibrar el poder del mercado y asegurar que los consumidores tengan acceso a productos y servicios en condiciones justas.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Para finalizar, el monopolio es una estructura de mercado en la que una sola empresa domina la producción y comercialización de un bien o servicio sin competencia directa. Aunque en algunos casos los monopolios pueden generar beneficios, como economías de escala y estabilidad en la provisión de servicios básicos, en la mayoría de los escenarios pueden conducir a precios elevados, falta de innovación e ineficiencias en la asignación de recursos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Igualmente, para mitigar sus efectos negativos, muchos países han implementado regulaciones y leyes antimonopolio con el fin de limitar el poder de las empresas dominantes y fomentar la competencia. La intervención estatal es clave en sectores estratégicos para garantizar el acceso equitativo a bienes y servicios esenciales, al tiempo que protege el bienestar de los consumidores y promueve el desarrollo económico.
    
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-0 En un ámbito de globalización y avances tecnológicos, la dinámica de los monopolios sigue evolucionando, con nuevas formas de concentración de mercado en sectores como las plataformas digitales, el comercio electrónico y las telecomunicaciones. Por ello, el estudio del monopolio y su impacto en la economía continúa siendo un tema de gran relevancia en el análisis económico moderno.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Oligopolio
    
    p.mb-4 El oligopolio es una estructura de mercado en la que un pequeño grupo de empresas domina la oferta de un bien o servicio, generando una interdependencia estratégica entre ellas.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Oligopolio
            p.mb-4(data-aos="fade-right") En el PDF <b>Oligopolio</b>, se analizan las principales características de este modelo, incluyendo las barreras de entrada, la competencia entre empresas y las estrategias utilizadas para mantener su posición en el mercado. Además, se estudia su impacto en la fijación de precios, la innovación y el bienestar del consumidor, así como las regulaciones implementadas para evitar prácticas anticompetitivas y fomentar un entorno más equitativo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Oligopolio.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Competencia perfecta
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.svg", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left").align-content-center 
        p La competencia perfecta es un modelo teórico de mercado en el que ningún comprador o vendedor tiene la capacidad de influir en el precio de un bien o servicio. En este tipo de mercado, las fuerzas de la oferta y la demanda determinan el precio de equilibrio, y tanto los consumidores como los productores, participan bajo condiciones de igualdad (Torres López, 2016). Es un escenario en el que se alcanza la máxima eficiencia económica, dado que los recursos se asignan de manera óptima y no existen barreras que limiten la libre competencia.
        p Para ampliar la información, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.text-white.mt-5
                p A pesar de estas limitaciones, el modelo de competencia perfecta sigue siendo una herramienta valiosa para el análisis económico. Permite entender cómo funcionan los mercados en condiciones ideales y cómo las desviaciones de este modelo pueden generar ineficiencias que requieren intervención regulatoria. En última instancia, la competencia perfecta representa un objetivo hacia el cual las economías pueden aspirar para garantizar mercados más justos y eficientes.

              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/43319" target="_blank" rel="noopener noreferrer") Jaén García, M. (2016). Economía industrial: ( ed.). Editorial Universidad de Almería.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/145751" target="_blank" rel="noopener noreferrer") Eggers, F. G. (2018). Economía: ( ed.). Editorial Maipue.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39382" target="_blank" rel="noopener noreferrer") Cue Mancera, A. (2015). Economía internacional: ( ed.). Grupo Editorial Patria.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Estructura_de_mercado" target="_blank" rel="noopener noreferrer") Wikipedia. (s.f.). Estructura de mercado. Wikipedia, La enciclopedia libre.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fOGCJ9vavuU" target="_blank" rel="noopener noreferrer") Profe de Economía. (2018, 18 noviembre). Tipos de mercado 2: competencia perfecta y competencia monopolística [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=INq1sRQ_GSY " target="_blank" rel="noopener noreferrer") Profe de Economía. (2018a, noviembre de 18). Tipos de mercado 1: Criterios de clasificación de mercados. [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
