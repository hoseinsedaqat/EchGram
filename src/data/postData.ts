import HoseinImage from '@/assets/Images/User/Hosein_instagram_Picture.jpg';
import HoseinPost from '@/assets/Images/Posts/Hosein_Post.jpg';

import EvanImage from '@/assets/Images/User/Evan_instagram_Picture.jpg';
import EvanPost from '@/assets/Images/Posts/Evan_Post.jpg';

import BradImage from '@/assets/Images/User/Brad_instagram_Picture.jpg';
import BradPost from '@/assets/Images/Posts/Brad_Post.jpg';

import MaxImage from '@/assets/Images/User/Max_instagram_Picture.jpg';
import MaxPost from '@/assets/Images/Posts/Max_Post.jpg';

//eslint-disable-next-line
const postData:{userName:string,title:string, userImage:string, userPost:string, userLike:boolean, userUnlike:boolean, userSave:boolean, userUnsave:boolean, postComment:any, likeNumber:number,hourNumber:number}[] = [
    {
        userName: 'HoseinSedaqat',
        userImage: HoseinImage,
        title: 'Shake and Bake',
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
        likeNumber: 36,
        hourNumber: 1
    },
    {
        userName: 'yyx990803',
        userImage: EvanImage,
        title: 'Happy Christmas',
        userPost:  EvanPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'the_guy_from_internet',
                cText: 'Amazing',
            }
        ],
        likeNumber: 48,
        hourNumber: 3
    },
    {
        userName: 'traversymedia',
        userImage: BradImage,
        title: 'cool weekend with my gang',
        userPost:  BradPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'John_doe',
                cText: '❤',
            }
        ],
        likeNumber: 560,
        hourNumber: 7
    },
    {
        userName: 'academind_real',
        userImage: MaxImage,
        title: 'Funny day in Kitchen',
        userPost:  MaxPost,
        userLike: true,
        userUnlike: false,
        userSave: true,
        userUnsave: false,
        postComment: [
            {
                cName: 'Saul_Goodman',
                cText: 'do you need a lawyer ?',
            }
        ],
        likeNumber: 223,
        hourNumber: 20
    },
]


export default postData;