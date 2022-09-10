import HoseinImage from '@/assets/Images/User/Hosein_instagram_Picture.jpg';
import HoseinPost from '@/assets/Images/Posts/Hosein_Post.jpg';

import EvanImage from '@/assets/Images/User/Evan_instagram_Picture.jpg';
import EvanPost from '@/assets/Images/Posts/Evan_Post.jpg';

import BradImage from '@/assets/Images/User/Brad_instagram_Picture.jpg';
import BradPost from '@/assets/Images/Posts/Brad_Post.jpg';

import MaxImage from '@/assets/Images/User/Max_instagram_Picture.jpg';
import MaxPost from '@/assets/Images/Posts/Max_Post.jpg';

//eslint-disable-next-line
const postData:{userName: string, userImage: string, userPost: string, userLike: boolean, userUnlike: boolean, userSave: boolean, userUnsave: boolean,postComment:any}[] = [
    {
        userName: 'HoseinSedaqat',
        userImage: HoseinImage,
        userPost:  HoseinPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'RandomGuy_3256',
                cText: 'You Look Beautiful Hosein',
            }
        ],
    },
    {
        userName: 'yyx990803',
        userImage: EvanImage,
        userPost:  EvanPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'RandomGuy_3256',
                cText: 'You Look Beautiful Hosein',
            }
        ],
    },
    {
        userName: 'traversymedia',
        userImage: BradImage,
        userPost:  BradPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'RandomGuy_3256',
                cText: 'You Look Beautiful Hosein',
            }
        ],
    },
    {
        userName: 'academind_real',
        userImage: MaxImage,
        userPost:  MaxPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'RandomGuy_3256',
                cText: 'You Look Beautiful Hosein',
            }
        ],
    },
]


export default postData;