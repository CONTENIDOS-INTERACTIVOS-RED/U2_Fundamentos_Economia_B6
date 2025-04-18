<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Interacción entre oferta y demanda'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-6.order-2.bg-color-9
        .titulo-figura.mb-4
          h5 Figura 1.
          span Prospectiva como gestión del cambio y clave de innovación
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
              figure
                img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de Wikipedia  https://es.wikipedia.org/w/index.php?title=Oferta_y_demanda&oldid=165500551
                
      .col-lg-6.order-1.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La oferta y la demanda son los pilares fundamentales que determinan el funcionamiento de los mercados. A través de su interacción, se establecen los precios y las cantidades de bienes y servicios que se intercambian en la economía. El equilibrio entre la oferta y la demanda, es clave para garantizar la estabilidad en los mercados y para evitar fenómenos como el exceso de producción o la escasez de productos (Hernández Pérez & Hernández Pérez, 2014).
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-lg-1
              h5 Tema 1
              p El modelo de oferta y demanda se representa gráficamente mediante dos curvas: la curva de demanda y la curva de oferta. La curva de demanda ilustra la cantidad de un bien o servicio que los consumidores están dispuestos a adquirir a distintos precios. Generalmente, esta curva tiene pendiente negativa, lo que indica que, a medida que el precio de un producto disminuye, la cantidad demandada aumenta, y viceversa (Begg, 2006). Por otro lado, la curva de oferta muestra la cantidad de bienes o servicios que los productores están dispuestos a vender a diferentes niveles de precios. En contraste con la curva de demanda, la curva de oferta suele tener pendiente positiva, lo que significa que, a medida que los precios suben, los productores ofrecen más cantidad del bien en el mercado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-lg-1
              h5 Tema 2
              p El punto en el que ambas curvas se intersectan, se conoce como punto de equilibrio, y representa el precio y la cantidad en los que la cantidad ofrecida es igual a la cantidad demandada (Rodríguez Sánchez, 2015). En este punto, no hay exceso de oferta ni escasez de productos, lo que permite que el mercado funcione de manera eficiente. Sin embargo, si el precio de un bien se encuentra por encima o por debajo del equilibrio, se generan desequilibrios en el mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1
              h5 Tema 3
              p Si el precio está por encima del punto de equilibrio, la cantidad ofrecida supera la cantidad demandada, lo que genera un excedente de oferta. En este caso, los productores pueden acumular inventarios no vendidos, lo que podría llevarlos a reducir los precios para incentivar la demanda y restablecer el equilibrio del mercado. Este fenómeno se observa comúnmente, en industrias como la automotriz o la electrónica, donde una sobreproducción puede generar acumulación de inventarios y necesidad de aplicar descuentos o promociones para vender el exceso de productos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h5 Tema 4
              p Por el contrario, si el precio se encuentra por debajo del punto de equilibrio, la cantidad demandada es mayor que la cantidad ofrecida, generando una escasez de productos. En este caso, los consumidores encuentran dificultades para adquirir los bienes deseados, lo que puede llevar a un aumento en los precios, porque los vendedores aprovechan la alta demanda para ajustar sus precios al alza. Este fenómeno es frecuente en mercados de bienes de primera necesidad o en productos con alta demanda estacional, como ciertos alimentos o dispositivos electrónicos en épocas de lanzamiento.
    
    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En la figura anterior, se muestra un diagrama del modelo de oferta y demanda. La curva de oferta, representada como una pendiente ascendente, indica cómo los productores aumentan la cantidad ofrecida a medida que los precios suben. La curva de demanda, con pendiente descendente, refleja el comportamiento de los consumidores, quienes demandan más unidades cuando los precios son más bajos. Se observa que, en niveles de precios superiores al equilibrio, existe una oferta no vendida, lo que implica que la cantidad producida excede la demanda de los consumidores. En contraste, en niveles de precios inferiores al equilibrio, se genera una demanda insatisfecha, lo que indica que los consumidores desean comprar más unidades de las que los productores están dispuestos a vender.
    
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 Este modelo es una herramienta esencial en el análisis económico, debido a que permite comprender cómo se determinan los precios en el mercado y cómo los cambios en la oferta y la demanda afectan la asignación de recursos. A través de este esquema, se pueden analizar los efectos de factores externos, como cambios en los costos de producción, variaciones en el ingreso de los consumidores o la implementación de políticas gubernamentales.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white La interacción entre la oferta y la demanda es un proceso dinámico que responde a múltiples variables económicas. En los siguientes temas, se explorarán con mayor profundidad, la Ley de la Oferta y la Ley de la Demanda, explicando sus principios fundamentales y los factores que influyen en su comportamiento en los distintos mercados.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] La Ley de la oferta     

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") La oferta representa la cantidad de bienes y servicios que los productores están dispuestos a vender en el mercado a diferentes niveles de precios. Este concepto refleja la disposición de las empresas para fabricar y comercializar productos en función de los costos de producción, las expectativas de rentabilidad y otros factores económicos. En términos generales, la oferta y la cantidad ofrecida dependen directamente del precio, es decir, cuanto mayor sea el precio de un bien, mayor será la cantidad que los productores estarán dispuestos a vender.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.tarjeta.p-3.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El principio clave que rige la oferta es la Ley de la oferta, la cual establece que existe una relación positiva entre el precio de un bien y la cantidad ofrecida del mismo (Domínguez Gonzalo, 2016). Es decir, cuando el precio de un producto aumenta, los productores tienden a incrementar su producción para aprovechar la posibilidad de obtener mayores beneficios. Por el contrario, si el precio del bien disminuye, la cantidad ofrecida se reduce, dado que producir y vender a precios más bajos, puede volverse menos rentable para los fabricantes. 
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.svg", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left").align-content-center 
        p Este comportamiento de los oferentes se debe a la búsqueda de maximización de beneficios, puesto que las empresas ajustan sus niveles de producción con base en la rentabilidad esperada.
        p Diversos factores pueden influir en la oferta de un bien o servicio, modificando la cantidad que los productores están dispuestos a ofrecer incluso sin cambios en el precio del producto. Entre los principales factores que afectan la oferta, se encuentran:
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Los costos de producción") Si los costos de los insumos o materias primas aumentan, fabricar el bien se vuelve más costoso, lo que puede reducir la cantidad ofrecida en el mercado. Por ejemplo, un incremento en el precio del petróleo puede afectar la oferta de productos derivados como plásticos y combustibles, porque los costos de producción aumentan. En contraste, si los costos de producción disminuyen, los productores pueden ofrecer más bienes al mismo precio, lo que amplía la oferta.
          p(numero="2" titulo="Avance tecnológico") La incorporación de nuevas tecnologías en los procesos de producción puede reducir los costos operativos y aumentar la eficiencia, permitiendo que las empresas produzcan más bienes a un menor costo. La automatización y la digitalización han sido ejemplos claros de cómo la innovación tecnológica puede incrementar la oferta en diversos sectores. Por ejemplo, en la industria automotriz, la implementación de robots en las líneas de ensamblaje ha permitido producir vehículos a menor costo y en menor tiempo, lo que ha incrementado la cantidad ofrecida en el mercado.
          p(numero="3" titulo="Expectativas de mercado") Juegan un papel crucial en la oferta. Si los productores anticipan que los precios de sus productos aumentarán en el futuro, pueden optar por reducir la oferta en el presente, para almacenar inventario y venderlo a un precio más alto en el futuro. Este fenómeno es común en mercados como el petrolero, donde los productores pueden retener la producción esperando una subida en los precios internacionales del crudo. Por el contrario, si se espera una reducción de precios en el futuro, los productores pueden aumentar la oferta actual para vender la mayor cantidad posible antes que el precio caiga.
          p(numero="4" titulo="Regulación gubernamental y la política económica") La regulación gubernamental y la política económica pueden influir en la oferta. Los impuestos sobre la producción o la venta de bienes, pueden incrementar los costos y reducir la cantidad ofrecida, mientras que los subsidios gubernamentales pueden incentivar la producción y aumentar la oferta. Un ejemplo de esto es la producción agrícola donde, en muchos países, los gobiernos otorgan subsidios a los productores de ciertos cultivos para garantizar una oferta estable en el mercado y evitar desabastecimientos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El análisis de la oferta es fundamental para comprender el comportamiento de los mercados y las decisiones de los productores. En combinación con la demanda, la oferta determina los precios de los bienes y servicios y establece el equilibrio del mercado. Cuando la oferta supera la demanda, se genera un excedente de productos, lo que puede llevar a una reducción en los precios, para incentivar el consumo. Por el contrario, cuando la demanda es mayor que la oferta, se genera una escasez que impulsa los precios al alza, incentivando a los productores a aumentar su producción para aprovechar la rentabilidad del mercado.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la oferta es un componente esencial en la economía, que refleja la capacidad y disposición de los productores para vender bienes y servicios a diferentes precios. Su comportamiento está influenciado por múltiples factores, como los costos de producción, la tecnología, las expectativas de mercado y la intervención gubernamental. Comprender la oferta y su interacción con la demanda, permite analizar cómo se forman los precios y cómo los mercados responden a los cambios en las condiciones económicas.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] La Ley de la demanda
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color-4
          .col-lg-8.mb-3.mb-lg-0.p-4
            p.mb-0 La demanda es un concepto fundamental en la economía y representa la cantidad de bienes y servicios que los consumidores están dispuestos a adquirir a diferentes niveles de precios en un periodo determinado.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
        .row.align-items-center.bg-color-7
          .col-lg-8.mb-3.mb-lg-0.p-4.order-lg-2
            p.mb-0 Es uno de los principales motores que impulsan el comportamiento de los mercados, dado que refleja las necesidades, deseos y capacidad de compra de los consumidores.
          .col-lg-4.order-lg-1
            figure
              img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
        .row.align-items-center.bg-color-11
          .col-lg-8.mb-3.mb-lg-0.p-4
            p.mb-0 La demanda no solo depende del precio del producto, sino también de una variedad de factores económicos, sociales y psicológicos, que influyen en las decisiones de compra.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in")

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.svg", data-aos="zoom-in")
      .col-lg-10(data-aos="fade-left").align-content-center 
        p El principio básico que rige la demanda es la Ley de la demanda, la cual establece que existe una relación inversa entre el precio de un bien y la cantidad demandada del mismo. Es decir, cuando el precio de un bien o servicio disminuye, la cantidad demandada tiende a aumentar, puesto que los consumidores pueden comprar más unidades a un costo menor. Por el contrario, cuando el precio de un bien aumenta, la cantidad demandada se reduce, dado que los consumidores pueden verse desincentivados a comprarlo o buscar alternativas más económicas.
        p Este comportamiento se explica, en parte, por el efecto sustitución y el efecto ingreso:
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Efecto sustitución" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Efecto sustitución
            p Ocurre cuando los consumidores reemplazan un bien por otro similar más barato en respuesta a un aumento de precio. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Por ejemplo, si el precio del café sube significativamente, algunos consumidores pueden optar por comprar té en su lugar, reduciendo la demanda de café.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Efecto ingreso" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Efecto ingreso
            p Se produce cuando un aumento en el precio de un bien, reduce el poder adquisitivo del consumidor, lo que implica que puede comprar menos cantidad de ese producto, con el mismo ingreso disponible.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
    
    p.mb-4 La demanda de un bien o servicio no solo depende de su precio, sino también de diversos factores que pueden influir en la cantidad que los consumidores están dispuestos a adquirir, como son:
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Ingreso del consumidor") Cuando los ingresos aumentan, las personas tienen mayor capacidad de compra, lo que puede llevar a un incremento en la demanda de bienes y servicios, especialmente aquellos considerados bienes normales, como ropa de marca, automóviles o tecnología avanzada. Sin embargo, también existen bienes inferiores, cuya demanda disminuye cuando los ingresos de los consumidores aumentan. Un ejemplo de esto son los productos de bajo costo, como ciertos alimentos procesados o medios de transporte económicos, que pueden ser reemplazados por alternativas más caras y de mayor calidad, a medida que las personas mejoran su situación financiera.
          p(numero="2" titulo="Precio de los bienes sustitutos y complementarios") Los bienes sustitutos son aquellos que pueden reemplazarse entre sí para satisfacer una misma necesidad. Por ejemplo, la mantequilla y la margarina son bienes sustitutos, por lo que, si el precio de la mantequilla aumenta, es probable que más consumidores opten por comprar margarina, incrementando su demanda. Por el contrario, los bienes complementarios son aquellos que se consumen conjuntamente, como los teléfonos móviles y las tarjetas SIM. Si el precio de los teléfonos inteligentes baja, la demanda de tarjetas SIM y accesorios relacionados, como audífonos o protectores, puede aumentar, porque más personas estarán dispuestas a adquirir un nuevo dispositivo móvil.
          p(numero="3" titulo="Preferencias del consumidor") Juegan un papel esencial en la determinación de la demanda. Factores culturales, modas, tendencias y campañas publicitarias pueden influir en las decisiones de compra de los consumidores y generar variaciones en la demanda de ciertos productos. Por ejemplo, si una celebridad popular recomienda un determinado tipo de ropa o cosmético, es probable que su demanda aumente significativamente. De igual manera, los cambios en la conciencia ambiental han llevado a un crecimiento en la demanda de productos ecológicos y sostenibles, como vehículos eléctricos, envases biodegradables y energías renovables.
          p(numero="4" titulo="Expectativas del consumidor sobre el futuro") La demanda puede verse afectada por las expectativas del consumidor sobre el futuro. Si las personas anticipan que el precio de un bien aumentará en los próximos meses, pueden adelantar sus compras para evitar pagar más en el futuro, lo que incrementa la demanda en el corto plazo. Un ejemplo de esto ocurre en el sector inmobiliario, donde los compradores pueden decidir adquirir una vivienda antes que los precios suban debido a cambios en las tasas de interés o en la regulación del mercado. Por el contrario, si los consumidores esperan una reducción en los precios, es probable que posterguen sus compras, reduciendo la demanda en el presente.
          p(numero="5" titulo="Condiciones macroeconómicas") También inciden en la demanda general de bienes y servicios. Factores como la inflación, el desempleo y la política monetaria pueden influir en el comportamiento del consumidor y modificar sus patrones de compra. En períodos de crisis económica, el desempleo y la incertidumbre financiera, pueden llevar a una disminución de la demanda, debido a que las personas reducen sus gastos y priorizan necesidades básicas sobre bienes y servicios considerados no esenciales. En contraste, durante períodos de crecimiento económico, el consumo tiende a aumentar, lo que impulsa la demanda de una variedad de productos y servicios.
    
    p.mb-4 En conclusión, la demanda es un componente esencial del mercado y está determinada no solo por el precio de los bienes y servicios, sino también por múltiples factores que influyen en las decisiones de compra de los consumidores. 

    .bg-full-width.bg-h85
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.text-white.mt-5.order-lg-2
                p La Ley de la demanda explica la relación inversa entre el precio y la cantidad demandada, mientras que factores como el ingreso del consumidor, la disponibilidad de bienes sustitutos y complementarios, las preferencias del mercado y las expectativas económicas, afectan la forma en que los consumidores eligen qué comprar y cuándo hacerlo. Comprender estos aspectos es clave para analizar el comportamiento de los mercados y anticipar cómo responderán los consumidores ante cambios en las condiciones económicas.

              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
     
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/129500" target="_blank" rel="noopener noreferrer") Téllez Ariza, N. (2009). Dinero & economía: ( ed.). Programa Editorial Universidad del Valle. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/158784" target="_blank" rel="noopener noreferrer") Fraschina, S. (Coord.) & Acevedo, M. (Coord.). (2020). Economía: una introducción: ( ed.). Eudeba. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://espanol.libretexts.org/Educacion_Basica/Economia/02%3A_Estructuras_de_Mercado_y_Comercio/2.10%3A_Fallos_del_mercado" target="_blank" rel="noopener noreferrer") LibreTexts Español. (s.f.). Interacción entre oferta y demanda. LibreTexts Español. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4a4gmtR-8yw" target="_blank" rel="noopener noreferrer") Universidadurjc. (2015, 6 de octubre). Los mercados: oferta y demanda - Juan Carlos Aguado. [Vídeo]. YouTube
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hlTUeHo5oNc" target="_blank" rel="noopener noreferrer") Gajes del Youtuber. (2019, 8 de julio). ¡Aprovecha las OFERTAS! - Leyes de la oferta y la demanda. [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
