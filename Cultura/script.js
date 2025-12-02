// Gallery images data for each festival
const galleryImages = {
    'carnavales': [
        {
            src: 'Imagen de WhatsApp 2025-08-23 a las 15.14.57_fcd52521.jpg',
            title: 'Comparsas Coloridas',
            description: 'Grupos de bailarines con trajes vibrantes recorren las calles al ritmo de la música caribeña.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Disfraces Tradicionales',
            description: 'Elaborados disfraces que mezclan tradiciones ancestrales con elementos contemporáneos.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Música y Bailes',
            description: 'Presentaciones musicales con calipso, tambores y ritmos típicos del Caribe venezolano.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Carrozas Marinas',
            description: 'Carrozas decoradas con motivos del mar y la cultura pesquera local.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Celebración Comunitaria',
            description: 'Toda la comunidad participa en esta explosión de alegría y color.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Concurso de Disfraces',
            description: 'Competencias que premian la creatividad y originalidad de los participantes.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Gastronomía Festiva',
            description: 'Puestos de comida típica con pescado frito, empanadas y dulces tradicionales.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Niños en Carnaval',
            description: 'Los más pequeños disfrutan con disfraces especiales y actividades adaptadas.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Reina del Carnaval',
            description: 'Coronación de la reina que representará la festividad durante todo el año.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Desfile Nocturno',
            description: 'Las celebraciones continúan por la noche con luces y antorchas.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Tambores Ancestrales',
            description: 'Ritmos africanos que resuenan en las calles del pueblo costero.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Máscaras Artesanales',
            description: 'Máscaras elaboradas por artesanos locales con materiales de la región.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Bailes Populares',
            description: 'Danzas tradicionales que se transmiten de generación en generación.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Quema del Mal Humor',
            description: 'Ritual simbólico que marca el final del carnaval y la renovación de energías.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Alegría Contagiosa',
            description: 'El espíritu festivo se extiende por todo El Morro durante estos días especiales.'
        }
    ],
    'semana-santa': [
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Procesión Solemne',
            description: 'Recorrido religioso por las principales calles del pueblo con imágenes sagradas.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Iglesia Adornada',
            description: 'Decoración especial del templo con flores y elementos litúrgicos.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Via Crucis',
            description: 'Representación del camino de Cristo hacia el Calvario.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Domingo de Ramos',
            description: 'Bendición de palmas y ramas de olivo en el inicio de la Semana Santa.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Jueves Santo',
            description: 'Ceremonia del lavatorio de pies y adoración al Santísimo Sacramento.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Viernes Santo',
            description: 'Conmemoración de la Pasión y Muerte de Cristo con actos solemnes.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Sábado de Gloria',
            description: 'Vigilia Pascual que prepara la celebración de la Resurrección.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Domingo de Pascua',
            description: 'Celebración gozosa de la Resurrección de Cristo.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Altar Mayor',
            description: 'Decoración especial del altar principal durante la Semana Santa.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Coros Religiosos',
            description: 'Cantos gregorianos y música sacra durante las celebraciones.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Nazarenos',
            description: 'Fieles que participan en las procesiones con túnicas tradicionales.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Incienso y Velas',
            description: 'Elementos litúrgicos que acompañan las ceremonias religiosas.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Reflexión Espiritual',
            description: 'Momentos de oración y meditación durante la semana sagrada.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Tradiciones Culinarias',
            description: 'Preparación de platos especiales sin carne durante estos días.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Unión Comunitaria',
            description: 'La comunidad se une en fe y tradición durante la Semana Santa.'
        }
    ],
    'san-ramon': [
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Altar de San Ramón',
            description: 'Altar especialmente decorado para honrar al santo patrono de las embarazadas.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Procesión del Santo',
            description: 'Recorrido solemne con la imagen de San Ramón Nonato por el pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Ofrendas Florales',
            description: 'Flores blancas y amarillas ofrecidas por los devotos del santo.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Novenas Preparatorias',
            description: 'Nueve días de oración previa a la festividad principal.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Mujeres Embarazadas',
            description: 'Futuras madres pidiendo la protección del santo para un parto seguro.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Velas Encendidas',
            description: 'Cirios que iluminan las oraciones dirigidas a San Ramón.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Altares Caseros',
            description: 'Decoraciones familiares en honor al santo en los hogares del pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Misa Solemne',
            description: 'Celebración eucarística especial el día de San Ramón.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Danzas Folklóricas',
            description: 'Presentaciones culturales como parte de la celebración.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Feria Gastronómica',
            description: 'Dulces típicos preparados con coco y papelón de la región.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Estampas del Santo',
            description: 'Imágenes religiosas distribuidas entre los fieles devotos.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Música Sacra',
            description: 'Cantos religiosos que acompañan las ceremonias del santo.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Bendiciones Especiales',
            description: 'Bendiciones para las mujeres embarazadas y sus familias.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Comida Compartida',
            description: 'Familias compartiendo alimentos especiales con la comunidad.'
        },
        {
            src: 'https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg',
            title: 'Tradición Familiar',
            description: 'Celebración que fortalece los lazos familiares y comunitarios.'
        }
    ],
    'virgen-valle': [
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Procesión Marítima',
            description: 'Embarcaciones acompañando la imagen de la Virgen por la costa.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Embarcaciones Adornadas',
            description: 'Barcos decorados con banderas, flores y luces para la procesión.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Imagen de la Virgen',
            description: 'La venerada imagen de la Virgen del Valle, patrona del oriente.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Pescadores Devotos',
            description: 'Marineros y pescadores agradeciendo la protección recibida.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Bendición del Mar',
            description: 'Ceremonia especial de bendición de las aguas marinas.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Congregación en la Playa',
            description: 'Fieles reunidos en la costa para acompañar la procesión.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Plegarias Marineras',
            description: 'Oraciones especiales por la protección de los navegantes.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Misa en la Iglesia',
            description: 'Celebración eucarística solemne tras la procesión marítima.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Música Folklórica',
            description: 'Polos y galerones narrando hazañas marineras y devoción.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Platos Marineros',
            description: 'Pescado fresco y mariscos celebrando los frutos del mar.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Tradición Pesquera',
            description: 'Celebración que honra la cultura marinera del pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Flores en el Mar',
            description: 'Pétalos de flores lanzados al mar como ofrenda a la Virgen.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Navegantes Unidos',
            description: 'Hermandad de pescadores y marineros en devoción común.'
        },
        {
            src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
            title: 'Protectora del Mar',
            description: 'La Virgen del Valle velando por todos los que navegan.'
        },
        {
            src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
            title: 'Fe y Tradición',
            description: 'Celebración que une fe católica y tradiciones marineras.'
        }
    ],
    'dia-muertos': [
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Altar Conmemorativo',
            description: 'Altares familiares decorados para honrar a los seres queridos fallecidos.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Flores en el Cementerio',
            description: 'Claveles y crisantemos adornando las tumbas del camposanto local.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Velas Encendidas',
            description: 'Cirios iluminando el recuerdo de los que partieron.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Limpieza de Tumbas',
            description: 'Familias preparando y decorando las sepulturas de sus seres queridos.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Ofrendas Alimenticias',
            description: 'Comidas favoritas del difunto colocadas como ofrenda.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Reunión Familiar',
            description: 'Familias reunidas en el cementerio compartiendo recuerdos.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Dulce de Leche',
            description: 'Preparación tradicional compartida entre las familias.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Majarete Tradicional',
            description: 'Dulce típico preparado especialmente para esta fecha.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Niños Aprendiendo',
            description: 'Los más pequeños conociendo la historia de sus antepasados.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Vigilia Nocturna',
            description: 'Velada especial en la iglesia durante la noche del 1 de noviembre.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Cantos Gregorianos',
            description: 'Música sacra acompañando las oraciones por los difuntos.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Memoria Familiar',
            description: 'Tradición que mantiene viva la historia de las familias.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Hermandad en el Recuerdo',
            description: 'Comunidad unida en el homenaje a los seres queridos.'
        },
        {
            src: 'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg',
            title: 'Oraciones Comunitarias',
            description: 'Plegarias colectivas por el eterno descanso de las almas.'
        },
        {
            src: 'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg',
            title: 'Tradición Ancestral',
            description: 'Celebración que conecta generaciones en el recuerdo y la fe.'
        }
    ],
    'navidad': [
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Decoraciones Navideñas',
            description: 'Adornos que aprovechan elementos naturales de la costa.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Pesebre Tradicional',
            description: 'Representación del nacimiento con elementos locales del pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Parranda de Aguinaldos',
            description: 'Grupos musicales recorriendo las casas con villancicos venezolanos.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Misa del Gallo',
            description: 'Celebración eucarística de medianoche en Nochebuena.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Cena Navideña',
            description: 'Familias reunidas compartiendo pescado fresco, hallacas y pan de jamón.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Niño Jesús',
            description: 'Procesión con la imagen del Niño Jesús antes de la Misa del Gallo.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Cuatro y Maracas',
            description: 'Instrumentos tradicionales acompañando los aguinaldos navideños.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Dulces Navideños',
            description: 'Quesillo y conservas de coco preparados para la época.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Luces en el Mar',
            description: 'Decoraciones navideñas reflejándose en las aguas costeras.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Obras Teatrales',
            description: 'Representaciones del nacimiento para los niños del pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Concurso de Pesebres',
            description: 'Competencia de nacimientos entre las familias del pueblo.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Reyes Magos',
            description: 'Celebración del 6 de enero con regalos para los niños.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Villancicos Venezolanos',
            description: 'Cantos navideños típicos del país entonados por los parranderos.'
        },
        {
            src: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg',
            title: 'Unión Familiar',
            description: 'La Navidad fortaleciendo los lazos familiares y comunitarios.'
        },
        {
            src: 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg',
            title: 'Espíritu Navideño',
            description: 'Atmósfera única de paz, alegría y esperanza en el pueblo costero.'
        }
    ],
    'fin-ano': [
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Fuegos Artificiales',
            description: 'Espectáculo pirotécnico lanzado desde la costa al llegar el nuevo año.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Celebración en la Playa',
            description: 'Fiesta comunitaria en la arena con vista al mar Caribe.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Baño de Medianoche',
            description: 'Tradición de recibir el año nuevo con los pies en el mar.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Cena de Nochevieja',
            description: 'Familias compartiendo lentejas, uvas y pescado fresco.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Música en Vivo',
            description: 'Presentaciones de salsa, merengue y gaitas zulianas.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Quema del Año Viejo',
            description: 'Ritual de quemar un muñeco que representa lo negativo del año.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Reflejos en el Agua',
            description: 'Fuegos artificiales creando espectáculos visuales en el mar.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Bailes Populares',
            description: 'Danzas que se extienden hasta altas horas de la madrugada.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Rituales de Prosperidad',
            description: 'Tradiciones para atraer buena fortuna en el año nuevo.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Aguas Cálidas',
            description: 'El Caribe recibiendo a los celebrantes con temperaturas tropicales.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Deseos para el Futuro',
            description: 'Momento de expresar esperanzas y metas para el año que comienza.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Renovación Simbólica',
            description: 'El mar como símbolo de purificación y nuevo comienzo.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Comunidad Unida',
            description: 'Todo el pueblo celebrando juntos la llegada del nuevo año.'
        },
        {
            src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
            title: 'Tradiciones Familiares',
            description: 'Rituales que se transmiten de generación en generación.'
        },
        {
            src: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg',
            title: 'Esperanza y Alegría',
            description: 'Sentimientos que llenan los corazones al comenzar un nuevo ciclo.'
        }
    ]
};

// Carousel state management
const carouselStates = {};

// Initialize carousels for each festival
function initializeCarousels() {
    const festivals = Object.keys(galleryImages);
    
    festivals.forEach(festival => {
        carouselStates[festival] = {
            currentIndex: 0,
            autoPlay: true,
            autoPlayInterval: null
        };
        
        createCarousel(festival);
        startAutoPlay(festival);
    });
}

// Create carousel HTML structure
function createCarousel(festival) {
    const carouselTrack = document.getElementById(`carousel-${festival}`);
    const indicators = document.getElementById(`indicators-${festival}`);
    const images = galleryImages[festival];
    
    if (!carouselTrack || !indicators) return;
    
    // Clear existing content
    carouselTrack.innerHTML = '';
    indicators.innerHTML = '';
    
    // Create slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.onclick = () => openLightbox(image.src, image.title, image.description);
        
        slide.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="carousel-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        carouselTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToSlide(festival, index);
        indicators.appendChild(indicator);
    });
    
    // Add auto-play toggle functionality
    const container = carouselTrack.closest('.carousel-container');
    container.onclick = (e) => {
        if (e.target === container || e.target.matches('::after')) {
            toggleAutoPlay(festival);
        }
    };
}

// Move carousel
function moveCarousel(festival, direction) {
    const state = carouselStates[festival];
    const images = galleryImages[festival];
    
    if (!state || !images) return;
    
    // Stop auto-play when user interacts
    stopAutoPlay(festival);
    
    state.currentIndex += direction;
    
    if (state.currentIndex >= images.length) {
        state.currentIndex = 0;
    } else if (state.currentIndex < 0) {
        state.currentIndex = images.length - 1;
    }
    
    updateCarousel(festival);
    
    // Restart auto-play after 5 seconds
    setTimeout(() => startAutoPlay(festival), 5000);
}

// Go to specific slide
function goToSlide(festival, index) {
    const state = carouselStates[festival];
    
    if (!state) return;
    
    stopAutoPlay(festival);
    state.currentIndex = index;
    updateCarousel(festival);
    
    // Restart auto-play after 3 seconds
    setTimeout(() => startAutoPlay(festival), 3000);
}

// Update carousel position and indicators
function updateCarousel(festival) {
    const carouselTrack = document.getElementById(`carousel-${festival}`);
    const indicators = document.getElementById(`indicators-${festival}`);
    const state = carouselStates[festival];
    
    if (!carouselTrack || !indicators || !state) return;
    
    // Update track position
    const translateX = -state.currentIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    const indicatorElements = indicators.querySelectorAll('.indicator');
    indicatorElements.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentIndex);
    });
}

// Auto-play functionality
function startAutoPlay(festival) {
    const state = carouselStates[festival];
    
    if (!state || !state.autoPlay) return;
    
    stopAutoPlay(festival); // Clear any existing interval
    
    state.autoPlayInterval = setInterval(() => {
        moveCarousel(festival, 1);
    }, 4000);
    
    // Add visual indicator
    const container = document.querySelector(`#carousel-${festival}`).closest('.carousel-container');
    container.classList.add('auto-playing');
}

function stopAutoPlay(festival) {
    const state = carouselStates[festival];
    
    if (!state) return;
    
    if (state.autoPlayInterval) {
        clearInterval(state.autoPlayInterval);
        state.autoPlayInterval = null;
    }
    
    // Remove visual indicator
    const container = document.querySelector(`#carousel-${festival}`).closest('.carousel-container');
    container.classList.remove('auto-playing');
}

function toggleAutoPlay(festival) {
    const state = carouselStates[festival];
    
    if (!state) return;
    
    state.autoPlay = !state.autoPlay;
    
    if (state.autoPlay) {
        startAutoPlay(festival);
    } else {
        stopAutoPlay(festival);
    }
}

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Restart auto-play for the current section's carousel
        if (sectionId !== 'inicio') {
            setTimeout(() => {
                if (carouselStates[sectionId]) {
                    startAutoPlay(sectionId);
                }
            }, 500);
        }
    }
}

// Enhanced lightbox functionality
function openLightbox(imageSrc, title = '', description = '') {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    lightboxImg.src = imageSrc;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    
    lightbox.classList.add('active');
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousels
    initializeCarousels();
    
    // Initialize with home section visible
    showSection('inicio');
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Lightbox event listeners
    const lightbox = document.getElementById('lightbox');
    
    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for carousels
    document.addEventListener('keydown', function(e) {
        const activeSection = document.querySelector('.section.active');
        if (!activeSection || activeSection.id === 'inicio') return;
        
        const festival = activeSection.id;
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            moveCarousel(festival, -1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            moveCarousel(festival, 1);
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay(festival);
        }
    });
});

// Mobile menu optimization
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        navMenu.style.flexWrap = 'wrap';
    }
});

// Performance optimization - pause auto-play when page is not visible
document.addEventListener('visibilitychange', function() {
    const festivals = Object.keys(carouselStates);
    
    if (document.hidden) {
        // Pause all auto-play when page is hidden
        festivals.forEach(festival => {
            stopAutoPlay(festival);
        });
    } else {
        // Resume auto-play when page becomes visible
        festivals.forEach(festival => {
            if (carouselStates[festival] && carouselStates[festival].autoPlay) {
                startAutoPlay(festival);
            }
        });
    }
});

// Add parallax effect to headers
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const headers = document.querySelectorAll('.festival-header');
    
    headers.forEach(header => {
        if (header.getBoundingClientRect().top < window.innerHeight) {
            header.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});

// Touch/swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const activeSection = document.querySelector('.section.active');
    if (!activeSection || activeSection.id === 'inicio') return;
    
    const festival = activeSection.id;
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image
        moveCarousel(festival, 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image
        moveCarousel(festival, -1);
    }
}