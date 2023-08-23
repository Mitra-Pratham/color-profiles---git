import styleArray from "./style-array-alt.js";
// const rootStyle = document.querySelector(':root');

// const styleSheet = document.styleSheets;

// const styleSheetSize = styleSheet[1].cssRules[0].styleMap.size;

// let rootStyleArray = []


// for(let i=0; i < styleSheetSize; i++ ){

//     let tempName = styleSheet[1].cssRules[0].style[i]
//     let rootStyleComputed = getComputedStyle(rootStyle);
//     let tempItem = {
//         name: tempName,
//         value: rootStyleComputed.getPropertyValue(tempName),
//         text: '',
//         type:''
//     }

//     rootStyleArray.push(tempItem);
// }

$('.container').append(styleArray.map((el,index) => {
return `<div class="p-4">
<h1>${index+1}. ${el.name.slice(2)}</h1>
<h4>Default Value: <span class="code">${el.name}:${el.value}</span></h4>
<h5>${el.text}</h5>
<h4>Example:</h4>
</div>`
}).join(""));

$('.table tbody').append(styleArray.map((el,index) => {
    return `
    <tr>
        <th>${index+1}</th>
        <td>${el.name}</td>
        <td><span class="code">${el.value}</span></td>
        <td>${el.text}</td>
        <td>Example</td>
    </tr>`
    }).join(""));

    function createType(val){
        const tempTypes = {
            'Font Family': 'https://www.w3schools.com/cssref/pr_font_font-family.php',
            'Font Wieght': 'https://www.w3schools.com/cssref/pr_font_weight.php',
            'Color': 'https://www.w3schools.com/css/css_colors_hex.asp',
            'Units': 'https://www.w3schools.com/cssref/css_units.php',
            'Shadow': 'https://www.w3schools.com/css/css3_shadows.asp',
        };

        return `<a href="${tempTypes[val]}" target=_blank>${val}</a>`
    }