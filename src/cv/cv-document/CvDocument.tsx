import resume from '../../assets/documents/Volodymyr_Yaremchak_CV.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
import {ReactComponent as PreloaderImage} from '../../assets/icons/preloader.svg';
import 'pdfjs-dist/build/pdf.worker.entry';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {useScreenSize} from '../../utils/useScreenSize';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export const CvDocument = (props: CvDocumentPropsType) => {
    const {mode} = props;
    const {width} = useScreenSize();
    const isMobile = width <= 670;
    let pageWidth: number | undefined = 400;

    if (isMobile) {
        if (mode === 'compact') {
            pageWidth = width / 2;
        } else {
            pageWidth = width - 20;
        }
    } else {
        if (mode === 'fullScreen') {
            pageWidth = undefined;
        }
    }

    return (
        <Document file={resume} loading={<PreloaderImage/>}>
            <Page pageNumber={1} width={pageWidth} loading={false}/>
        </Document>
    );
};

type CvDocumentPropsType = {
    mode: 'compact' | 'fullScreen'
};