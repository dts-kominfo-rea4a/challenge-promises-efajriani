const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
  try{
    const TheaterIXX = await promiseTheaterIXX();
    const TheaterVGC = await promiseTheaterVGC();

    const theater = [...TheaterIXX, ...TheaterVGC];

    let hitungEmosi= 0;

    theater.forEach((nonton)=>{
      if(nonton.hasil === emosi){
        hitungEmosi++;
      } 
    })

    return hitungEmosi;
  }

  

  catch{
    console.log("Terjadi Kesalahan ");
  }
  
};



module.exports = {
  promiseOutput,
};
