const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testbook')
    .then(() => {
        console.log('connected');
    })
    .catch(() => { console.log("Database not connected"); })

// before building any db there must be architecture called schema
// here we are creating schema inshort column names
const courseSchema = new mongoose.Schema({
    title: String,
    cType: String,
    noVideos: Number,
    author: String,
    active: Boolean
})

// lets create table i.e. collection
const courseRecord = new mongoose.model("courseRecord", courseSchema);

// create document
// const Reactdata = new courseRecord({
//     title: "React Js",
//     cType: 'Front End',
//     noVideos: 45,
//     author: 'Richa Arora',
//     active: true
// })
// Reactdata.save();

//async await

// const createDocument=async()=>{
//     try{
//         const Vuedata=new courseRecord({
//                 title:"Vue Js",
//                 cType:'Front End',
//                 noVideos:55,
//                 author:'Richa Arora',
//                 active:true
//             })
//             const result=await Vuedata.save();
//             console.log(result);
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument();


// store multiple data
// const createDocument=async()=>{
//     try{
//         const Ajaxdata=new courseRecord({
//                 title:"Ajax Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 author:'Richa Arora',
//                 active:true
//             })

//             const HTMLdata=new courseRecord({
//                 title:"HTML Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 author:'Richa Arora',
//                 active:true
//             })
//             const CSSData=new courseRecord({
//                 title:"CSS",
//                 cType:'Design',
//                 noVideos:25,
//                 author:'Richa Arora',
//                 active:true
//             })

//             const NodeData=new courseRecord({
//                 title:"Node Js",
//                 cType:'Back End',
//                 noVideos:35,
//                 author:'Richa Arora',
//                 active:true
//             })

//             const Expressdata=new courseRecord({
//                 title:"Express Js",
//                 cType:'Backe End',
//                 noVideos:34,
//                 author:'Richa Arora',
//                 active:true
//             })

//             const result=await courseRecord.insertMany([Ajaxdata,HTMLdata,CSSData,NodeData,Expressdata])
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument()

// save record using create method
// const createDocument=async()=>{
//         try{
    
//             const allData=await courseRecord.create([
//                 {
//                     title:"Php Js",
//                     cType:'Front End',
//                     noVideos:25,
//                     author:'Richa Arora',
//                     active:true
//                 },
//                 {
//                     title:"Js",
//                     cType:'Front End',
//                     noVideos:25,
//                     author:'Richa Arora',
//                     active:true
//                 }
//              ] )
    
//                 // const result=await courseRecord.insertMany([Ajaxdata,HTMLdata,CSSData,NodeData,Expressdata])
//         }
//         catch(e){
//             console.log('Error');
//         }
//     }
//     createDocument()
    
//read queries

// const getDocument=async()=>{
//     const result=await courseRecord.find();
//     console.log(result);
// } 
// getDocument()

// in find there is query where as after query there is projection i.e. select
// const getDocument=async()=>{
//     const result1=await courseRecord.find({title:'Ajax Js'});
    // const result2=await courseRecord.find().select({title:1}); //only shows titles and id
    //in above title is record name where 1 means true if 0 not show
//     const result2=await courseRecord.find().select({title:1,_id:0}); //it will show title only
    // console.log(result1);
//     console.log(result2);
// } 
// getDocument()

const getDocument=async()=>{
        // const result=await courseRecord.find({noVideos:{$gt:30}}).select({title:1,_id:0}); //gt -- greater than
        const result=await courseRecord.find({noVideos:{$gt:30}}).select({title:1,_id:0}).sort({title:1}); //sorting
        // const result=await courseRecord.find({noVideos:{$gt:30}}).countDocuments();
        console.log(result);
    } 
    getDocument()

// const getDocument=async()=>{
        // const result=await courseRecord.find().skip(1); // skips first document
        // const result=await courseRecord.find().skip(1).limit(1); // only 2
        // const result=await courseRecord.find().skip(1).limit(3); // 2 3 4 are given
        // const result=await courseRecord.find({title:'react js'}); // not given any document since it is case sensitive
        // const result=await courseRecord.find({title:/react js/i}); // regex ignorecase
        // console.log(result);

        //finding min
    //     const minVideo=await courseRecord.find().sort({noVideos:1}).limit(1);
    //     console.log(minVideo);
    // } 
    // getDocument()


// update queries   

// const updateDocument=async(_id)=>{
//     try{
//         const resut1=await courseRecord.updateOne({_id},{
//             $set:{noVideos:65}
//         })
//         console.log(resut1);
//     }
//     catch(e){
//         console.log(e.error);
//     }
//     }
//     updateDocument('66a7cb3f716f5ce44d20f70d')

    //detele queries
    //Delete a single document by ID using deleteOne
    const deleteDocumentById = async (_id) => {
        try {
            const result = await courseRecord.deleteOne({ _id });
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };
    
    deleteDocumentById('66a7cb3f716f5ce44d20f70d');

// Delete multiple documents using deleteMany
    // const deleteDocuments = async () => {
    //     try {
    //         const result = await courseRecord.deleteMany({ noVideos: { $lt: 30 } }); // delete all documents with noVideos < 30
    //         console.log(result);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    
    // deleteDocuments();
    
    //Delete a document by ID using findByIdAndDelete
    // const findByIdAndDeleteDocument = async (_id) => {
    //     try {
    //         const result = await courseRecord.findByIdAndDelete(_id);
    //         console.log(result);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    
    // findByIdAndDeleteDocument('66a7cb3f716f5ce44d20f70d');
    