import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');

texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero enim, feugiat euismod mauris et, finibus facilisis neque. Morbi posuere porttitor felis vel facilisis. Duis viverra dui vel erat ultricies molestie. Vestibulum imperdiet arcu id lacus dapibus aliquet. Vivamus et dolor tortor. Donec ac iaculis ex. Sed nec facilisis sapien. Maecenas auctor est quis orci faucibus posuere. Ut maximus a erat ac euismod.
    <br/><br/>
    Phasellus at lorem magna. Curabitur pretium finibus gravida. Nunc nisi lacus, finibus venenatis laoreet at, lobortis sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id malesuada magna. Ut ultrices, nibh vel ultrices posuere, diam dui posuere metus, volutpat finibus nunc lacus in nibh. Etiam eu facilisis risus. Quisque sollicitudin dolor magna, eu volutpat ligula faucibus cursus. Fusce maximus sit amet neque non dapibus. Donec sed est ligula. Suspendisse malesuada dolor nec risus dapibus, nec bibendum erat facilisis. Sed tincidunt sem sapien, vitae feugiat est porttitor quis. In et dolor mauris. Praesent rutrum volutpat nibh nec mollis. Vestibulum facilisis justo nibh, at facilisis nunc fermentum non. Integer imperdiet turpis vitae dapibus dictum.
    <br/><br/>
    Sed viverra risus at sapien interdum, id mollis turpis blandit. Aliquam tristique est sed ullamcorper maximus. Phasellus id rutrum turpis, a bibendum mi. In hac habitasse platea dictumst. Curabitur convallis elit quis luctus auctor. Duis dictum velit non sem imperdiet, in tincidunt nisi dictum. Donec sit amet vulputate urna. Donec mi turpis, vestibulum at hendrerit sed, lacinia et eros. Fusce viverra augue nibh, eu efficitur urna ornare nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum porttitor venenatis.
    <br/><br/>
    Fusce dictum, sapien a euismod euismod, dui magna condimentum est, et pharetra mi metus nec mauris. Duis ipsum est, elementum at metus egestas, aliquam malesuada orci. Duis in arcu eget ante eleifend accumsan. Curabitur in erat dolor. Sed a mi a massa luctus facilisis. Sed eget hendrerit arcu. Cras nec libero sit amet eros consectetur viverra. Suspendisse potenti. Vestibulum a nisl vel urna laoreet facilisis. Pellentesque nulla purus, ultricies sed mi id, sollicitudin tincidunt eros. Fusce id eleifend turpis.
    <br/><br/>
    Pellentesque vel elit iaculis, faucibus dui ut, scelerisque lectus. Ut accumsan interdum venenatis. Vestibulum tristique felis sit amet sem semper facilisis. Curabitur urna lacus, faucibus eget egestas id, porttitor vitae leo. Fusce bibendum accumsan nunc in egestas. Vivamus et hendrerit turpis. Vestibulum sollicitudin semper risus sit amet pellentesque. Morbi sit amet neque ac justo viverra varius. Vestibulum eget velit volutpat, placerat nunc eget, semper urna. Vestibulum quis lorem facilisis, sollicitudin mi ac, eleifend elit. Fusce consequat turpis risus, id gravida elit commodo nec. Pellentesque orci est, pharetra quis magna nec, imperdiet molestie ex. Nam quis tortor et lacus feugiat lacinia. Ut non pellentesque sapien, vel pulvinar metus.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero enim, feugiat euismod mauris et, finibus facilisis neque. Morbi posuere porttitor felis vel facilisis. Duis viverra dui vel erat ultricies molestie. Vestibulum imperdiet arcu id lacus dapibus aliquet. Vivamus et dolor tortor. Donec ac iaculis ex. Sed nec facilisis sapien. Maecenas auctor est quis orci faucibus posuere. Ut maximus a erat ac euismod.
    <br/><br/>
    Phasellus at lorem magna. Curabitur pretium finibus gravida. Nunc nisi lacus, finibus venenatis laoreet at, lobortis sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id malesuada magna. Ut ultrices, nibh vel ultrices posuere, diam dui posuere metus, volutpat finibus nunc lacus in nibh. Etiam eu facilisis risus. Quisque sollicitudin dolor magna, eu volutpat ligula faucibus cursus. Fusce maximus sit amet neque non dapibus. Donec sed est ligula. Suspendisse malesuada dolor nec risus dapibus, nec bibendum erat facilisis. Sed tincidunt sem sapien, vitae feugiat est porttitor quis. In et dolor mauris. Praesent rutrum volutpat nibh nec mollis. Vestibulum facilisis justo nibh, at facilisis nunc fermentum non. Integer imperdiet turpis vitae dapibus dictum.
    <br/><br/>
    Sed viverra risus at sapien interdum, id mollis turpis blandit. Aliquam tristique est sed ullamcorper maximus. Phasellus id rutrum turpis, a bibendum mi. In hac habitasse platea dictumst. Curabitur convallis elit quis luctus auctor. Duis dictum velit non sem imperdiet, in tincidunt nisi dictum. Donec sit amet vulputate urna. Donec mi turpis, vestibulum at hendrerit sed, lacinia et eros. Fusce viverra augue nibh, eu efficitur urna ornare nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum porttitor venenatis.
    <br/><br/>
    Fusce dictum, sapien a euismod euismod, dui magna condimentum est, et pharetra mi metus nec mauris. Duis ipsum est, elementum at metus egestas, aliquam malesuada orci. Duis in arcu eget ante eleifend accumsan. Curabitur in erat dolor. Sed a mi a massa luctus facilisis. Sed eget hendrerit arcu. Cras nec libero sit amet eros consectetur viverra. Suspendisse potenti. Vestibulum a nisl vel urna laoreet facilisis. Pellentesque nulla purus, ultricies sed mi id, sollicitudin tincidunt eros. Fusce id eleifend turpis.
    <br/><br/>
    Pellentesque vel elit iaculis, faucibus dui ut, scelerisque lectus. Ut accumsan interdum venenatis. Vestibulum tristique felis sit amet sem semper facilisis. Curabitur urna lacus, faucibus eget egestas id, porttitor vitae leo. Fusce bibendum accumsan nunc in egestas. Vivamus et hendrerit turpis. Vestibulum sollicitudin semper risus sit amet pellentesque. Morbi sit amet neque ac justo viverra varius. Vestibulum eget velit volutpat, placerat nunc eget, semper urna. Vestibulum quis lorem facilisis, sollicitudin mi ac, eleifend elit. Fusce consequat turpis risus, id gravida elit commodo nec. Pellentesque orci est, pharetra quis magna nec, imperdiet molestie ex. Nam quis tortor et lacus feugiat lacinia. Ut non pellentesque sapien, vel pulvinar metus.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero enim, feugiat euismod mauris et, finibus facilisis neque. Morbi posuere porttitor felis vel facilisis. Duis viverra dui vel erat ultricies molestie. Vestibulum imperdiet arcu id lacus dapibus aliquet. Vivamus et dolor tortor. Donec ac iaculis ex. Sed nec facilisis sapien. Maecenas auctor est quis orci faucibus posuere. Ut maximus a erat ac euismod.
    <br/><br/>
    Phasellus at lorem magna. Curabitur pretium finibus gravida. Nunc nisi lacus, finibus venenatis laoreet at, lobortis sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id malesuada magna. Ut ultrices, nibh vel ultrices posuere, diam dui posuere metus, volutpat finibus nunc lacus in nibh. Etiam eu facilisis risus. Quisque sollicitudin dolor magna, eu volutpat ligula faucibus cursus. Fusce maximus sit amet neque non dapibus. Donec sed est ligula. Suspendisse malesuada dolor nec risus dapibus, nec bibendum erat facilisis. Sed tincidunt sem sapien, vitae feugiat est porttitor quis. In et dolor mauris. Praesent rutrum volutpat nibh nec mollis. Vestibulum facilisis justo nibh, at facilisis nunc fermentum non. Integer imperdiet turpis vitae dapibus dictum.
    <br/><br/>
    Sed viverra risus at sapien interdum, id mollis turpis blandit. Aliquam tristique est sed ullamcorper maximus. Phasellus id rutrum turpis, a bibendum mi. In hac habitasse platea dictumst. Curabitur convallis elit quis luctus auctor. Duis dictum velit non sem imperdiet, in tincidunt nisi dictum. Donec sit amet vulputate urna. Donec mi turpis, vestibulum at hendrerit sed, lacinia et eros. Fusce viverra augue nibh, eu efficitur urna ornare nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras interdum porttitor venenatis.
    <br/><br/>
    Fusce dictum, sapien a euismod euismod, dui magna condimentum est, et pharetra mi metus nec mauris. Duis ipsum est, elementum at metus egestas, aliquam malesuada orci. Duis in arcu eget ante eleifend accumsan. Curabitur in erat dolor. Sed a mi a massa luctus facilisis. Sed eget hendrerit arcu. Cras nec libero sit amet eros consectetur viverra. Suspendisse potenti. Vestibulum a nisl vel urna laoreet facilisis. Pellentesque nulla purus, ultricies sed mi id, sollicitudin tincidunt eros. Fusce id eleifend turpis.
    <br/><br/>
    Pellentesque vel elit iaculis, faucibus dui ut, scelerisque lectus. Ut accumsan interdum venenatis. Vestibulum tristique felis sit amet sem semper facilisis. Curabitur urna lacus, faucibus eget egestas id, porttitor vitae leo. Fusce bibendum accumsan nunc in egestas. Vivamus et hendrerit turpis. Vestibulum sollicitudin semper risus sit amet pellentesque. Morbi sit amet neque ac justo viverra varius. Vestibulum eget velit volutpat, placerat nunc eget, semper urna. Vestibulum quis lorem facilisis, sollicitudin mi ac, eleifend elit. Fusce consequat turpis risus, id gravida elit commodo nec. Pellentesque orci est, pharetra quis magna nec, imperdiet molestie ex. Nam quis tortor et lacus feugiat lacinia. Ut non pellentesque sapien, vel pulvinar metus.
`;

const body = document.querySelector("body");
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;   
    return (scrollTop/ (scrollHeight - clientHeight)) * 100;
};

//streams

const scroll = fromEvent(document, 'scroll').pipe(
    map(event => calcularPorcentajeScroll(event))
).subscribe(porcentaje => {
    console.log(porcentaje);
    progressBar.style.width = `${ porcentaje }%`;
});