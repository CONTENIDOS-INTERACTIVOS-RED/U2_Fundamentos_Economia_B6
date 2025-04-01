<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Fallos de mercado'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.bg-color-4.justify-content-center
          .col-lg-9.mb-3.mb-lg-0.p-4
            p.mb-0 A pesar que los mercados suelen ser eficientes en la asignación de recursos, existen situaciones en las que fallan en distribuirlos de manera óptima, lo que genera distorsiones en la economía y afecta el bienestar social.
          .col-md-6.col-lg-3
            figure
              img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
        .row.align-items-center.bg-color-7.justify-content-center
          .col-lg-9.mb-3.mb-lg-0.p-4.order-lg-2
            p.mb-0 Estas situaciones, conocidas como fallos de mercado, ocurren cuando las fuerzas de la oferta y la demanda no logran asignar los recursos de manera eficiente, lo que puede derivar en problemas como contaminación ambiental, monopolios, escasez de bienes públicos o desigualdades en el acceso a bienes y servicios (Pérez Pino, 2010).
          .col-md-6.col-lg-3.order-lg-1
            figure
              img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.text-white.mt-5
                p Los fallos de mercado pueden surgir por diversas razones, incluyendo la existencia de externalidades, la presencia de bienes públicos, las imperfecciones en la competencia y la información asimétrica. En estos casos, la intervención del Estado puede ser necesaria para corregir las ineficiencias mediante regulaciones, impuestos, subsidios o políticas que incentiven una distribución más equitativa de los recursos.

              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Externalidades
    
    p.mb-4 Las externalidades representan una de las principales causas de fallos de mercado, ya que surgen cuando una actividad económica genera efectos sobre terceros que no se reflejan en los precios de mercado.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Externalidades
            p.mb-4(data-aos="fade-right") En el PDF <b>Externalidades</b>, se analizan los tipos de externalidades, sus implicaciones en la economía y las estrategias que pueden implementarse para corregirlas. Además, se estudian casos concretos de externalidades positivas y negativas, así como las políticas de intervención estatal, como impuestos, subsidios y regulaciones, que buscan mejorar la asignación eficiente de los recursos y promover el bienestar social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Externalidades.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Bienes públicos
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1(data-aos="fade-left").align-content-center 
        p Los bienes públicos son aquellos que, por su naturaleza, pueden ser utilizados por múltiples personas de manera simultánea sin que su consumo por parte de un individuo afecte la disponibilidad para los demás. Además, no se puede restringir su acceso a quienes no contribuyen a su financiamiento, porque los diferencia de otros bienes económicos. Su provisión es fundamental para el bienestar de la sociedad, porque incluyen servicios esenciales como la seguridad ciudadana, la educación pública, la infraestructura vial y la defensa nacional. 
        p Características:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Su acceso es libre y no excluyente
              p Esto significa que todas las personas pueden beneficiarse de ellos sin necesidad de realizar un pago directo. Un claro ejemplo es la seguridad ciudadana, debido a que el hecho que la policía patrulle una zona, no impide que otras personas se beneficien de la misma protección. De la misma manera, la iluminación pública permite que todas las personas transiten por las calles iluminadas sin que el uso por parte de un individuo limite el acceso de los demás.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Su consumo no es rival
              p Esto significa que el uso que una persona haga del bien, no reduce la cantidad disponible para los demás. Un ejemplo de esto es la emisión de señales de radio o televisión, dado que millones de personas pueden acceder a la transmisión sin que esto afecte la disponibilidad del servicio para otros. A diferencia de un bien privado, como un automóvil o un alimento, donde el consumo por parte de una persona impide que otra lo utilice, los bienes públicos pueden ser compartidos, sin que su valor se vea reducido.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Uno de los principales problemas asociados a los bienes públicos es el fenómeno conocido como el problema del “free rider” o “polizón”. Esto ocurre cuando las personas disfrutan de los beneficios de un bien público sin contribuir a su financiamiento. Dado que nadie puede ser excluido de su uso, algunas personas pueden optar por no pagar impuestos o no contribuir económicamente, confiando en que otros asumirán los costos de su provisión. Este comportamiento puede llevar a una falta de recursos para mantener o expandir estos bienes, afectando su calidad y disponibilidad. Un ejemplo claro de este problema se observa en la infraestructura pública, donde el mantenimiento de carreteras y parques depende de la recaudación fiscal, pero algunas personas buscan evadir impuestos, reduciendo los fondos disponibles para estos servicios (Olivera Novelo, 2015).
        p(data-aos="fade-left") Debido a la falta de incentivos del sector privado para proveer bienes públicos, el Estado asume la responsabilidad de su producción y financiamiento. A través del sistema impositivo, los gobiernos recaudan fondos para garantizar la disponibilidad de estos bienes para toda la población. La intervención del Estado es esencial, puesto que permite que todos los ciudadanos, independientemente de su nivel de ingresos, tengan acceso a servicios básicos como la educación, la salud y la seguridad. Sin esta intervención, muchos bienes públicos no serían provistos de manera eficiente, porque las empresas privadas, al no poder restringir su acceso, no encontrarían rentabilidad en su producción.
        p(data-aos="fade-left") Si bien los bienes públicos son fundamentales para el bienestar social, su provisión enfrenta diversos desafíos:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Financiamiento insuficiente") Uno de los principales problemas es el financiamiento insuficiente, debido a que depende de los ingresos fiscales y, en algunos casos, la evasión de impuestos y la mala gestión de los recursos, reducen la capacidad del Estado para ofrecer estos bienes con calidad y cobertura adecuadas. Además, algunos bienes públicos pueden sufrir problemas de congestión o deterioro, debido a su uso excesivo. Por ejemplo, el acceso libre a parques nacionales o playas puede generar daños ambientales si no se implementan regulaciones adecuadas.
          p(numero="2" titulo="La corrupción y la mala administración") Otro desafío importante en la provisión de bienes públicos, es la corrupción y la mala administración. En muchos países, los fondos destinados a estos bienes pueden ser utilizados de manera ineficiente o desviados, lo que afecta su calidad y disponibilidad. La falta de planificación y supervisión, también puede llevar a la subprovisión de estos bienes, generando desigualdad en su acceso y beneficiando a ciertos sectores más que a otros.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A pesar de estos retos, los bienes públicos juegan un papel clave en el desarrollo económico y social. Sin ellos, el acceso a servicios esenciales estaría limitado solo a quienes puedan pagarlos, aumentando las brechas de desigualdad y afectando la calidad de vida de la población. Para garantizar su provisión eficiente, es fundamental que los gobiernos implementen mecanismos de transparencia y gestión responsable, asegurando que los fondos recaudados a través de impuestos, se utilicen de manera óptima para la provisión de estos bienes.
          

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En el contexto actual, el concepto de bienes públicos ha evolucionado con el desarrollo tecnológico y los cambios en la economía global. Algunos bienes que antes eran considerados públicos, como el acceso a la información y la conectividad digital, ahora presentan características mixtas, debido a que pueden ser gestionados tanto por el sector privado como por el Estado.
        p(data-aos="fade-left") Sin embargo, la necesidad de garantizar su acceso equitativo sigue siendo una prioridad, especialmente en áreas como la educación digital y la infraestructura tecnológica.
        p(data-aos="fade-left") En conclusión, los bienes públicos son esenciales para el funcionamiento de la sociedad, dado que garantizan el acceso equitativo a servicios fundamentales como la seguridad, la educación, la infraestructura y la salud. 


    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.mt-5.order-lg-2
                p Su provisión depende, en gran medida, de la intervención del Estado, dado que el sector privado no tiene incentivos para producirlos de manera eficiente. Sin embargo, su gestión enfrenta desafíos como el financiamiento insuficiente, el problema del <em>free rider</em> y la mala administración de los recursos. 
                p Para garantizar su sostenibilidad, es necesario que los gobiernos adopten políticas de transparencia y eficiencia en la gestión pública, asegurando que estos bienes sigan beneficiando a toda la sociedad sin distinción. 

              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Información asimétrica
    
    p.mb-4 La información asimétrica es un fenómeno económico que afecta la eficiencia de los mercados al generar desigualdades en el acceso a la información entre las partes involucradas en una transacción.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Información asimétrica
            p.mb-4(data-aos="fade-right") En el PDF <b>Información asimétrica</b>, se analizan sus principales implicaciones, como la selección adversa y el riesgo moral, así como las estrategias utilizadas para reducir sus efectos, incluyendo la señalización, la regulación y los mecanismos de supervisión. A través de este contenido, se exploran ejemplos concretos y soluciones aplicadas en diversos sectores, garantizando un mejor entendimiento de cómo la transparencia y el acceso equitativo a la información pueden mejorar el funcionamiento del mercado.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Información asimétrica.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/48230" target="_blank" rel="noopener noreferrer") Godelier, M. (2012). Antropología y economía: ( ed.). B - Editorial Anagrama.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59771" target="_blank" rel="noopener noreferrer") Stiglitz, J. E. & Rosengard, J. K. (2015). La economía del sector público: (4 ed.). Antoni Bosch editor. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/20197/fallas-mercado.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer") Universidad Autónoma del Estado de Hidalgo. (s.f.). Fallas de mercado: externalidades y bienes públicos. Universidad Autónoma del Estado de Hidalgo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=T2VQmGHOz3M" target="_blank" rel="noopener noreferrer") Profe de Economía. (2018a, 23 de enero). Fallos del mercado 2: bienes públicos y externalidades. [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XxTHa-4Sm0E " target="_blank" rel="noopener noreferrer") Profe de Economía. (2018b, 28 de enero). Fallos del mercado 3: Competencia imperfecta. [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué caracteriza a un mercado monopólico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La existencia de múltiples oferentes con poder de mercado.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La presencia de una única empresa que controla la oferta de un bien o servicio.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La libre entrada y salida de competidores',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La fijación de precios por parte del gobierno.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En un monopolio, una sola empresa domina la oferta, estableciendo precios y condiciones de mercado.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué estrategia suelen emplear las empresas en un oligopolio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Fijar precios libremente sin considerar a la competencia.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Coludirse para controlar el mercado y evitar la competencia.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Reducir costos y mejorar la eficiencia sin afectar los precios',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Renunciar a la diferenciación de productos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Algunas empresas en oligopolio pueden coludirse para fijar precios o repartirse el mercado, aunque esto suele ser ilegal.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'Un mercado de competencia perfecta se caracteriza por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Existencia de muchos compradores y vendedores.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Empresas que pueden fijar precios a su conveniencia.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Productos con gran diferenciación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Altas barreras de entrada.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En competencia perfecta, la gran cantidad de oferentes y demandantes impide que una sola empresa fije precios.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Si el precio de un producto baja, ¿qué ocurre con la demanda?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumenta.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Disminuye.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se mantiene igual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Depende del nivel de oferta.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Según la Ley de la Demanda, a menor precio, mayor cantidad demandada.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué es una externalidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Un efecto positivo o negativo de una actividad económica sobre terceros.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Una falla en el sistema de precios de un país.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un tipo de subsidio gubernamental.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La manipulación de precios por parte de los monopolios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Las externalidades pueden beneficiar o perjudicar a terceros sin que estos participen en la transacción.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
