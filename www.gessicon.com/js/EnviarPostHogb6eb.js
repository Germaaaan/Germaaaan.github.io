class EnviarPostHog {

    idioma = idio_txt;
    nombreAgencia = inmonombre;
    capasPadreAutorizadas = ['.header-menu', '.buscadorRapido', '.buscadorAvanzado', '.modulo-paginacion', '.modulo-mapapropiedades', '.modulo-alerta', '.modulo-valoramostupiso', '.modulo-pie']
    atributoSeccion = 'seccionPostHog';
    claseEvento = '.enviarPostHog';
    atributoEvento = 'nombreEventoPostHog';
    desactivar = true;

    constructor() {
        this.cargarEventos();
        this.throttledProcesarEventos = throttle(this.procesarEvento, 100);
    }


    cargarEventos() {
        let claseEnviarPostHog = this;
        document.body.addEventListener("click", event =>
            this.throttledProcesarEventos(event)
        , true)
    }

    procesarEvento(objAccion) {
        let capasPadreAutorizadas = this.capasPadreAutorizadas.join(',');
        let capaPadreEvento = $(objAccion.target).closest(this.claseEvento);

        if(capaPadreEvento.length == 0) {
            return;
        }

        let $capaPadreEvento = $(capaPadreEvento.get(0));

        let seccion = this.obtenerSeccion($capaPadreEvento)
        let nombreEvento = $capaPadreEvento.attr(this.atributoEvento);

        this.enviar(seccion, nombreEvento);

    }

    obtenerSeccion($capaPadreEvento) {
        let capaSeccion = $capaPadreEvento.closest(`[${this.atributoSeccion}]`);
        return capaSeccion.attr(this.atributoSeccion);
    }

    enviar(section, action)
    {
        if(this.desactivar) {
            return;
        }

        let datos = {
            section: section,
            action: action,
            agency: this.nombreAgencia,
            lang: this.idioma
        };

        posthog.capture('AgencyWebsite', datos);
    }

}