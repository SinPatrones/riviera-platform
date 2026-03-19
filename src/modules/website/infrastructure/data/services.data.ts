import type { ServiceItem } from "../../domain/entities/types";

// ─── Services Data ──────────────────────────────────────────────────────────
// Edit this array to update services displayed on the site.
// Each item shows as a card; clicking it opens a detailed modal.

export const servicesData: ServiceItem[] = [
  {
    id: "asesoria-tributaria",
    title: "Asesoría Tributaria",
    shortDescription:
      "Planificación y cumplimiento tributario integral ante SUNAT, con defensa y representación fiscal.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    details: {
      description:
        "Nuestro servicio de asesoría tributaria ofrece una cobertura integral para el cumplimiento de todas las obligaciones con SUNAT, desde la planificación estratégica hasta la defensa ante fiscalizaciones.",
      sections: [
        {
          title: "Planificación y Declaraciones",
          items: [
            "Planificación tributaria según las actividades de su empresa, seleccionando el régimen más conveniente (Régimen General, MYPE Tributario, Régimen Especial, RUS).",
            "Preparación y presentación de declaraciones: IGV, Impuesto a la Renta (1ª, 2ª, 4ª y 5ª categoría).",
            "Asesoría en el cumplimiento de normativas SUNAT.",
            "Asistencia en elaboración y presentación de libros contables y registros electrónicos.",
            "Asistencia en la emisión de comprobantes electrónicos: facturas, boletas, recibos por honorarios, guías de remisión.",
            "Asesoría en fraccionamientos, refinanciamiento y seguimiento de cronogramas de pago.",
            "Revisión del Buzón Electrónico diariamente.",
          ],
        },
        {
          title: "Defensa y Representación Fiscal",
          items: [
            "Representación ante SUNAT en auditorías, fiscalizaciones y requerimientos.",
            "Asesoría y defensa en procesos administrativos y contenciosos tributarios.",
            "Preparación y presentación de recursos administrativos y apelaciones.",
          ],
        },
        {
          title: "Auditoría Tributaria Preventiva",
          items: [
            "Revisión de la situación tributaria para identificar riesgos por incumplimientos o inconsistencias entre documentación electrónica, registros contables y declaraciones.",
            "Evaluación del cumplimiento tributario y recomendaciones para evitar contingencias.",
          ],
        },
      ],
    },
  },
  {
    id: "asesoria-laboral",
    title: "Asesoría Laboral",
    shortDescription:
      "Cumplimiento normativo laboral, gestión de planillas, contratos y seguridad social para su empresa.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    details: {
      description:
        "Brindamos asesoramiento integral en materia laboral para garantizar el cumplimiento de la legislación vigente, optimizar la gestión del personal y prevenir contingencias legales.",
      sections: [
        {
          title: "Cumplimiento Normativo",
          items: [
            "Asesoramiento sobre legislación laboral vigente.",
            "Inscripción en el REMYPE para micro y pequeñas empresas.",
            "Cumplimiento de obligaciones: Seguro de Vida Ley, SCTR.",
            "Elaboración y revisión de contratos de trabajo (Régimen General y Ley MYPE).",
            "Reglamento Interno de Trabajo para empresas obligadas.",
            "Asesoría en Seguridad y Salud en el Trabajo (SST).",
          ],
        },
        {
          title: "Gestión de Planillas",
          items: [
            "Cálculos de planillas en base a registros de asistencia.",
            "Cálculo de sueldos, vacaciones, gratificaciones y liquidaciones de Beneficios Sociales.",
            "Declaraciones PLAME y AFP NET.",
          ],
        },
      ],
    },
  },
  {
    id: "constitucion-empresas",
    title: "Constitución de Empresas",
    shortDescription:
      "Asesoramiento completo para constituir su empresa: tipo societario, capital y trámites notariales.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    details: {
      description:
        "Acompañamos a emprendedores y empresas en todo el proceso de constitución, desde la elección del tipo societario más adecuado hasta la gestión completa de los trámites ante registros públicos y SUNAT.",
      sections: [
        {
          items: [
            "Asesoramiento legal durante todo el proceso.",
            "Selección del tipo de empresa más conveniente: EIRL, SRL, SAC, S.A.A., S.A.",
            "Asesoría sobre el capital social y la estructura accionaria.",
            "Asesoría sobre la conformación del capital y emisión de valorización de aporte en bienes.",
            "Trámite completo a todo costo (notaría, registros públicos, RUC, autorizaciones municipales).",
          ],
        },
      ],
    },
  },
  {
    id: "administracion-planillas",
    title: "Administración de Planillas",
    shortDescription:
      "Gestión eficiente y conforme a ley de remuneraciones, beneficios sociales y obligaciones laborales.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    details: {
      description:
        "Nuestro servicio de Administración de Planillas (Payroll) gestiona de manera eficiente y conforme a la normativa todos los procesos relacionados con la remuneración del personal.",
      sections: [
        {
          title: "Alcance del Servicio",
          items: [
            "Elaboración y procesamiento mensual de planillas de remuneraciones.",
            "Cálculo de sueldos, horas extras, bonificaciones, comisiones y conceptos remunerativos.",
            "Cálculo y aplicación de descuentos legales y voluntarios.",
            "Determinación de aportes a la seguridad social y sistemas previsionales.",
            "Elaboración de boletas de pago para los trabajadores.",
            "Registro y actualización de información laboral del personal.",
            "Gestión de altas, bajas y modificaciones de trabajadores en planilla.",
            "Elaboración de reportes laborales y contables de remuneraciones.",
            "Apoyo en la preparación de información para auditorías o inspecciones laborales.",
          ],
        },
      ],
      benefits: [
        "Reducción de errores en el cálculo de remuneraciones.",
        "Cumplimiento oportuno de las obligaciones laborales y tributarias.",
        "Optimización del tiempo y recursos administrativos de la empresa.",
        "Mayor control y organización de la información laboral.",
        "Acceso a asesoría especializada en gestión laboral y planillas.",
      ],
    },
  },
  {
    id: "seleccion-personal",
    title: "Selección de Personal",
    shortDescription:
      "Identificación y evaluación del talento humano más adecuado para cada puesto de su organización.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    details: {
      description:
        "Apoyamos a las organizaciones en la identificación, evaluación y contratación del talento humano más adecuado, utilizando metodologías modernas de reclutamiento y evaluación por competencias.",
      sections: [
        {
          title: "Proceso de Selección",
          items: [
            "Levantamiento del perfil del puesto y definición de competencias requeridas.",
            "Diseño y publicación de convocatorias laborales.",
            "Búsqueda y reclutamiento de candidatos a través de diferentes medios y plataformas.",
            "Evaluación curricular y preselección de postulantes.",
            "Aplicación de entrevistas laborales y evaluación de competencias.",
            "Verificación de referencias laborales y experiencia profesional.",
            "Presentación de candidatos finalistas al cliente para la toma de decisión.",
            "Asesoría en el proceso de contratación e incorporación del personal seleccionado.",
          ],
        },
      ],
      benefits: [
        "Acceso a candidatos calificados y previamente evaluados.",
        "Reducción del tiempo y costos asociados al proceso de reclutamiento.",
        "Mayor probabilidad de éxito en la contratación del personal adecuado.",
        "Fortalecimiento del capital humano de la organización.",
        "Acompañamiento profesional durante todo el proceso de selección.",
      ],
    },
  },
  {
    id: "auditoria-contable",
    title: "Auditoría Contable y Financiera",
    shortDescription:
      "Evaluación independiente de la información financiera para fortalecer el control interno.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    details: {
      description:
        "Evaluamos de manera independiente la razonabilidad, integridad y confiabilidad de la información contable y financiera de su organización, identificando riesgos y áreas de mejora.",
      sections: [
        {
          title: "Alcance del Servicio",
          items: [
            "Revisión y análisis de los registros contables de la empresa.",
            "Evaluación de la correcta aplicación de principios y normas contables vigentes.",
            "Verificación de la razonabilidad de los estados financieros.",
            "Evaluación del sistema de control interno en procesos contables y financieros.",
            "Identificación de riesgos financieros e inconsistencias en la información contable.",
            "Revisión del cumplimiento de obligaciones tributarias relacionadas con la contabilidad.",
            "Elaboración de informes de auditoría con conclusiones y recomendaciones.",
            "Propuesta de medidas correctivas y mejoras en los procesos contables.",
          ],
        },
      ],
      benefits: [
        "Mayor confiabilidad y transparencia en la información financiera.",
        "Identificación de riesgos y oportunidades de mejora en la gestión contable.",
        "Fortalecimiento del sistema de control interno de la organización.",
        "Apoyo en la toma de decisiones estratégicas basadas en información verificada.",
        "Mejora en el cumplimiento de normas contables y disposiciones legales.",
      ],
    },
  },
  {
    id: "auditoria-laboral",
    title: "Auditoría Laboral",
    shortDescription:
      "Evaluación del cumplimiento de normativa laboral para prevenir contingencias y sanciones.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    details: {
      description:
        "Evaluamos el grado de cumplimiento de la normativa laboral vigente, revisando procedimientos y prácticas de gestión del personal para identificar contingencias y proponer mejoras.",
      sections: [
        {
          title: "Alcance del Servicio",
          items: [
            "Revisión de contratos de trabajo y su adecuación a la normativa laboral vigente.",
            "Verificación del cumplimiento de las obligaciones laborales del empleador.",
            "Evaluación de la correcta administración de planillas y beneficios sociales.",
            "Revisión del cumplimiento de aportes y contribuciones al sistema de seguridad social.",
            "Evaluación de políticas internas de gestión del personal.",
            "Identificación de posibles contingencias laborales o riesgos legales.",
            "Revisión de documentación laboral exigida por la normativa vigente.",
            "Informe de auditoría con conclusiones y recomendaciones de mejora.",
          ],
        },
      ],
      benefits: [
        "Prevención de sanciones o multas por incumplimiento de normativa laboral.",
        "Identificación temprana de riesgos o contingencias laborales.",
        "Fortalecimiento de la gestión de recursos humanos.",
        "Mejora en el cumplimiento de obligaciones laborales y administrativas.",
        "Mayor seguridad jurídica en la relación entre la empresa y sus trabajadores.",
      ],
    },
  },
  {
    id: "asesoria-juridica",
    title: "Asesoría Jurídica",
    shortDescription:
      "Orientación legal especializada para proteger sus operaciones y garantizar el cumplimiento normativo.",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z",
    details: {
      description:
        "Brindamos orientación legal especializada para que las empresas desarrollen sus actividades dentro del marco normativo vigente, reduciendo riesgos y fortaleciendo la seguridad jurídica de sus operaciones.",
      sections: [
        {
          title: "Alcance del Servicio",
          items: [
            "Orientación legal en materia empresarial y corporativa.",
            "Asesoramiento en la elaboración, revisión y formalización de contratos.",
            "Interpretación y aplicación de normas legales relacionadas con la actividad empresarial.",
            "Asesoría en cumplimiento normativo y prevención de riesgos legales.",
            "Apoyo en la constitución, modificación o reorganización de empresas.",
            "Asesoramiento en temas laborales vinculados con la gestión del personal.",
            "Orientación en procesos administrativos ante entidades públicas.",
            "Elaboración de informes y opiniones legales para la toma de decisiones.",
          ],
        },
      ],
      benefits: [
        "Mayor seguridad jurídica en las operaciones empresariales.",
        "Prevención de conflictos y riesgos legales.",
        "Apoyo especializado para la toma de decisiones estratégicas.",
        "Cumplimiento adecuado de las normas legales vigentes.",
      ],
    },
  },
];
