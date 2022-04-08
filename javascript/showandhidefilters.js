let pricearrow = document.getElementById("pricearrow");
let pricefilter = document.getElementById("pricefilter");
var pricefilteractive = 1; // 0 = ESCONDIDO, 1 = AMOSTRA;
pricearrow.onclick = ShowPriceFilter;

function ShowPriceFilter() {
    if (pricefilteractive == 1) {

        pricefilteractive = 0;

        pricearrow.setAttribute("name", "chevron-down-outline");
        pricefilter.style.setProperty('display', 'none');
    }

    else {

        pricefilteractive = 1;

        pricearrow.setAttribute("name", "chevron-up-outline");
        pricefilter.style.setProperty('display', 'inherit');
    }
}

let brandarrow = document.getElementById("brandarrow");
let brandfilter = document.getElementById("brandfilter");
var brandfilteractive = 1; // 0 = ESCONDIDO, 1 = AMOSTRA;
brandarrow.onclick = ShowBrandFilter;

function ShowBrandFilter() {
    if (brandfilteractive == 1) {

        brandfilteractive = 0;

        brandarrow.setAttribute("name", "chevron-down-outline");
        brandfilter.style.setProperty('display', 'none');
    }

    else {

        brandfilteractive = 1;

        brandarrow.setAttribute("name", "chevron-up-outline");
        brandfilter.style.setProperty('display', 'inherit');
    }
}

let sizearrow = document.getElementById("sizearrow");
let sizesfilter = document.getElementById("sizesfilter");
var sizefilteractive = 1; // 0 = ESCONDIDO, 1 = AMOSTRA;
sizearrow.onclick = ShowSizeFilter;

function ShowSizeFilter() {
    if (sizefilteractive == 1) {

        sizefilteractive = 0;

        sizearrow.setAttribute("name", "chevron-down-outline");
        sizesfilter.style.setProperty('display', 'none');
    }

    else {

        sizefilteractive = 1;

        sizearrow.setAttribute("name", "chevron-up-outline");
        sizesfilter.style.setProperty('display', 'inherit');
    }
}

let conditionarrow = document.getElementById("conditionarrow");
let conditionfilter = document.getElementById("conditionfilter");
var conditionfilteractive = 1; // 0 = ESCONDIDO, 1 = AMOSTRA;
conditionarrow.onclick = ShowconditionFilter;

function ShowconditionFilter() {
    if (conditionfilteractive == 1) {

        conditionfilteractive = 0;

        conditionarrow.setAttribute("name", "chevron-down-outline");
        conditionfilter.style.setProperty('display', 'none');
    }

    else {

        conditionfilteractive = 1;

        conditionarrow.setAttribute("name", "chevron-up-outline");
        conditionfilter.style.setProperty('display', 'inherit');
    }
}