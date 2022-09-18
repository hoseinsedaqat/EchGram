// eslint-disable-next-line
function activityRouter(to:any,from:any,next:any) {
    if(innerWidth > 800){
      return;
    } else{
      next();
    }
}

export default activityRouter;