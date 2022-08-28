let day=document.querySelector('.day-47')
for(let i=0;i<400;i++){
    let box=document.createElement('input')
    box.setAttribute('type','checkbox')
    box.setAttribute('id','box'+i)
    let label=document.createElement('label')
        label.setAttribute('for','box'+i)
        label.setAttribute('class','screen')
        label.setAttribute('id','box'+i)
        day.appendChild(box)
        day.appendChild(label)
    // if (i === 45 || i === 46 || i === 55 || i === 56 || i === 64 || i === 65 || i === 66 || i === 67 || i === 74 || i === 75 || i === 76 || i === 77 ||
    //     i === 83 || i === 84 || i === 85 || i === 86 || i === 87 || i === 88 || i === 93 || i === 94 || i === 95 || i === 96 || i === 97 || i === 98 ||
    //     i === 102 || i === 103 || i === 104 || i === 105 || i === 106 || i === 107 || i === 108 || i === 109 || i === 112 || i === 113 || i === 114 ||
    //     i === 115 || i === 116 || i === 117 || i === 118 || i === 119 || i >= 121 && i <= 160 || i >= 162 && i <= 179 || i >= 183 && i <= 198 ||
    //     i >= 204 && i <= 217 || i >= 225 && i <= 236 || i >= 246 && i <= 255 || i >= 267 && i <= 274 || i >= 288 && i <= 293 || i >= 309 && i <= 312 ||
    //     i === 330 || i === 331)
    if(i===50 || i===69 || i===70 || i===71 || i===88 || i===89 || i===90
        || i===91|| i===92 || i===108 || i===109|| i===111|| i===112 || i===110){
            box.setAttribute('checked','checked')
            label.style.backgroundColor='red'
    }
    if(i===128||i===129||i===130||i===131||i===132 || i===147 || i==148
        || i===150 || i==152|| i===153 || i===167 || i==168
        || i===170 || i==172|| i===173||i===169||i===171 
         || i==188|| i===189 || i==190|| i===191||i===192){
        box.setAttribute('checked','checked')
        label.style.backgroundColor='white'
    }
    if(i===149||i===151){
        box.setAttribute('checked','checked')
        label.style.backgroundColor='blue'
    }
    if(i===209 || i===210||i===211|| i===228||i===229||i===230||i===231||i===232
        ||i===247||i===249||i===250||i===251||i===253||
        i===268||i===269 || i===270||i===271||i===288){
        box.setAttribute('checked','checked')
        label.style.backgroundColor='#2fe50b'
    }
    if(i===289 || i===290||i===291||i===309||i===310||i===311||i===329||
        i===331||i===349 || i===348||i===351||i===352){
        box.setAttribute('checked','checked')
        label.style.backgroundColor='yellow'
    }
        
}