export const styleSheet = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100vh',
        width: '100vw',
        margin: '0'
    },
    page_content: {
        height: '91%',
        width: '100%',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
        margin: '0',
        zIndex: '-1'
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
        backgroundColor: 'rgba(35,45,57,0.7)'
    }
}