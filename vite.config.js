import vituum from 'vituum';
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from '@vituum/vite-plugin-handlebars'


export default {
    plugins: [
        vituum({
            imports: {
                filenamePattern: {
                    '+.css': [],
                    '+.scss': 'src/styles'
                }
            }
        }),
        handlebars({
            root: './src'
        }),
        htmlPurge(),

    ]
}
