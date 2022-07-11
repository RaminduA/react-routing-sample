export const styleSheet = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100vh',
        width: '100vw',
        margin: '0'
    },
    nav_bar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'end',
        height: '9%',
        width: '100%',
        margin: '0',
        backgroundColor: 'rgba(250,250,250,0.1)',
        zIndex: '3'
    },
    nav_logo: {
        position: 'absolute',
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: '30px',
        top: '25%',
        left: '8%',
        margin: '0'
    },
    nav_logo_em: {
        textTransform: 'uppercase',
        color: '#ed563b',
        fontStyle: 'normal',
        margin: '0'
    },
    page_content: {
        height: '91%',
        width: '100%',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '3'
    },
    heading_one: {
        textTransform: 'uppercase',
        fontWeight: '800',
        margin: '0 0 25px 0'
    },
    heading_two: {
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: '85px',
        margin: '0'
    },
    heading_two_em: {
        textTransform: 'uppercase',
        fontWeight: '800',
        color: '#ed563b',
        fontStyle: 'normal',
        margin: '0'
    },
    video_container: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        margin: '0'
    },
    bg_video: {
        position: 'relative',
        height: '99.54vh',
        width: '100%',
        objectFit: 'fill',
        margin: '0'
    },
    video_overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100vh',
        width: '100%',
        objectFit: 'fill',
        margin: '0',
        backgroundColor: 'rgba(35,45,57,0.7)',
        zIndex: '2'
    }
}