function fetchlinkedinProfile(userid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               const profiles={
                1:{name:'john',title:'software engineer'},
                2:{name:'jane',title:'data scientist'},
               };
               const profile=profiles[userid];
               if(profile){
                resolve(profile);
               }else{
                reject('profile not found');
               }
            }, 1000);
        })
}   

async function displayLinkedlnProfile(userid){
    try{
        console.log("fetching profile");
        const profile=await fetchlinkedinProfile(userid);
        console.log("linkedln profile",profile);
        console.log(`name is ${profile.name} and title is ${profile.title}`);
    }
    catch(e){
        console.log(e);
    }
}
displayLinkedlnProfile(1)