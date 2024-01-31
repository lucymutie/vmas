
// first finished
const vlmapp = document.querySelector('.leftbar');


document.querySelector('.img').addEventListener('click', ()=>{
    vlmapp.style.display='block';
})
document.querySelector('.close').addEventListener('click', ()=>{
    vlmapp.style.display='none';
});

// second
const vlm = document.querySelector('.id');
const vlmapps = document.querySelector('.inputs')
const vlmappz = document.querySelector('#vlmz')
vlm.onclick = ()=>{
    vlmapps.style.display = 'block';
    vlm.style.display = 'none';
    vlmappz.style.display = 'block';
}
vlmappz.onclick = ()=>{
    vlmapps.style.display = 'none';
    vlm.style.display = 'block';
    vlmappz.style.display = 'none';
}

// third
const vlmap = document.querySelector('.tab .active')
const vlmst = document.querySelector('.tab #storage')
const vlmfq = document.querySelector('.tab #faqs')
const vlmfect = document.querySelector('.tab #fect')
const vlmtar1 = document.querySelector('.app #tar1')
const vlmtar2 = document.querySelector('.app #tar2')
const vlmtar3 = document.querySelector('.app #tar3')
const vlmtar4 = document.querySelector('.app #tar4')

const device = document.getElementById('device');
const vlmdev = document.querySelector('.dev');
const vlmhead = document.querySelector('.vmaheader');
const vlmbar = document.querySelector('.leftbar');
device.onclick = ()=>{
    vlmdev.style.display = 'block';
    vlmhead.style.display = 'none';
    vlmbar.style.display = 'none';
}

vlmap.onclick = ()=>{
    vlmtar1.style.display = "block";
    vlmtar2.style.display = "none";
    vlmtar3.style.display = "none";
    vlmtar4.style.display = "none";
}
vlmst.onclick = ()=>{
    vlmtar2.style.display = "block";
    vlmtar1.style.display = "none";
    vlmtar3.style.display = "none";
    vlmtar4.style.display = "none";
}
vlmfq.onclick = ()=>{
    vlmtar3.style.display = "block";
    vlmtar2.style.display = "none";
    vlmtar1.style.display = "none";
    vlmtar4.style.display = "none";
}
vlmfect.onclick = ()=>{
    vlmtar4.style.display = "block";
    vlmtar2.style.display = "none";
    vlmtar3.style.display = "none";
    vlmtar1.style.display = "none";
}
// img

//declearing html elements

const imgDiv = document.querySelector('.logoacc');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a photo to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});