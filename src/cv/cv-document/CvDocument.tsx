import resume from '../../assets/documents/Volodymyr_Yaremchak_CV.pdf';
import {Document, Page} from 'react-pdf';
import {ReactComponent as PreloaderImage} from '../../assets/icons/preloader.svg';

export const CvDocument = (props: CvDocumentPropsType) => {
    const {mode} = props;

    return (
        <Document file={resume} loading={<PreloaderImage/>}>
            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}
                  height={mode === 'onPage' ? 600 : undefined}/>
        </Document>
    );
};

type CvDocumentPropsType = {
    mode: 'onPage' | 'fullScreen'
};