import multer from "multer";
import {Router} from "express";
import { verifyToken } from "../middleware/isAuthorized";
import { getFollowers, getFollowing, newFollow, removeFollow, unFollow, AddBio, deleteBio, getUser, editProfile } from "../controllers/user";


const storage= multer.memoryStorage();
const upload = multer({storage})
 const UserRoutes= Router();

 UserRoutes.post('/addFollowing',verifyToken,newFollow)
 UserRoutes.post('/unfollow',verifyToken,unFollow)
 UserRoutes.get('/getFollowing',verifyToken, getFollowing)
 UserRoutes.get('/getFollowers',verifyToken, getFollowers)
 UserRoutes.get('/getUser',verifyToken, getUser)
 UserRoutes.post('/removeFollower',verifyToken, removeFollow)
 UserRoutes.post('/addBio',verifyToken, AddBio)
 UserRoutes.delete('/deleteBio',verifyToken, deleteBio)
 UserRoutes.post('/editprofile',upload.single('images'),verifyToken, editProfile)
//  UserRoutes.get('/register', verifyToken)




 export default UserRoutes