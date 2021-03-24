new Vue ({
    el:'#app',
    data: {
        valor:'',

        peliculas:[
            'Acorralado,Rambo',
            'El gran dictador',
            'Mujeres al borde de un ataque de nervios',
            'El ultimo mohicano',
            'Rocky',
            'Indiana Jones, en busca del arca perdida',
            'jumanji',
            'Candilejas',
            'Vertigo',
            'Acordes y desacuerdos',
            'Los pajaros',
            'El exorcista',
            'La momia',
            'minority reports',
            '2001 una odisea en el espacio',
            'Habanna Blues',
            'Batman begins'


            
        ],
        arrayvacio:[],
    },
    methods: {
        busqueda(valor){
            const mibusqueda=this.peliculas.filter(peli => peli.toLowerCase() === valor.toLowerCase())
            this.arrayvacio = mibusqueda;
        }
         
    }

})