import connectifyImage from '../assets/images/connectify.webp';
import yourTaskGuruImage from '../assets/images/yourTaskGuru.webp';
import learningCardsImage from '../assets/images/learningCards.webp';
import momentum from '../assets/images/momentum.webp';
import perfetto from '../assets/images/perfetto.webp';
import {SiAndroid} from 'react-icons/si';

export const projects = [
    {
        title: 'Connectify',
        description: 'The social network. You can create your profile, upload your photo, post messages, chat and private messages with other users.',
        image: connectifyImage,
        link: 'https://vovkahorror.github.io/connectify/',
    },
    {
        title: 'Your Task Guru',
        description: 'The purpose of the app is to help organize your goals and objectives. You can register to create and edit your own task lists.',
        image: yourTaskGuruImage,
        link: 'https://vovkahorror.github.io/your-task-guru/',
    },
    {
        title: 'Learning Cards',
        description: 'An application where users can create decks with learning cards and share them. Helps to test your knowledge while studying any topic.',
        image: learningCardsImage,
        link: 'https://vovkahorror.github.io/learning-cards/',
    },
    {
        title: 'Momentum',
        description: 'Achieve your goals faster and more consistently with your own personal dashboard. Featuring to-do lists, weather, daily photos, and encouraging quotes.',
        image: momentum,
        link: 'https://vovkahorror.github.io/momentum/',
    },
    {
        title: 'Perfetto',
        description: 'The application contains comprehensive information about the entire model range and key features of De’Longhi coffee machines. Developed for the De’Longhi Ukraine company and designed to speed up the adaptation of new employees.',
        image: perfetto,
        icon: <SiAndroid/>,
        link: 'https://www.dropbox.com/scl/fi/tspuhw3fc43nx3u374gpl/perfetto-1.2.apk?rlkey=tvocqeayhpz0ckdwyhmavbj7v&st=eul3ui4e&dl=0&raw=1',
    },
];