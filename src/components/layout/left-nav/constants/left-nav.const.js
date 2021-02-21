import { faUser, faUserCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const LEFT_NAV_MENUS = [
    {
        title: 'Mi cuenta',
        links: [
            {
                icon: faUser,
                name: 'Perfil'
            },
            {
                icon: faUserCog,
                name: 'Mi cuenta'
            },
            {
                icon: faClipboard,
                name: 'Historial'
            },
            {
                icon: faComment,
                name: 'Comentarios'
            }
        ]
    },
    {
        title: 'Servicios',
        links: [
            {
                icon: faYoutube,
                name: 'Videos'
            },
            {
                icon: faHeart,
                name: 'Favoritos'
            },
            {
                icon: faBookmark,
                name: 'Articulos'
            },
            {
                icon: faChartLine,
                name: 'Estadisticas'
            },
            {
                icon: faCog,
                name: 'Settings'
            }
        ]
    }
];