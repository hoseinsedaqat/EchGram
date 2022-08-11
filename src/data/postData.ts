import HoseinImage from '@/assets/Images/User/Hosein_instagram_Picture.jpg';
import HoseinPost from '@/assets/Images/Header/NewHoseinSedaqat.jpg';

import EvanImage from '@/assets/Images/User/Evan_instagram_Picture.jpg';
import EvanPost from '@/assets/Images/Posts/Evan_Post.jpg';

import BradImage from '@/assets/Images/User/Brad_instagram_Picture.jpg';
import BradPost from '@/assets/Images/Posts/Brad_Post.jpg';


const postData:{userName: string, userImage: string, userPost: string, userLike: boolean, userUnlike: boolean}[] = [
    {
        userName: 'HoseinSedaqat',
        userImage: HoseinImage,
        userPost:  HoseinPost,
        userLike: true,
        userUnlike: false,
    },
    {
        userName: 'yyx990803',
        userImage: EvanImage,
        userPost:  EvanPost,
        userLike: true,
        userUnlike: false,
    },
    {
        userName: 'traversymedia',
        userImage: BradImage,
        userPost:  BradPost,
        userLike: true,
        userUnlike: false,
    },
]


export default postData;